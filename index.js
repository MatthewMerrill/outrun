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
    let color = location.hash.substring(1);
    let root = document.documentElement;
    if (validTextColor('#' + color)) {
      root.style.setProperty('--accent', '#' + color);
    }
    else if (validTextColor(color)) {
      root.style.setProperty('--accent', color);
    }
  }
}
window.addEventListener('hashchange', updateHash, false);
updateHash();

try {
  document.domain = 'mattmerr.com';
} catch (ignored) {}
