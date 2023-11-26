const myImage = document.querySelector("img")

myImage.onclick = () => {
    const image_src = myImage.getAttribute("src")
    if (image_src === "images/mozilla-logo.jpg") {
        myImage.setAttribute("src", "images/garfield.jpg")
    }
    else {
        myImage.setAttribute("src", "images/mozilla-logo.jpg")
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const userName = prompt("Enter your name here");
    localStorage.setItem("name", userName);
    myHeading.textContent = `Hello friend ${userName}`;
};

if (!localStorage.getItem("name")) {
    alert('Name is not set');
    setUserName();
}
else {
    alert('Name is already set');
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Hello friend ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
  };
