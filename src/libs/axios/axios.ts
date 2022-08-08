import { createAxios } from "libs/axios/create_axios";
export const axiosWithAuth = createAxios();
export const axiosWithoutAuth = createAxios({withAuthToken: false});
