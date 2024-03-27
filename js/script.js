"use strict";
fetch("https://jsonplaceholder.typicode.com/photos/4575")
  .then((response) => response.json())
  .then((data) => {
    const albumInfoContainer = document.getElementById("albumInfo");
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
