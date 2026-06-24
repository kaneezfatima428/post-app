// Function to toggle between Login and Sign Up forms
function toggleForms(event) {
    event.preventDefault(); // Page ko refresh hone se rokne ke liye
    
    var loginSection = document.getElementById("loginSection");
    var registerSection = document.getElementById("registerSection");
  
    // Agar login dikh raha hai to use chupao aur register dikhao, and vice versa
    loginSection.classList.toggle("hidden");
    registerSection.classList.toggle("hidden");
  }
  
  // --- Aap ka baqi ka LocalStorage wala logic ---
  
  function registerUser() {
    var emailInput = document.getElementById("regEmail").value;
    var passInput = document.getElementById("regPass").value;
  
    if (emailInput === "" || passInput === "") {
      Swal.fire({ icon: "error", title: "Oops...", text: "Please fill in all fields." });
    } else {
      localStorage.setItem("storedEmail", emailInput);
      localStorage.setItem("storedPass", passInput);
      
      Swal.fire({ title: "Good job!", text: "Account created successfully!", icon: "success" })
      .then(() => {
          // Account banne ke baad automatic wapas login form par le jaye
          toggleForms(new Event('click'));
      });
    }
  }
  
  function loginUser() {
    var currentEmail = document.getElementById("loginEmail").value;
    var currentPass = document.getElementById("loginPass").value;
  
    var databaseEmail = localStorage.getItem("storedEmail");
    var databasePassword = localStorage.getItem("storedPass");
  
    if (currentEmail === databaseEmail && currentPass === databasePassword && databaseEmail !== null) {
      Swal.fire({
        title: "Good job!",
        text: "Welcome: Login successful!",
        icon: "success"
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "dashboard.html";
        }
      });
    } else {
      Swal.fire({ title: "Oops...", icon: "error", text: "Invalid email or password." });
    }
  }