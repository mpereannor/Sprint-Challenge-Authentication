const request = require('supertest');
const server = require('./server');

const bcrypt = require('bcryptjs');
const db = require('../database/dbConfig');


beforeEach(async () => {
    await db('users').truncate()
  })

describe('server', () => { 

    describe('[POST] /register endpoint', () => { 
        test('the db env is testing', () => { 
            expect(process.env.DB_ENV).toBe('testing')
        })

        test('should register a new user', async () => { 
            const res = await request(server)
            .post('/api/auth/register')
            .send({
                username: 'king',
                password: 'power'
            })
            expect(res.body.username).toMatch(/king/)
        })      
        test('should return 201 OK status', async () => {
            
            response = await request(server).post('/api/auth/register')
            .send({ username: 'king', password: 'power'})
            expect(response.status).toBe(201)
        })
    })

    describe('[POST] /login endpoint', () => { 
        test( 'should return 200 status', async () => { 
            await db('users').insert ({ 
                username: 'king', password: bcrypt.hashSync('power', 10)
            })
            const res = await request(server).post('/api/auth/login')
            .send({ 
                username: 'king',
                password: 'power'
            })
            .set('Content-Type', 'application/json')
            expect(res.status).toBe(200)
        })

}) 

    describe('[GET] / endpoint', () => {
    
        test('shoud return 200 OK', async () => { 
            const response = await 
            request(server).get('/')
            expect(response.status).toBe(200)
        })
        test('with superest syntax', () => {
            return request(server).get('/')
            .expect(200)
            .expect({ api: 'up'})
            .expect('content-Length', "12")
            .expect('content-Type', /json/)
          })
        
        test('returns the right response body', async () => {
        const response = await request(server).get('/')
        expect(response.body).toEqual({ api: 'up' });
        })
    })
})
