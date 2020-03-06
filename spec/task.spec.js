const request = require('supertest');
const chai = require('chai');
const application = require('../src/index')

const app = application.app;
const mongoose = application.db;
const expect = chai.expect;

describe('Tasks integrations tests', () => {
    mongoose.collection.collections.tasks.drop(()=> {

   })

    describe('#GET /api/tasks', ()=>
    {
        it('should get empty tasks list', (done)=>{
            request(app).get('./api/tasks').end((err, res) => {
            expect(res.statusCode).to.equal(200);
            expect(res.body).to.be.an('array');
            expect(res.body).to.be.empty;

            })
        })
    })

    describe('#POST /api/tasks', () =>
    {
        it('should add new task and return json', (done)=>
        {
            request(app).post('/tasks')
                .send({title: 'new task', description: 'jakis desc'})
                .end((err, res) =>
                {
                    expect(res.statusCode).to.equal(201);
                    expect(res.body).to.be.an('object');
                    expect(res.body).to.have.all.keys(['_id', 'title', '__v', 'createdAt', 'description', 'status', 'updatedAt']);
                    done();
                })
        })
    })

});