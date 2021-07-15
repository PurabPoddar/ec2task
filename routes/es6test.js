const express = require('express');
const router = express.Router();
const {eg4} = require('../service/es6test');


router.get('/eg1', (req,res) => {
    const data = eg1();
    res.send(data);
});

router.get('/eg2', (req,res) => {
    const data2 = eg2();
    res.send(data2);
});

router.get('/eg3', (req,res) => {
    const data3 = eg3();
    res.send(data3)
});

router.get('/eg4', (req,res) => {
    const data4 = eg4();
    res.send(data4)
});

router.get('/eg5', (req,res) => {
    const data5 = eg5();
    res.send(data5)
});

router.get('./eg6', (req,res) => {
    const data6 = eg6();
    res.send(data6)
});

router.get('./eg7', (req,res) => {
    const data7 = eg7();
    res.send(data7)
});

router.get('./eg8', (req,res) => {
    const data8 = eg8();
    res.send(data8)
});

router.get('./eg9', (req,res) => {
    const data9 = eg9();
    res.send(data9)
});

router.get('./eg10', (req,res) => {
    const data10 = eg10();
    res.send(data10)
});

module.exports = router;