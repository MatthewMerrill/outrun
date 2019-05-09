// https://stackoverflow.com/a/16994164/3188059
function validTextColor(stringToTest) {
    //Alter the following conditions according to your need.
    if (stringToTest === "") { return false; }
    if (stringToTest === "inherit") { return false; }
    if (stringToTest === "transparent") { return false; }

    var image = document.createElement("img");
    image.style.color = "rgb(0, 0, 0)";
    image.style.color = stringToTest;
    if (image.style.color !== "rgb(0, 0, 0)") { return true; }
    image.style.color = "rgb(255, 255, 255)";
    image.style.color = stringToTest;
    return image.style.color !== "rgb(255, 255, 255)";
}

function updateHash() {
  if (location.hash && location.hash.length > 1) {
    setColor(location.hash.substring(1));
  }
}
function receiveMessage(event) {
  if (event.data && typeof event.data.color === 'string') {
    this.setColor(event.data.color);
  }
}
function setColor(color) {
  let root = document.documentElement;
  if (validTextColor('#' + color)) {
    root.style.setProperty('--accent', '#' + color);
  }
  else if (validTextColor(color)) {
    root.style.setProperty('--accent', color);
  }
}
window.addEventListener('hashchange', updateHash, false);
window.addEventListener('message', receiveMessage, false);
window.setColor = setColor;
updateHash();
