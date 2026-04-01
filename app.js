var backgroundimage;
function addPost() {
  var title = document.getElementById("title")
  var description = document.getElementById("description")
  console.log(title.value, description.value)
  if (title.value.trim() && description.value.trim()) {
    var posts = document.getElementById("posts")
    posts.innerHTML += ` <div class="card mb-2 "> <div class="card-header">
   @post
  </div>
  <div style="background-image: url(${backgroundimage});" class="card-body">
    <figure>
      <blockquote class="blockquote">
        <p>${title.value}</p>
      </blockquote>
      <figcaption class="blockquote-footer">${description.value}
      </figcaption>
    </figure>
  </div></div>`

    title.value = ""
    description.value = ""
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "please enter title and description!",

    });
  }
}

function selectImage(src) {
  backgroundimage = src;
  var bg_Image = document.getElementsByClassName("bg-image")
  for (var i = 0; i < bg_Image.lenght; i++) {
    bg_Image[i].className = "bg-image"

  }
  event.target.className += "image-list-selected"

}
console.log(selectImage())
var databaseEmail = "";
var databasePassword = "";

// Function to save user information
function registerUser() {
  var emailInput = document.getElementById("regEmail").value;
  var passInput = document.getElementById("regPass").value;

  if (emailInput === "" || passInput === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill in all fields.",

    });
  } else {
    databaseEmail = emailInput;
    databasePassword = passInput;
    Swal.fire({
      title: "Good job!",
      text: "Success: Account created successfully!",
      icon: "success"
    });
  }
}
// Function to check user information
function loginUser() {
  var currentEmail = document.getElementById("loginEmail").value;
  var currentPass = document.getElementById("loginPass").value;

  // Simple validation check
  if (currentEmail === databaseEmail && currentPass === databasePassword && databaseEmail !== "") {
    Swal.fire({
      title: "Good job!",
      text: "Welcome: Login successful!",
      icon: "success"
    }).then((result) => {
      // This part runs ONLY when the user clicks the "OK" button
      if (result.isConfirmed) {
        window.location.href = "dashboard.html";
      }
    });

  }

else {
  Swal.fire({
    title: "Oops...",
    icon: "error",

    text: "Invalid email or password.",

  })
}
}
