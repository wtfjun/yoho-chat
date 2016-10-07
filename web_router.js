var express = require('express');
var controllers = require('./controllers/controllers');
var router = express.Router();

// /* GET home page. */
router.get('/', controllers.showIndex);																			//show index
router.post('/loginAction', controllers.loginAction);													//sign up action
router.post('/leaveMessageAction', controllers.leaveMessageAction);					//add a message
// router.get('/updateMessagesAction', message.updateMessagesAction);					//add a message

module.exports = router;
