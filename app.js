// // import { createClient } from '@supabase/supabase-js'
// var supabase = window.supabase.createClient('https://cckwjoqxsvbnbsuwdfin.supabase.co', 'sb_publishable_qBdenN7vBt07CqeIUsxUdg_HIsf4PTE')
// window.onload = async function () {
//   try {
//     const { data, error } = await supabase
//       .from('post app table')
//       .select("*")
//     console.log(data);
//     if (error) console.log(error)
//     data.forEach(post => {

//       var posts = document.getElementById("posts");
//       posts.innerHTML += `
//       <div class="card mb-2">
//         <div class="card-header">~Post</div>
//         <div style="background-image: url('${post.bg_img}'); background-size: cover; background-position: center; min-height: 150px;" class="card-body">
//           <figure>
//             <blockquote class="blockquote">
//               <p>${post.title}</p>
//             </blockquote>
//             <figcaption class="blockquote-footer text-dark">${post.description}</figcaption>
//           </figure>
//         </div>
//         <div class="ms-auto m-2">
//           <button onclick="editPost(event)" class="btn btn-success btn-sm">Edit</button>
//           <button onclick="deletePost(event)" class="btn btn-danger btn-sm">Delete</button>
//         </div>
//       </div>`;
//     });
//   } catch (error) {
//     console.log(error)
//   }

//   // var backgroundimage;
//   // function addPost() {
//   //   var title = document.getElementById("title")
//   //   var description = document.getElementById("description")
//   //   console.log(title.value, description.value)
//   //   if (title.value.trim() && description.value.trim()) {
//   //     var posts = document.getElementById("posts")
//   //     posts.innerHTML += ` <div class="card mb-2 "> <div class="card-header">
//   //    @post
//   //   </div>
//   //   <div style="background-image: url(${backgroundimage});" class="card-body">
//   //     <figure>
//   //       <blockquote class="blockquote">
//   //         <p>${title.value}</p>
//   //       </blockquote>
//   //       <figcaption class="blockquote-footer">${description.value}
//   //       </figcaption>
//   //     </figure>
//   //   </div></div>`

//   //     title.value = ""
//   //     description.value = ""
//   //   } else {
//   //     Swal.fire({
//   //       icon: "error",
//   //       title: "Oops...",
//   //       text: "please enter title and description!",

//   //     });
//   //   }
//   // }

//   // function selectImage(event,src) {
//   //   backgroundimage = src;
//   //   var bg_Image = document.getElementsByClassName("bg-image")
//   //   for (var i = 0; i < bg_Image.lenght; i++) {
//   //     bg_Image[i].className = "bg-image"

//   //   }

//   //  event.target.className += "selectImage"
//   // }
//   // console.log(selectImage())
//   // var databaseEmail = "";
//   // var databasePassword = "";

//   // // Function to save user information
//   // function registerUser() {
//   //   var emailInput = document.getElementById("regEmail").value;
//   //   var passInput = document.getElementById("regPass").value;

//   //   if (emailInput === "" || passInput === "") {
//   //     Swal.fire({
//   //       icon: "error",
//   //       title: "Oops...",
//   //       text: "Please fill in all fields.",

//   //     });
//   //   } else {
//   //     databaseEmail = emailInput;
//   //     databasePassword = passInput;
//   //     Swal.fire({
//   //       title: "Good job!",
//   //       text: "Success: Account created successfully!",
//   //       icon: "success"
//   //     });
//   //   }
//   // }
//   // // Function to check user information
//   // function loginUser() {
//   //   var currentEmail = document.getElementById("loginEmail").value;
//   //   var currentPass = document.getElementById("loginPass").value;

//   //   // Simple validation check
//   //   if (currentEmail === databaseEmail && currentPass === databasePassword && databaseEmail !== "") {
//   //     Swal.fire({
//   //       title: "Good job!",
//   //       text: "Welcome: Login successful!",
//   //       icon: "success"
//   //     }).then((result) => {
//   //       // This part runs ONLY when the user clicks the "OK" button
//   //       if (result.isConfirmed) {
//   //         window.location.href = "dashboard.html";
//   //       }
//   //     });

//   //   }

//   // else {
//   //   Swal.fire({
//   //     title: "Oops...",
//   //     icon: "error",

//   //     text: "Invalid email or password.",

