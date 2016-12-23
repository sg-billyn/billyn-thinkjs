'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    console.log("index action");
    //auto render template file index_index.html
    return this.display();
  }

  registerAction() {
    console.log("register action");
     return this.success("SUCCESS");


    // //定义接收参数
    // let paramName = this.post("name");
    // let parmPassword = this.post("password");
    // //定义数据模型
    // let model = this.model("useraccount");
    // //定义个人id
    // let ID;
    // //数据库写入记录
    // try {
    //   let insertId = await model.add({
    //     Name: paramName,
    //     Password: think.md5(parmPassword),
    //     RegisterDate: think.datetime(); // new Date()
    //   });
    //   ID = insertId;
    //   //调用tokenservice中间件
    //   let tokenService = think.service("token");
    //   let tokenServiceInstance = new tokenService();
    //   //写入token信息
    //   let token = await tokenServiceInstance.createToken({
    //     userInfo: {
    //       id: ID,
    //       name: paramName
    //     }
    //   });
    //   //传输客户端token
    //   this.http.header("token", token);
    //   return this.success("SUCCESS");
    // } catch (err) {
    //   think.log(err);
    //   return this.fail("SERVER_INVALID");
    // }


  }


}