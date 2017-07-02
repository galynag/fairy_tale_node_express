let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res)=> {
    res.render('contacts', { title: 'Contacts page' });
});

module.exports = router;