import {z} from 'zod'
import {AppError} from "../../pkgs/error/error.js";

export const validateData = (dto, bodyData) => {
    const result = z.safeParse(dto, bodyData);
    console.log('result : ',result);
    if (result.success === false) {
        // return result.error;
        const errMessage =  result.error.issues.map(i => `${i.path[0]} : ${i.message}`)
        console.log("result: ",);
        throw new AppError(errMessage.join(` - `), 400)
    }
    return result.data;
}