const Router = require('express');
const router = Router();

router.use('/post', require('./post'))
router.use('/user', require('./user'))

module.exports = router;