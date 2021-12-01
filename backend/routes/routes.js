const router = require('express').Router()
const { register, login } = require('../controllers/userController')


router
    .route('/user/register')
    .post(register)

router
    .route('/user/login')
    .post(login)




module.exports = router