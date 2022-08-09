import { applyMiddleware } from "redux";
import { authMiddleware } from "redux/middlewares/auth";
import { userMiddleware } from "redux/middlewares/user";
export const middlewares = applyMiddleware(authMiddleware, userMiddleware);
