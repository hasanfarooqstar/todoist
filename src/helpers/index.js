import { collatedTasks } from "../constants";

export const getCollatedTasksExsit = (selectedProject) => {
  getCollatedTasksExsit.find((task) => task.key === selectedProject);
};
