// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const errorDiv = document.getElementById('error');
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailRegex.test(email)) {
      errorDiv.textContent = "Please enter a valid email address.";
    } else {
      errorDiv.textContent = "";
      alert("Form submitted successfully!");
      this.reset();
    }
  });
  
  // To-Do List Dynamic Add & Remove
  document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText !== "") {
      const li = document.createElement('li');
      li.textContent = taskText;
  
      const removeBtn = document.createElement('button');
      removeBtn.textContent = "Remove";
      removeBtn.className = "remove-btn";
      removeBtn.onclick = function() {
        this.parentElement.remove();
      };
  
      li.appendChild(removeBtn);
      document.getElementById('taskList').appendChild(li);
  
      taskInput.value = "";
    }
  });
  