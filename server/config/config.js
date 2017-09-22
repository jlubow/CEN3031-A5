//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://hello:hello1@ds123124.mlab.com:23124/assignment3-1', //place the URI of your mongo database here.
  }, 
  googleMaps: {
    key: 'AIzaSyCr1gCiCN8HZ97hDkM50mY1F2ZuCt_tOuI'
  },
  port: process.env.PORT
};
