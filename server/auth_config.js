const db = require("./config/connection");
const collection = require("./config/collection");
const bcrypt = require("bcrypt");

module.exports = {
  signup: (signUpData) => {
    return new Promise(async (resolve, reject) => {
      signUpData.password = await bcrypt.hash(signUpData.password, 10);
      db.get()
        .collection(collection.USER_COLLECTION)
        .insertOne(signUpData)
        .then((data) => {
            console.log(data)
          resolve(data.ops[0]);
        });
    });
  },
  login: (loginData) => {
    let response = {};
    return new Promise(async (resolve, reject) => {
      let user = await db
        .get()
        .collection(collection.USER_COLLECTION)
        .findOne({ email: loginData.email });
      if (user) {
        bcrypt.compare(loginData.password, user.password).then((status) => {
          if (status) {
              console.log(status)
            response.user = user;
            response.loginStatus = true;
            resolve(response);
          } else {
            resolve({ loginStatus: false });
          }
        });
      } else {
        resolve({ loginStatus: false });
      }
    });
  },
};
