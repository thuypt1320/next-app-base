import { axiosWithAuth, axiosWithoutAuth } from "libs/axios";
import { AuthRepository } from "repositories/auth_repository";
import { UserRepository } from "repositories/user_repository";

export const authRepository = new AuthRepository(axiosWithAuth, axiosWithoutAuth);
export const userRepository = new UserRepository(axiosWithAuth, axiosWithoutAuth);
