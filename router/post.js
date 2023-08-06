const Router = require('express');
const post = Router();

const PostController = require('../controller/post');
const AuthMiddleware = require('../middle-ware/auth');

post.post('/', AuthMiddleware, PostController.create)
post.put('/:id', AuthMiddleware, PostController.edit)
post.get('/:id', PostController.get)
post.get('/', PostController.get)


module.exports = post;