const express=require('express');
const base64 = require('base-64');
const bcrypt = require('bcrypt');
const router=express.Router();
const { users }=require('../models/index');


router.get('/signin', signin);
router.post('/signup',signup);
router.get('/users', getusers);
router.put('/update', updateUser);
router.delete('/delete', deleteUser);


// async function create(req, res) {
//     let UserInfo = req.headers.authorization;
//     let basicHeaderParts = UserInfo.split(' ');  // ['Basic', 'aGVtYToxMjM0']
//     let encodedString = basicHeaderParts.pop();  //aGVtYToxMjM0
//     let decodedString = base64.decode(encodedString); // "username:password"
//     let [userName, userPassword] = decodedString.split(':'); // username, password
  
//     try {
        
//         let hashedPassword = await bcrypt.hash(userPassword, 10);
      
//         const userRecord = await User.create(
//             {
//                 userName: userName,
//                 userPassword: hashedPassword
//             }
//             );
//             res.status(200).json(userRecord );
//         } catch (e) { res.status(403).send("Error In Creating User"); }  
//     }


async function signup(req,res){

let userdata=req.headers.authorization;
console.log(userdata);
let encoded=userdata.split(" ")
let encodedcredit=encoded.pop();
let dencodedCredittentials =base64.decode(encodedcredit)
console.log(encodedcredit);
let [username, password]=dencodedCredittentials.split(" ");


try{
let hashedpassword =await bcrypt.hash(password, 10)
const userRecord = await user.create({username:username , password:hashedpassword});
res.status(201).json(userRecord);

} catch(error){res.status(403).send('cant create user')}
}

async function signin(req,res){

    let userdata=req.headers.authorization;
    // console.log(userdata);
    let encoded=userdata.split(" ");
    let encodedcredit=encoded.pop();
    let dencodedCredittentials =base64.decode(encodedcredit)
    // console.log(decodedCreditentials);
    let [username, password]=dencodedCredittentials.split(':');
    
    
    
    try{
    let userRecord =await users.signin(username);
    const Valid = await bcrypt.compare(password, userRecord.password);
    if(valid){
    res.status(201).json(userRecord);}
    else{throw new Error('invalid password')}
    } catch(error){res.status(403).send('invalid name')}
}

async function getusers(req,res){

    let allusers = await Users.getAll();
    res.status(200).json(allusers);

}


async function updateUser(req, res) {
    let id = parseInt(req.params.id);
    let Userdata= req.body;

    let TheUser = await TheUser.update(Userdata, id);
    res.status(200).json(TheUser);
}

async function deleteUser(req, res) {
    let id = parseInt(req.params.id);

    await User.delete(id);
}

module.exports=router;