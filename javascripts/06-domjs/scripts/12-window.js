const content = document.getElementById("content");
const locationParagraph = document.getElementById("location");

const height = window.screen.height;
const width = window.screen.width;
const url = window.location;

content.textContent = `Window width (${width}) x height (${height})`;
locationParagraph.textContent = url;