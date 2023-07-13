document.getElementById("next").onclick = function () {
  let lists = document.querySelectorAll(".item");
  document.getElementById("slide").appendChild(lists[0]);
};
document.getElementById("prev").onclick = function () {
  let lists = document.querySelectorAll(".item");
  document.getElementById("slide").prepend(lists[lists.length - 1]);
};

// Function to click the next button
function clickNextButton() {
  const nextButton = document.getElementById("next");
  nextButton.click();
}

// Function to automate the gallery slideshow
function automateGallerySlideshow() {
  // Initial delay before starting the slideshow
  const initialDelay = 5000; // 5 seconds
  setTimeout(() => {
    // Click the next button
    clickNextButton();

    // Set interval to click the next button every 5 seconds
    setInterval(clickNextButton, 5000); // 5 seconds
  }, initialDelay);
}

// Call the function to start the automation
automateGallerySlideshow();
