
'use strict';
const supertest = require('supertest');
const {app} = require('../src/server')
const request = supertest(app)


describe('Testing status 500',  () => {
    test('It should check Internal errors :', async () => {
        let response = await request.get('/error')
        expect(response.status).toBe(404);
    });
});
