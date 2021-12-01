const User = require('../models/User')
const jwt = require('jsonwebtoken')

exports.isAuthenticatedUser = async (req, res, next) => {
    try {
        const { token } = req.headers
        //const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if (token) {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            res.status(200).json({ success: true, decoded })
            req.user = await User.findById(decoded.id)
            next()
        }



    } catch (error) {
        res.status(401).json({ success: false, error })
    }

}