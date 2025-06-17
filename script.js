let users = [];
let user = {};

const validateUser = () => {
  let email = document.getElementById("txtEmail1").value;
  let pass = document.getElementById("txtPass1").value;
  const found = users.find(
    (value) => value.email === email && value.pass === pass
  );
  if (found) {
    showHome();
  } else {
    document.getElementById("errorTxt").innerHTML = "Access Denied";
  }
};

const loginForm = () => {
  const str = `<div>
    <h3>Login Form</h3>
    <p id='errorTxt'></p>
    <label for="email">Email</label>
    <p><input type='text' id='txtEmail1'></p>
     <label for="password">Password</label>
    <p><input type='password' id='txtPass1'></p>
    <p><button onclick='validateUser()'>Submit</button></p>
    <p><button onclick='registerForm()'>Create Account</button></p>
    <p><button onclick='showUsers()'>Show Registered Users</button></p>`;
  root.innerHTML = str + "</div>";
};

const saveUser = () => {
  let name = document.getElementById("txtName").value;
  let email = document.getElementById("txtEmail").value;
  let pass = document.getElementById("txtPass").value;
  users.push({
    name,
    email,
    pass,
  });
  loginForm();
};

const registerForm = () => {
  const str = `<div>
    <h3>Registration Form</h3>
     <label for="name">Name</label>
    <p><input type='text' id='txtName'></p>
     <label for="email">Email</label>
    <p><input type='text' id='txtEmail'></p>
     <label for="password">Password</label>
    <p><input type='password' id='txtPass'></p>
    <p><button onclick='saveUser()'>Submit</button></p>
    <p><button onclick='loginForm()'>Already a member? Login here...</button></p>
    `;
  root.innerHTML = str + "</div>";
};

const showHome = () => {
  const str = `<div>
    <h3>Welcome</h3>
    <p><button onclick='loginForm()'>Logout</button></p>
    `;
  root.innerHTML = str + "</div>";
};

const showUsers = () => {
 if (users.length === 0) {
    root.innerHTML = "<p>No registered users found.</p><p><button onclick='loginForm()'>Back</button></p>";
 return;
 }

let str = `<div>
<h3>Registered Users</h3>
<ul>`;
users.forEach((user, index) => {
str += `<li>${index + 1}. Name: ${user.name}, Email: ${user.email}</li>`;
 });
str += `</ul>
<p><button onclick='loginForm()'>Back to Login</button></p>
</div>`;

 root.innerHTML = str;
};


