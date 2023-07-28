var mainContent = document.getElementById("main-content");

var childElements = mainContent.children;
console.log(childElements);

var renderElements = document.getElementsByClassName("render");
for (var i = 0; i < renderElements.length; i++) {
  console.log(renderElements[i].innerHTML);
}

var firstNameInput = document.getElementById("first-name");
firstNameInput.value = "samia";

var lastNameInput = document.getElementById("last-name");
lastNameInput.value = "erum";

var emailInput = document.getElementById("email");
emailInput.value = "samiaerum287@gmail.com";
