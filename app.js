// Select the button element with the class 'btn'
const btn = document.querySelector(".btn");

// Add an event listener for the 'mouseover' event
btn.addEventListener("mouseover", (event) => {
  // Calculate the x and y positions relative to the button's position
  const x = event.pageX - btn.offsetLeft;
  const y = event.pageY - btn.offsetTop;

  // Set the CSS custom properties (--xPos and --yPos) with the calculated positions
  btn.style.setProperty("--xPos", `${x}px`);
  btn.style.setProperty("--yPos", `${y}px`);
});
