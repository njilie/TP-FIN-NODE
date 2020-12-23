const request = require('supertest');
const app = require('../app');

describe('SaleStatus EndPoints', () => {
  describe('GET /statusventes', () => {
    it('should fetch salestatuses list', async() =>{
      const res = await request(app)
      .get('/statusventes')
      expect(res.statusCode).toEqual(200)
      expect(res.body.length).toBeGreaterThanOrEqual(0)
    })
  })
})