let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res)=> {
    res.render('about', { title: 'About page' });
});

module.exports = router;
