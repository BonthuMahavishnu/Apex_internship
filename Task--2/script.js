// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMsg = document.getElementById("formMsg");
  
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  
    if (name === "" || email === "" || message === "") {
      formMsg.style.color = "red";
      formMsg.textContent = "All fields are required!";
    } else if (!emailPattern.test(email)) {
      formMsg.style.color = "red";
      formMsg.textContent = "Enter a valid email!";
    } else {
      formMsg.style.color = "green";
      formMsg.textContent = "Form submitted successfully!";
      this.reset();
    }
  });
  
  // To-Do List Functionality
  function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
  
    if (taskInput.value.trim() === "") return;
  
    const li = document.createElement("li");
    li.textContent = taskInput.value;
  
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.onclick = () => li.remove();
  
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  
    taskInput.value = "";
  }
  