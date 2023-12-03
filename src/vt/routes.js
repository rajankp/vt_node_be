const { Router } = require("express");
const controller = require('./controller')
const router = Router();

router.get('/', controller.getUsers)
router.post('/', controller.checkUserExists)
router.get('/:id', controller.getUserById)
router.delete('/:id', controller.deleteUser)

module.exports = router;
