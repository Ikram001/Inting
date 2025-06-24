const taskInput = document.querySelector("#taskInput");
const addTask = document.querySelector("#addTask");
const unorderedList = document.querySelector("#ul");

window.onload = () => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach((task) => {
    createTask(task.text, task.completed);
  });
};

const saveTasks = () => {
  const tasks = [];
  document.querySelectorAll("#ul li").forEach((li) => {
    const text = li.querySelector("p").innerText;
    const completed = li.querySelector("p").classList.contains("completed");
    tasks.push({ text, completed });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

let createTask = (textFromStorage = "", completedFromStorage = false) => {
  let newList = document.createElement("li");

  let taskCompleted = document.createElement("button");
  taskCompleted.innerText = "✅";
  newList.appendChild(taskCompleted);

  let taskText = document.createElement("p");
  const text = textFromStorage || taskInput.value.trim();
  if (text === "") return;

  taskText.innerText = text;
  if (completedFromStorage) {
    taskText.classList.add("completed");
  }
  newList.appendChild(taskText);

  taskCompleted.addEventListener("click", () => {
    taskText.classList.toggle("completed");
    saveTasks();
  });

  let removeTask = document.createElement("button");
  removeTask.innerText = "❌";
  newList.appendChild(removeTask);

  removeTask.addEventListener("click", () => {
    unorderedList.removeChild(newList);
    saveTasks();
  });

  unorderedList.appendChild(newList);
  if (!textFromStorage) {
    taskInput.value = "";
  }
  saveTasks();
};

addTask.addEventListener("click", createTask);

taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    createTask();
  }
});
