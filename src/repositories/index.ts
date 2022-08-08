import { AuthRepository } from "repositories/auth_repository";
import { axiosWithAuth, axiosWithoutAuth } from "libs/axios";
export const authRepository = new AuthRepository(axiosWithAuth, axiosWithoutAuth);
