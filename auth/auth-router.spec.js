const server= require('../api/server');
const request = require('supertest');

describe('userRouter.js module', ()=>{
    it('returns a 200 OK response superset', ()=>{
        return request(server).post('/api/auth/register')
        .expect(200)
    })
    it('returns a 200 OK response superset', ()=>{
        return request(server).post('/api/auth/login')
        .expect(200)
    })
})