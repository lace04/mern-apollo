import { Schema, model } from 'mongoose';

const TaskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    projectId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Project',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model('Task', TaskSchema);
