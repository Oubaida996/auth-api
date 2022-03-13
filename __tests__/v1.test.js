
const supertest =require('supertest');
const server =require('../src/server');
const request =supertest(server.app);

const {db} =require('../src/auth/models/database.js');



beforeAll(async ()=>{
    await db.sync();
});

afterAll(async ()=>{
    await db.drop();
});


describe('server test' ,()=>{




it('test 404 on a bad method ',async()=>{

    const response = await request.post('/api/v1/foods');
    expect(response.req.method).toEqual("POST");

});

it('test create a record using POST ',async()=>{

    const response = await request.post('/api/v1/foods').send({
        foodName : "Mansaf",
        categoryName:"rice"
    });
    expect(response.status).toEqual(200);

});


it('test Read a list of records using GET ',async()=>{

    const response = await request.get('/api/v1/foods');
    expect(response.status).toEqual(200);

});

it('test Read a record using GET ',async()=>{

    const response = await request.get('/api/v1/foods/1');
    expect(response.status).toEqual(200);

});

it('testUpdate a record using PUT ',async()=>{

    const response = await request.put('/api/v1/foods/1').send({
        foodName : "Mansaf",
        categoryName:"rice"
    });
    expect(response.status).toEqual(200);

});


it('test Destroy a record using DELETE',async()=>{

    const response = await request.delete('/api/v1/foods/1');
    expect(response.status).toEqual(200);

});



} );



