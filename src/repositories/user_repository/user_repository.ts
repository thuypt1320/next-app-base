import { AxiosInstance } from "axios";
import { IUser } from "types";
export class UserRepository {
  private axiosWithToken: AxiosInstance;
  private axiosWithoutToken: AxiosInstance;

  constructor(axiosWithToken: AxiosInstance, axiosWithoutToken: AxiosInstance) {
    this.axiosWithToken = axiosWithToken;
    this.axiosWithoutToken = axiosWithoutToken;
  }

  async list() {
    return this.axiosWithToken.get('/users');
  }

  async detail(_params: { id?: string }) {
    return this.axiosWithToken.get(`/users/${_params.id}`);
  }

  async create(_params: {}) {
    return this.axiosWithToken.post('/users', _params);
  }

  async update(_params: Partial<IUser>) {
    return this.axiosWithToken.put(`/users/${_params.id}`, {
      name: _params.name,
      email: _params.email
    });
  }

  async remove(_params: { id?: string }) {
    return this.axiosWithToken.delete(`/users/${_params.id}`);
  }
}
