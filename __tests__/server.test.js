'use strict';

const { server } =require('../src/server');
const supertest =require('supertest');
const request =supertest(server);



describe('middleware server',()=>{

it('404',async()=>{ 
    
let param='/notfound';
let status=404;
//act
const response = await request.get(param);
//assert
expect(response.status).toBe(status);
expect(typeof response.body).toEqual('object');});

it('500',async()=>{

    let param='/badreq';
    let status=500;
    //act
const response = await request.post(param);
//assert
expect(response.status).toBe(status);

});

it('person',async()=>{

    let param='/correct route';
    let status=200;
    //act
    const response = await request.get(param);
    //assert
    expect(response.status).toBe(status);

});
}) 