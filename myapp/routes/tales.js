let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res)=> {
    // let title='Tales page';
    // let src='skazka2.jpg';
    // let text= 'test text';
    res.render('tales', {title: 'Tales page',src: 'skazka2.jpg',text: 'test text'});
});

module.exports = router;