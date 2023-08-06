const UserService = require('../serivce/user');


class User {
    async register(req, res, next){
        return await UserService.register(req.body.login, req.body.password)
            .then(answer => {
                return res.json(answer)
            })
            .catch(err => {
                next(err)
            })
    }

    async login(req, res, next){
        return await UserService.login(req.body.login, req.body.password)
            .then(answer => {
                return res.json(answer)
            })
            .catch(err => {
                next(err)
            })
    }

    async logout(req, res, next){
        return await UserService.logout(req.body.refresh)
            .then(answer => {
                return res.json(answer)
            })
            .catch(err => {
                next(err)
            })
    }

    async delete(req, res, next){
        return await UserService.delete(req.body.login)
            .then(answer => {
                return res.json(answer)
            })
            .catch(err => {
                next(err)
            })
    }

    async refresh(req, res, next){
        return await UserService.refresh(req.body.refresh)
            .then(answer => {
                return res.json(answer)
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = new User();