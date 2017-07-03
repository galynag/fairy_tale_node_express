let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res)=> {
    let title='Tales page';
    let src='images/skazka2.jpg';
    let text= 'test text';
    res.render('tales', {title: title, src: src,text: text});
});

module.exports = router;