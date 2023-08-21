import Project from '../models/Project.js';
import Task from '../models/Task.js';

export const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    getAllProjects: async () => await Project.find(),
    getAllTasks: async () => await Task.find(),
    getProject: async (_, { _id }) => await Project.findById(_id),
    getTask: async (_, { _id }) => await Task.findById(_id),
  },

  Mutation: {
    createProject: async (_, { name, description }) => {
      const project = new Project({ name, description });
      const savedProject = await project.save();
      return savedProject;
    },

    createTask: async (_, { title, projectId }) => {
      const projectFound = await Project.findById(projectId);
      if (!projectFound) throw new Error('Project not found.');
      const task = new Task({ title, projectId });
      const savedTask = await task.save();
      return savedTask;
    },

    deleteProject: async (_, { _id }) => {
      const deletedProject = await Project.findByIdAndDelete(_id);
      if (!deletedProject) throw new Error('Project not found.');
      await Task.deleteMany({ projectId: _id });
      return deletedProject;
    },
    deleteTask: async (_, { _id }) => {
      const deletedTask = Task.findByIdAndDelete(_id);
      if (!deletedTask) throw new Error('Task not found.');
      return deletedTask;
    },

    updateProject: async (_, args) => {
      const updatedProject = await Project.findByIdAndUpdate(args._id, args, {
        new: true,
      });
      if (!updatedProject) throw new Error('Project not found.');
      return updatedProject;
    },

    updateTask: async (_, args) => {
      const updatedTask = await Task.findByIdAndUpdate(args._id, args, {
        new: true,
      });
      if (!updatedTask) throw new Error('Task not found.');
      return updatedTask;
    },
  },

  //Este es un resolver para el tipo Project para poder mostrar las tareas de un proyecto
  Project: {
    tasks: async (parent) => await Task.find({ projectId: parent._id }),
  },

  //Este es un resolver para el tipo Task para poder mostrar el proyecto al que pertenece
  Task: {
    project: async (parent) => await Project.findById(parent.projectId),
  },
};
