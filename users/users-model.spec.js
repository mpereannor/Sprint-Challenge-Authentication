const Users = require('./users-model');
const db = require('../database/dbConfig');

// beforeEach( async () => { 
//     await db('users').truncate()
// })

describe('Users database', () => { 
    describe('insert function', () => { 
        let users
        test( 'should insert a user', async () => { 
            await Users.add({
                username: 'timothy',
                password: 'bro'})
                
            await Users.add({
                username:'luke',
                password: 'bruh'})

            users = await db('users')
            expect(users).toHaveLength(2)
        })
    })
})