//   //   })
//   // }
//   // }
//   // // var cardBg 
//   // // function deletePost(){
//   // //   var card = event.target.parentNode.parentNode
//   // //   card.remove()
//   // // }
//   // // function editPost(){
//   // //     var card = event.target.parentNode.parentNode
//   // //     var title =card.children[1].children[0].children[0].children[0].innerText
//   // //     var description =card.children[1].children[0].children[1].innerText
//   // //     document.getElementById("title").value = title
//   // //     document.getElementById("description").value = description
//   // //     card.remove()
//   // //   console.log(title, description);
//   // // }
//   // // function post(){
//   // //     var title = document.getElementById("title")
//   // //     var description = document.getElementById("description")
//   // //     console.log(title.value , description.value);
//   // //     var posts = document.getElementById("posts")
//   // //    if(title.value.trim() && description.value.trim()){
//   // //      posts.innerHTML += `
//   // //      <div class="card mb-2">
//   // //               <div class="card-header">~Post</div>
//   // //               <div style="background-image:url(${cardBg})" class="card-body">
//   // //                 <figure>
//   // //                   <blockquote class="blockquote">
//   // //                     <p>
//   // //                       ${title.value}
//   // //                     </p>
//   // //                   </blockquote>
//   // //                   <figcaption class="blockquote-footer">
//   // //                     ${description.value}
//   // //                   </figcaption>
//   // //                 </figure>
//   // //               </div>
//   // //               <div class="ms-auto m-2">
//   // //               <button onclick="editPost()" class="btn btn-success">Edit</button>
//   // //               <button onclick="deletePost()" class="btn btn-danger">Delete</button>
//   // //               </div>
//   // //             </div>
//   // //     `
//   // //    }else{
//   // //     Swal.fire({
//   // //   icon: "error",
//   // //   title: "Oops...",
//   // //   text: "Title & description can't be empty!",
//   // // });
//   // //    }
//   // //     title.value = ""
//   // //     description.value = ""
//   // // }  


//   var backgroundimage = ""; // Renamed from cardBg to align with your setup

//   function addPost() {
//     var title = document.getElementById("title");
//     var description = document.getElementById("description");
//     var posts = document.getElementById("posts");



//     // const { data, error } = await supabase
//     //   .from('post app table')
//     //   .insert({ id: id, title : title, description : description, bg_Images:bg_img})
//     //   .select("*")
//     //   console.log(data)
//     // }


//     if (title.value.trim() && description.value.trim()) {
//       // Generated post template with Edit and Delete capabilities included
//       posts.innerHTML += `
//       <div class="card mb-2">
//         <div class="card-header">~Post</div>
//         <div style="background-image: url('${backgroundimage}'); background-size: cover; background-position: center; min-height: 150px;" class="card-body">
//           <figure>
//             <blockquote class="blockquote">
//               <p>${title.value}</p>
//             </blockquote>
//             <figcaption class="blockquote-footer text-dark">${description.value}</figcaption>
//           </figure>
//         </div>
//         <div class="ms-auto m-2">
//           <button onclick="editPost(event)" class="btn btn-success btn-sm">Edit</button>
//           <button onclick="deletePost(event)" class="btn btn-danger btn-sm">Delete</button>
//         </div>
//       </div>`;

//       // Reset inputs and background
//       title.value = "";
//       description.value = "";
//       backgroundimage = "";

//       // Clear selection styles from images
//       var bg_Images = document.getElementsByClassName("bg-image");
//       for (var i = 0; i < bg_Images.length; i++) {
//         bg_Images[i].classList.remove("selectImage");
//       }
//     } else {
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Please enter title and description!",
//       });
//     }
//   }

//   // Fixed parameters: event is passed implicitly or explicitly
//   function selectImage(event, src) {
//     backgroundimage = src;
//     var bg_Images = document.getElementsByClassName("bg-image");

//     // Fixed typo: .length instead of .lenght
//     for (var i = 0; i < bg_Images.length; i++) {
//       bg_Images[i].classList.remove("selectImage");
//     }

//     // Add active selection class to the clicked element
//     event.currentTarget.classList.add("selectImage");
//   }

//   function deletePost(event) {
//     var card = event.target.closest('.card');
//     card.remove();
//   }

//   function editPost(event) {
//     var card = event.target.closest('.card');

//     // Scrape text out safely using selectors
//     var titleText = card.querySelector('.blockquote p').innerText;
//     var descriptionText = card.querySelector('.blockquote-footer').innerText;

//     document.getElementById("title").value = titleText;
//     document.getElementById("description").value = descriptionText;

//     card.remove();
//   }

//   // --- Registration & Login Logic ---
//   var databaseEmail = "";
//   var databasePassword = "";

//   function registerUser() {
//     var emailInput = document.getElementById("regEmail").value;
//     var passInput = document.getElementById("regPass").value;

//     if (emailInput === "" || passInput === "") {
//       Swal.fire({ icon: "error", title: "Oops...", text: "Please fill in all fields." });
//     } else {
//       databaseEmail = emailInput;
//       databasePassword = passInput;
//       Swal.fire({ title: "Good job!", text: "Account created successfully!", icon: "success" });
//     }
//   }

//   function loginUser() {
//     var currentEmail = document.getElementById("loginEmail").value;
//     var currentPass = document.getElementById("loginPass").value;

//     if (currentEmail === databaseEmail && currentPass === databasePassword && databaseEmail !== "") {
//       Swal.fire({
//         title: "Good job!",
//         text: "Welcome: Login successful!",
//         icon: "success"
//       }).then((result) => {
//         if (result.isConfirmed) {
//           window.location.href = "dashboard.html";
//         }
//       });
//     } else {
//       Swal.fire({ title: "Oops...", icon: "error", text: "Invalid email or password." });
//     }
//   }
// }
// Initialize Supabase Client globally
var supabase = window.supabase.createClient(
  'https://cckwjoqxsvbnbsuwdfin.supabase.co', 
  'sb_publishable_qBdenN7vBt07CqeIUsxUdg_HIsf4PTE'
);

