import mongoose, { Schema } from 'mongoose';

const TodoSchema = new Schema(
  {
    title: {
      type: String,
      unique: true,
    },
    text: String,
    active: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

export default mongoose.model('Todo', TodoSchema);
