'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async registerAction() {
    console.log("register");
    let userName = this.post("name");
    let email = this.post("email");
    let password = this.post("password");
    console.log(userName);
    console.log(email);
    console.log(password);

    let model = this.model("user");    
    let ID;
  
    try {
      let insertId = await model.add({
        Name: userName,
        Password: think.md5(password),
        Email: email
      });
      ID = insertId;
    
      let tokenService = think.service("account/token");    
      let tokenServiceInstance = new tokenService();
      
      let token = await tokenServiceInstance.createToken({
        userInfo: {
          id: ID,
          name: userName,
          email: email
        }
      });
      
      this.http.header("token", token);
      return this.success("SUCCESS");
    } catch (err) {
      think.log(err);
      return this.fail("SERVER_INVALID");
    }
  } //end of registerAction



  async loginAction() {
 
    let loginId = this.post("loginId");  
    let paramPassword = this.post("password");
    
    console.log(loginId);
    console.log(paramPassword);

    let model = this.model("user");
    let data;
    
   

      data = await model.where({
        Email: loginId,
        Password: think.md5(paramPassword)
      }).find();
      
   
    if(think.isEmpty(data)) {
      data = await model.where({
        Name: loginId,
        Password: think.md5(paramPassword)
      }).find();
    }
    
     console.log("find user by name: " + data._id + "   "+ data.Email + " " + data.Name);
   

    if (!think.isEmpty(data)) {
    
      let tokenService = think.service("account/token");
      let tokenServiceInstance = new tokenService();
  
      let token = await tokenServiceInstance.createToken({
        userInfo: {
          id: data._id,
          name: data.Name,
          email: data.email
        }
      });
    
      this.http.header("token", token);
      return this.success("SUCCESS");

    } else {
      return this.fail("NEED_LOGIN");
    }
  }//end of loginAction

}