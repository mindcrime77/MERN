const sendToken = (user, statusCode, res) => {
    const token = user.getJwtToken()


    res.status(statusCode).cookie('token', token, {
        maxAge: 900000, httpOnly: true
    }).json({
        success: true,
        token,
        user
    })
}

module.exports = sendToken