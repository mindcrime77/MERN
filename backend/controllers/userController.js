const User = require('../models/User')
const sendToken = require('../hellpers/jwtToken')

exports.register = async (req, res) => {
    try {
        const { email, password, repeat } = req.body

        if (!email || !password || !repeat) {
            res.status(401).json({ success: false, msg: 'Ivalid input' })
            return

        }
        const user = await User.findOne({ email }).select('+password')
        if (user) {
            res.status(401).json({ success: false, msg: 'User already exists' })
            return
        }

        if (password !== repeat) {
            res.status(401).json({ success: false, msg: 'Password doesnt match' })
            return
        }

        const new_user = await User.create({ email, password })

        sendToken(new_user, 200, res)
    } catch (error) {
        console.log(error)
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            res.status(401).json({ success: false, msg: 'Email or password missing...' })
            return
        }
        const user = await User.findOne({ email }).select('+password')
        if (!user) {
            res.status(401).json({ success: false, msg: 'Wrong user...' })
            return
        }
        const passwordMatched = await user.comparePasswords(password)
        if (!passwordMatched) {
            res.status(401).json({ success: false, msg: 'Wrong password...' })
            return
        }

        sendToken(user, 200, res)

    } catch (error) {
        console.log(error)
    }
}

