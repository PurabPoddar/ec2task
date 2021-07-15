const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('ANSJKASDAABSBAS');
    return;
});

router.get('/Ezaf', (req, res) => {
    const a = 15;
    const b = 20;
    const c = a + b;
    res.json({
        sum: c
    });
    //res.send(c)
    //return c;
});



module.exports = router;