import { applyMiddleware } from "redux";
import { authMiddleware } from "redux/middlewares/auth";
export const middlewares = applyMiddleware(authMiddleware);
