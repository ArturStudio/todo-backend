const Router = require('express');
const user = Router();

const UserService = require('../controller/user');

user.post('/register', UserService.register);
user.post('/login', UserService.login);
user.post('/logout', UserService.logout);
user.post('/delete', UserService.delete);
user.delete('/refresh-token', UserService.refresh);


module.exports = user;