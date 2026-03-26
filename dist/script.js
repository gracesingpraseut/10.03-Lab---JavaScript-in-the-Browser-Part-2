window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   document.getElementById("addButton").addEventListener("click", addBtnClick);

   document.getElementById("newTask").addEventListener("keyup", function(event) {
      if (event.key === "Enter") {
         addBtnClick();
      }
   });

   const doneButtons = document.querySelectorAll(".done-btn");
   for (let i = 0; i < doneButtons.length; i++) {
      doneButtons[i].addEventListener("click", removeTask);
   }
}

function addBtnClick() {
   const textBox = document.getElementById("newTask");
   const newTask = textBox.value.trim();

   if (newTask !== "") {
      addTask(newTask);
      textBox.value = "";
      textBox.focus();
   }
}

function addTask(taskText) {
   const li = document.createElement("li");
   li.innerHTML = `<span class="task-text">${taskText}</span><button class="done-btn">&#10006;</button>`;

   const ol = document.querySelector("ol");
   ol.appendChild(li);

   const doneButtons = document.querySelectorAll(".done-btn");
   doneButtons[doneButtons.length - 1].addEventListener("click", removeTask);
}

function removeTask(event) {
   const li = event.target.parentNode;
   li.parentNode.removeChild(li);
}