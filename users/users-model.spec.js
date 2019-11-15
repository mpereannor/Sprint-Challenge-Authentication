const Users = require('./users-model');
const db = require('../database/dbConfig');

beforeEach( async () => { 
    await db('users').truncate()
})

describe('Users database', () => { 
    describe('add function', () => { 
        let user
        test( 'should add a user', async () => { 
            await Users.add({
                username: 'timothy',
                password: 'broo'
            })

            await Users.add({
                username:'luke',
                password: 'bruh'
            })

            user = await db('users')
            expect(user).toHaveLength(2)

            await Users.add({ 
                username:'matt',
                password: 'bruv'
            })

            user = await db('users')
            expect(user).toHaveLength(3)
        })

        test('should add specific user', async () => { 
            let user = await Users.add({ 
                username: 'john',
                password: 'fam'
            })
            expect(user.username).toBe('john')
        })
    })
})