var backgroundimage = ""; 

// 1. Fetch posts on Page Load
window.onload = async function () {
  try {
    const { data, error } = await supabase
      .from('post app table')
      .select("*") .order('id', { ascending: false });
    
    if (error) throw error;

    console.log("Fetched Data: ", data);
    
    const postsContainer = document.getElementById("posts");
    if (postsContainer && data) {
      data.forEach(post => {
        postsContainer.innerHTML += createPostHTML(post.title, post.description, post.bg_img ,post.id);
      });
    }
  } catch (error) {
    console.error("Error loading posts:", error.message || error);
  }
};

// Helper function to return the Post HTML template cleanly
function createPostHTML( title, description, bg_Img,id) {
  return `
    <div class="card mb-2" data-id="${id}" >
      <div class="card-header">${id}~Post</div>
      <div style="background-image: url('${bg_Img || ''}'); background-size: cover; background-position: center; min-height: 150px;" class="card-body">
        <figure>
          <blockquote class="blockquote">
            <p>${title}</p>
          </blockquote>
          <figcaption class="blockquote-footer text-dark">${description}</figcaption>
        </figure>
      </div>
      <div class="ms-auto m-2">
        <button onclick="editPost(event)"  class="btn btn-success btn-sm">Edit</button>
        <button onclick="deletePost(event)" data-id="${id}" class="btn btn-danger btn-sm">Delete</button>
      </div>
    </div>`;
}

// 2. Add New Post with Async Supabase Integration
async function addPost() {
  var titleElement = document.getElementById("title");
  var descriptionElement = document.getElementById("description");
  var postsContainer = document.getElementById("posts");

  var titleVal = titleElement.value.trim();
  var descriptionVal = descriptionElement.value.trim();

  if (titleVal && descriptionVal) {
    try {
      // Send data to Supabase (Matches column names: title, description, bg_img)
      const { data, error } = await supabase
        .from('post app table')
        .insert([{ 
          title: titleVal, 
          description: descriptionVal, 
          bg_img: backgroundimage 
        }])
        .select("*") 
        ;

      if (error) throw error;

      // Render the newly created post onto the DOM dynamically
      postsContainer.innerHTML += createPostHTML(titleVal, descriptionVal, backgroundimage);

      // Reset UI Input elements
      titleElement.value = "";
      descriptionElement.value = "";
      backgroundimage = "";

      // Clear selection border treatments from image picker list
      var bg_Images = document.getElementsByClassName("bg-image");
      for (var i = 0; i < bg_Images.length; i++) {
        bg_Images[i].classList.remove("selectImage");
      }

    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Database Error",
        text: err.message || "Failed to save post to Supabase."
      });
    }
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please enter title and description!",
    });
  }
}

// 3. Selection, Deletion & UI Modifiers
function selectImage(event, src) {
  backgroundimage = src;
  var bg_Images = document.getElementsByClassName("bg-image");

  for (var i = 0; i < bg_Images.length; i++) {
    bg_Images[i].classList.remove("selectImage");
  }

  event.currentTarget.classList.add("selectImage");
}
async function deletePost(event) {
  var button = event.target.closest('button');
  
  // 2. Phir us button ke zariye parent card ko dhoondein
  var carddelete = event.target.closest('.card');
try{
  const id = event.target.getAttribute('data-id');
   const { data, error } = await supabase
  .from('post app table')
  .delete()
  .eq('id', id)
  .select()

  if(error)console.log(error);
  carddelete.remove();
}catch(error){
console.log(error)
}}

async function editPost(event) {
  var card = event.target.closest('.card');
  try{
    const id = event.target.getAttribute('data-id');
    const { data, error } = await supabase
    .from('post app table')
    .update({ name: 'piano' })
    .eq('id', id)
    .select()
    if(error)console.log(error);
   
  }catch(error){
  console.log(error)
  }
  var titleText = card.querySelector('.blockquote p').innerText;
  var descriptionText = card.querySelector('.blockquote-footer').innerText;

  document.getElementById("title").value = titleText;
  document.getElementById("description").value = descriptionText;

  card.remove();
}

// 4. Registration & Login Logic
var databaseEmail = "";
var databasePassword = "";

function registerUser() {
  var emailInput = document.getElementById("regEmail").value;
  var passInput = document.getElementById("regPass").value;

  if (emailInput === "" || passInput === "") {
    Swal.fire({ icon: "error", title: "Oops...", text: "Please fill in all fields." });
  } else {
    databaseEmail = emailInput;
    databasePassword = passInput;
    Swal.fire({ title: "Good job!", text: "Account created successfully!", icon: "success" });
  }
}

function loginUser() {
  var currentEmail = document.getElementById("loginEmail").value;
  var currentPass = document.getElementById("loginPass").value;

  if (currentEmail === databaseEmail && currentPass === databasePassword && databaseEmail !== "") {
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