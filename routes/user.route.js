const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/User.controller');


// index
router.get('/', product_controller.listAll);
//crear
router.post('/create', product_controller.product_create);

router.get('/create', product_controller.product_create2);

router.get('/edit/:id', product_controller.product_details);

router.get('/delete/:id', product_controller.product_delete);

router.post('/update/:id', product_controller.product_update);


module.exports = router;