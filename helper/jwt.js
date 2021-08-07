function jwtAuth() {
    const secret = process.env.secret
    return expressJwt({
        secret,
        algorithms : ['HS256']
    }    
    )
}

module.exports = jwtAuth;