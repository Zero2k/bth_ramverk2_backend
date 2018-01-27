import Todo from '../../models/Todo';

export default {
  Query: {
    allTodos: (parent, args, context) => {
      return Todo.find({}).sort({ createdAt: -1 });
    },
    singleTodo: (parent, { _id }, context) => {
      return Todo.findById(_id);
    },
  },

  Mutation: {
    createTodo: async (parent, args, context) => {
      try {
        // const todoData = { title, text };
        const todo = Todo.create(args);
	if (!todo) {
	  return false;
	}
	return true;
      } catch (err) {
        throw err;
      }
    },
    updateTodo: async (parent, { _id, ...rest }, context) => {
      try {
        const todo = await Todo.findOne({ _id });

        if (!todo) {
          throw new Error('Todo not found!');
        }

        Object.entries(rest).forEach(([key, value]) => {
          todo[key] = value;
        });

        return todo.save();
      } catch (err) {
        throw err;
      }
    },
    deleteTodo: async (parent, { _id }, context) => {
      try {
        const todo = await Todo.findOne({ _id });

        if (!todo) {
          return {
            message: 'Todo do not exist',
          };
        }
        await todo.remove();
        return {
          message: 'The todo was removed!',
        };
      } catch (err) {
        throw err;
      }
    },
  },
};
