import axios from 'axios';
import constants from '../src/config/constants';

describe('Test the root path', () => {
  test('It should get a response from the GET method', async () => {
    const response = await axios.get(`http://localhost:${constants.PORT}/`);
    expect(response.status).toBe(200);
  });
});
