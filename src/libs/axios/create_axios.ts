import axios from "axios";
import { storageService } from "services";
import { credentialKeyStorage } from "services/storage_service";
import { ICredential } from "types";
interface IConfig {
  withAuthToken: boolean
}

const defaultConfig = {
  withAuthToken: true
};

export const createAxios = (config?: IConfig) => {
  const configValue = config || defaultConfig;

  const baseURL = process.env.NEXT_PUBLIC_API_URL;
  const headers = {
    'Content-Type': 'application/json'
  };

  const client = axios.create({
    baseURL,
    headers
  });

  if (!configValue.withAuthToken) {
    const credential = storageService.get(credentialKeyStorage) as ICredential;
    if (credential?.access_token) {
      client.interceptors.request.use(requestConfig => {
        requestConfig.headers.Authentication = credential.access_token;
        return requestConfig;
      });
      return client;
    }
  }

  return client;
};
