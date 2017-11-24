import axios from 'axios';

describe('Test the root path', () => {
  test('It should response to the GET method', async () => {
    const response = await axios.get('http://localhost:8080/');
    expect(response.status).toBe(200);
  });
});
