const PostService = require('../serivce/post');

class Post {
    async create(req, res, next){
        return await PostService.create(req.user.id, req.body.text)
            .then(answer => {
                res.json(answer)
            })
            .catch(err => {
                next(err)
            })
    }

    async edit(req, res, next){
        return await PostService.edit(req.body.post)
            .then(answer => {
                res.json(answer)
            })
            .catch(err => {
                next(err)
            })
    }

    async get(req, res, next){
        if(req.params?.id){
            return await PostService.getPost(req.params.id)
                .then(answer => {
                    res.json(answer)
                })
                .catch(err => {
                    next(err)
                })
        }

        return await PostService.getAll()
            .then(answer => {
                res.json(answer)
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = new Post();