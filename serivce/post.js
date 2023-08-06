const ApiExceptions = require("../exeptions/ApiExeptions");
const PostModels = require('../models/post');
class PostService {
    async create(userId, test){
        if(!userId || !test){
            throw ApiExceptions.BadRequest('invalid data')
        }
        return await PostModels.create(userId, test);
    }

    async edit(post){
        return await PostModels.edit(post);
    }

    async getAll(){
        return await PostModels.get();
    }

    async getPost(postId){
        return await PostModels.getOne(postId);
    }
}

module.exports = new PostService();