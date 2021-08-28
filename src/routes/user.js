'use strict';

const express = require('express')
const router = express.Router();
const {Users} = require('../models/index');
router.use(express.json())

const bearer=require('../middleware/bearer')
const basic=require('../middleware/basic')
const asl=require('../middleware/acl')

function signUp(req,res){
    console.log(req)

    Users.create(req.body)
    .then(user => res.status(201).send(user))
    .catch(err => res.status(400).send(err))
}
async function readFun(req,res){
    let allUsers = await Users.findAll();
    res.status(200).json(allUsers);



};


function createFun(req,res){

    res.send('Creation accepted')

    
};




async function updateFun(req,res){
    // let id = parseInt(req.params.id);    
    // let UserData = req.body;
    // let UserInformation = await Users.update(UserData, id);    
    res.status(200).send('You have a Permission to update');
}

function signIn(req,res){
    res.status(200).send(req.user);
}


router.get('/', (req, res) => {
    res.status(200).send('welcome ');
});

router.post('/signIn', basic(Users) ,signIn)
router.post('/signUp', signUp)
router.get('/read', bearer(Users),asl("read"),readFun)
router.put('/update', bearer(Users),asl("update"),updateFun)
router.put('/create', bearer(Users),asl("write"),createFun)



module.exports = router