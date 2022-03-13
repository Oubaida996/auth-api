'use strict';

process.env.SECRET = "toes";


const supertest = require('supertest');
const server = require('../src/server.js').app;
const { db } = require('../src/auth/models/database.js');

const mockRequest = supertest(server);

let users = {
  admin: { userName: "admin", pwd: "password",role:"admin" },
  editor: { userName: 'editor', pwd: 'password',role:'editor' },
  user: { userName: 'user', pwd: 'password' },
};

beforeAll(async () => {
  await db.sync();
  
});
afterAll(async () => {
  await db.drop();
  
});

describe('test v2' ,()=>{

    it('testing admin',async ()=>{
        let usersInfo =users['admin'];
        let  res =await mockRequest.post('/signUp').send(usersInfo);
        expect(res.status).toEqual(201);
        
        const response = await mockRequest.post('/signIn')
          .auth(usersInfo.userName, usersInfo.pwd);

        const token = response.body.token;

        // First, use basic to login to get a token
        let bearerResponse = await mockRequest
          .get('/users')    
          .set('Authorization', `Bearer ${token}`)

        // Not checking the value of the response, only that we "got in"
        expect(bearerResponse.status).toBe(200);


        









    });
});