b; //DELETE ICON LOGIC
const deletePassword = (website) => {
  let data = localStorage.getItem("passwords");
  let arr = JSON.parse(data);
  arrUpdated = arr.filter((e) => {
    return e.website != website;
  });
  localStorage.setItem("passwords", JSON.stringify(arrUpdated));
};

// LOGIC FOR FILLING OF TABLE
const showPasswords = () => {
  let tb = document.querySelector("table");
  let data = localStorage.getItem("passwords");
  if (data == null) {
    tb.innerHTML = "No Data To Show";
  } else {
    tb.innerHTML = `  <th>Website</th>
    <th>Username</th>
    <th>Password</th>
    <th>Delete</th>
  </tr>`;

    let arr = JSON.parse(data);
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      str = `<tr>
<td>${element.website}</td>
<td>${element.username}</td>
<td>${element.password}</td>
<td><button class="btn" id="${element.website}">Delete</button></td>
</tr>`;
    }
    tb.innerHTML = tb.innerHTML + str;
  }
};

console.log("TESTING TESTING TESTIGN...");
showPasswords();

document.querySelector(".btn").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Clicked....");
  console.log(username.value, password.value, website.value);
  let passwords = localStorage.getItem("passwords");
  console.log(passwords);
  if (passwords == null) {
    let json = [];
    json.push({
      username: username.value,
      password: password.value,
      website: website.value,
    });
    alert("Password Saved !");
    localStorage.setItem("passwords", JSON.stringify(json));
  } else {
    let json = JSON.parse(localStorage.getItem("passwords"));
    json.push({
      username: username.value,
      password: password.value,
      website: website.value,
    });
    alert("Password Saved !");
    localStorage.setItem("passwords", JSON.stringify(json));
  }
  showPasswords();
});
