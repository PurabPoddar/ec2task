const { Router } = require('express');
const express = require('express');
const router = express.Router();
const messages = require('../../util/messageCode.json').trainer;

const {findStudent,saveStudent} = require('../../service/trainer/trainer');



router.get('/', async(req, res)=> {
    console.log('Routes hit');
    const data = await findStudent();
    const responseReceived = data.length !== 0; // CONDITION FOR ARRAY RESPONSE
            res.status(responseReceived ? 200 : 404);
            res.json({
                status: responseReceived,
                message: responseReceived ? messages.find[200] : messages.find[404],
                data: data,
            });    
    
});





router.post('/', async(req, res)=> {
    console.log('Post Routes hit', req.body);
    const body = req.body;
    const data = await saveStudent(body);
    res.send(data);
});


module.exports = router;