import jwt from 'jsonwebtoken'
import {userNotLoggedIn} from "../../user/user.errors.js";
import {env} from "../../../lib/config/env.js";

export const generateToken =  payload => {
    return  jwt.sign(payload , env.jwt.secret,{expiresIn: '1d'});
}

export const verifyToken = async token => {
    if (!token) throw userNotLoggedIn;
    return jwt.verify(token, env.jwt.secret)
}