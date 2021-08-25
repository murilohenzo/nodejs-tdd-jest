import { Schema, model } from 'mongoose';
import ITodo from './ITodo';

const TodoSchema = new Schema({
  title: {
    type: 'string',
    required: true,
  },
  done: {
    type: 'boolean',
    required: true,
  }
});

export default model<ITodo>('Todo', TodoSchema);