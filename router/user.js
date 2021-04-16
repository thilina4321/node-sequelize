const express = require('express')
const router = express.Router()

const user = require('../controller/user')

router.post('/create', user.createUser)
router.patch('/update', user.updateUser)
router.get('/find', user.findAllUsers)
router.delete('/delete', user.deleteUser)

module.exports = router