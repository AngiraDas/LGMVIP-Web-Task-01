

 document.addEventListener("DOMContentLoaded", function () {
   const taskInput = document.getElementById("taskInput");
   const addbtn= document.getElementById("addbtn");
   const tasklist = document.getElementById("tasklist");
  

   
   function savedata() {
     const tasks = Array.from(tasklist.getElementsByTagName("li")).map((task) => task.innerHTML
     );

     localStorage.setItem("tasks", JSON.stringify(tasks));
   }

   function review() {
     const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];



     tasklist.innerHTML = savedTasks.map((task) => `<li>${task}</li>`).join("");
   }

   addbtn.addEventListener("click", function (e) {
     e.preventDefault(); 
     const taskText = taskInput.value.trim();
     if (taskText !== "") {
       const listItem = document.createElement("li");

       const ts = document.createElement("span");
       ts.innerHTML = taskText;
       listItem.appendChild(ts);
       const deleteButton = document.createElement("button");
       deleteButton.innerHTML = "\u00d7";
       deleteButton.classList.add("deleteButton");
       listItem.appendChild(deleteButton);

     tasklist.appendChild(listItem);
       taskInput.value = "";

       savedata();
     }
   });

   
   tasklist.addEventListener("click", function (e) {
     if (e.target.classList.contains("deleteButton")) {
       const listItem = e.target.parentElement;
       listItem.remove();
       savedata();
     }
   });

   review();
 });