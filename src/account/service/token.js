'use strict';

let secret = think.config("billynjwt.secret", undefined, "account");
let jwt = require('jsonwebtoken');

//let expiresIn = think.config("gotolion.expiresIn");

export default class extends think.service.base {
  
    /**
     * @description create token
     * @param {Object} userinfo 
     * @return token
     */
    createToken(userinfo) {
        let result = jwt.sign(userinfo, secret);
        return result;
    }


    /**
     * @description verify token
     * @param {Object} token the token to be verified
     * @return 'fail' or verified result
     */
    verifyToken(token) {
        if (token) {
            try {
                let result = jwt.verify(token, secret);
                return result;
            } catch (err) {
                //票据验证失败,需要提示需要重新登录
                return "fail";
            }
        }
        return "fail";
    }

}