import axios from 'axios';
const { expect } = require('chai');
const describe = require('mocha').describe;
const it = require('mocha').it;
import Ajv from 'ajv';

const userSchema = {
  type: 'object',
  properties: {
    data: {
      type: 'object',
      properties: {
        id: { type: 'number' },
        email: { type: 'string' },
        first_name: { type: 'string' },
        last_name: { type: 'string' },
        avatar: { type: 'string' }
      },
      required: ['id', 'email', 'first_name', 'last_name', 'avatar']
    },
    support: {
      type: 'object',
      properties: {
        url: { type: 'string' },
        text: { type: 'string' }
      },
      required: ['url', 'text']
    }
  },
  required: ['data', 'support']
};

describe('API Tests', () => {
  it('should create a user', async () => {
    const requestBody = {
      name: 'morpheus',
      job: 'leader'
    };
    const response = await axios.post('https://reqres.in/api/users', requestBody);

    expect(response.status).to.equal(201);
    expect(response.data).to.have.property('name', requestBody.name);
    expect(response.data).to.have.property('job', requestBody.job);
    expect(response.data).to.have.property('id');
    expect(response.data).to.have.property('createdAt');
  });

  it('should get an user', async () => {
    const response = await axios.get('https://reqres.in/api/users/2');
    const ajv = new Ajv();
    const validate = ajv.compile(userSchema);
    const valid = validate(response.data);

    expect(valid).to.be.true;
    expect(response.status).to.equal(200);
  });

  it('should get 404', async () => {
    try {
      const response = await axios.get('https://reqres.in/api/users/23');
    } catch (error) {
      //console.log(error.response);
      throw error;
    }
  });
  
});