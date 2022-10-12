import React from "react";
import { useState, useEffect } from "react";
import moment from "moment";
import { firebase } from "../firebase";
import { collatedTasksExist } from "../helpers";

const collatedTasksExist = () => {};

export const useTasks = (selectedProject) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // 44.18
    let unsubscribe = firebase.firestore().collection("tasks").where("userId", "==", "GwEu7nMKPgFtwVpxOE");
    unsubscribe =
      selectedProject && !collatedTasksExist(selectedProject)
        ? (unsubscribe = unsubscribe.where("projectId", "==", selectedProject))
        : selectedProject == "TODAY"
        ? (unsubscribe = unsubscribe.where("date", "==", moment().formate("DD/MM/YYYY")))
        : selectedProject === "INBOX" || selectedProject === 0
        ? (unsubscribe = unsubscribe.where("date", "==", ""))
        : unsubscribe;
  }, []);
};
