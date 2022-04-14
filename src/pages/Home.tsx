import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { Header } from "../components/Header";
import { ItemWrapper } from "../components/ItemWrapper";
import { Task, TasksList } from "../components/TasksList";
import { TodoInput } from "../components/TodoInput";

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task
    const task = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    };

    // const teste = setTasks(tasks => [...tasks, task])
    // console.log(teste);
    setTasks(Object.assign([...tasks, task]));
  }

  function handleToggleTaskDone(id: number) {
    //TODO - toggle task done if exists
    // const find = tasks.find((item) => item.done !== true);
    const updatedTasks = tasks.map((task) => ({ ...task }));

    const findItem = updatedTasks.find((item) => item.id === id);

    if (!findItem) {
      return;
    }

    findItem.done = !findItem.done;
    setTasks(updatedTasks)
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    const newTask = [...tasks];

    const removeTask = newTask.filter((item) => item.id !== id);

    // setTasks(newTask.splice(task, 1));
    setTasks(removeTask);
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList
        tasks={tasks}
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
  },
});
