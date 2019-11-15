const Users = require('./users-model');
const db = require('../database/dbConfig');

beforeEach( async () => { 
    await db('users').truncate()
})

describe('Users database', () => { })