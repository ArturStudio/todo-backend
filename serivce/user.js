const ApiExceptions = require('../exeptions/ApiExeptions');

const UserModel = require('../models/user');
const TokenService = require('../serivce/Token');
class UserService {
    async register(login, password){
        if(!login || !password){
            throw ApiExceptions.BadRequest('invalid data')
        }
        const isAlreadyReg = UserModel.getByLogin(login)
        if (isAlreadyReg) throw ApiExceptions.BadRequest('already auth');
        let user = await UserModel.create(login, password);
        const tokens = TokenService.generateTokens(user);
        await TokenService.saveToken(user.id, tokens.refreshToken);

        return {userId: user.id, ...tokens};
    }

    async login(login, password){
        if(!login || !password){
            throw ApiExceptions.BadRequest('invalid data')
        }
        const user = UserModel.getByLogin(login)
        if (!user || password !== user.password) throw ApiExceptions.BadRequest('error log');
        const tokens = TokenService.generateTokens(user);
        await TokenService.saveToken(user.id, tokens.refreshToken);
        return {userId: user.id, ...tokens};
    }

    async logout(token){
        return TokenService.removeToken(token)
    }

    async delete(login){
        return UserModel.delete(login)
    }
    async refresh(refreshToken){
        let isToken = await TokenService.findToken(refreshToken);
        if(!isToken){
            throw ApiExceptions.UnauthorizedError();
        }
        let user = await TokenService.validateRefreshToken(refreshToken);
        if(!user){
            throw ApiExceptions.UnauthorizedError()
        }
        let tokens = await TokenService.generateTokens(user);
        await TokenService.saveToken(user.id, tokens.refreshToken)
        return {
            ...tokens
        }
    }


}

module.exports = new UserService();