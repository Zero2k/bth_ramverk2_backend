import axios from 'axios';
import faker from 'faker';
import constants from '../src/config/constants';

const title = faker.lorem.paragraph();
const text = faker.lorem.sentence();

describe('Test todo resolvers in GraphQL', () => {
  test('It should return a todo', async () => {
    const createTodo = await axios.post(`http://localhost:${constants.PORT}/graphql`, {
      query: `
      mutation {
        createTodo(title: "${title}", text: "${text}")
      }
      `,
    });

    const { data } = createTodo;

    expect(data).toMatchObject({
      data: {
        createTodo: true,
      },
    });
  });
});
