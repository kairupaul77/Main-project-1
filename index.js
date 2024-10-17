fetch('https://main-project-1-9do9.onrender.com/images')
  .then((response) => response.json())
  .then((json) => console.log(json));
// Time update function
function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById('current-time').textContent = timeString;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initial call to display time immediately
updateTime();

// Function to delete an image
function deleteImage(button) {
  const imageContainer = button.parentElement;
  imageContainer.remove();  // Remove the image container from the DOM
}

// Function to edit an image
function editImage(input) {
  const file = input.files[0];
  if (file && file.type.startsWith('image/')) {
      const imageContainer = input.parentElement;
      const img = imageContainer.querySelector('img');
      const reader = new FileReader();
      reader.onload = function(e) {
          img.src = e.target.result;  // Update the image source
      };
      reader.readAsDataURL(file);
  } else {
      alert("Please select a valid image file.");
  }
}

// Function to add a new image
function addImage() {
  const fileInput = document.getElementById('fileInputAdd');
  const file = fileInput.files[0];

  if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = function(e) {
          const newImageContainer = document.createElement('div');
          newImageContainer.classList.add('image-container');

          const newImage = document.createElement('img');
          newImage.src = e.target.result;
          newImage.alt = 'New Image';

          const editButton = document.createElement('button');
          editButton.innerText = 'Edit';
          editButton.classList.add('edit-btn');
          editButton.onclick = function() {
              const input = document.createElement('input');
              input.type = 'file';
              input.style.display = 'none';
              input.onchange = function() {
                  const file = input.files[0];
                  if (file && file.type.startsWith('image/')) {
                      const reader = new FileReader();
                      reader.onload = function(e) {
                          newImage.src = e.target.result;
                      };
                      reader.readAsDataURL(file);
                  }
              };
              input.click();  // Trigger file input for editing
          };

          const deleteButton = document.createElement('button');
          deleteButton.innerText = 'Delete';
          deleteButton.classList.add('delete-btn');
          deleteButton.onclick = function() {
              newImageContainer.remove();
          };

          newImageContainer.appendChild(newImage);
          newImageContainer.appendChild(editButton);
          newImageContainer.appendChild(deleteButton);

          document.getElementById('imageGallery').appendChild(newImageContainer);
      };

      reader.readAsDataURL(file);
  } else {
      alert('Please select a valid image file.');
  }

  fileInput.value = '';  // Clear the file input
}

// Budget form submission
document.getElementById('budgetForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const area = parseFloat(document.getElementById('areaInput').value);
  const budgetOutput = document.getElementById('budgetOutput');
  let message = '';
  let cssClass = '';
  if (area >= 10 && area <= 15) {
    message = 'A budget of less than Ksh 20,000.';
    cssClass = 'null';

  }else if (area >= 10 && area <= 15) {
      message = 'A budget of Ksh 20,000 - Ksh 25,000 is good for an area of 10 to 15 square meters.';
      cssClass = 'success';
  } else if (area > 15 && area <= 25) {
      message = 'A budget of Ksh 25,000 - Ksh 35,000 is good for an area of 16 to 25 square meters.';
      cssClass = 'success';
  } else if (area > 25 && area <= 40) {
      message = 'A budget of Ksh 35,000 - Ksh 55,000 is good for an area of 26 to 40 square meters.';
      cssClass = 'success';
  } else if (area > 40 && area <= 60) {
      message = 'A budget of Ksh 55,000 - Ksh 75,000 is good for an area of 41 to 60 square meters.';
      cssClass = 'success';
  } else {
      message = 'Measurements can be made for a budget to be known for your space.';
      cssClass = 'error';
  }

  budgetOutput.textContent = message;
  budgetOutput.className = cssClass;

  const successMessage = document.getElementById('successMessage');
  if (cssClass === 'success') {
      successMessage.style.display = 'block';
      setTimeout(() => successMessage.style.display = 'none', 3000);
  }

  document.getElementById('areaInput').value = '';  // Clear the form input
});

//search controls
document.querySelector('.d-flex').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent form from submitting and refreshing the page

  const searchQuery = document.querySelector('.form-control').value.trim();  // Get search input
  if (searchQuery) {
    console.log('Search query:', searchQuery);  // You could replace this with your actual search logic
    // Implement your search logic here, like filtering items or sending a request to a server
  } else {
    console.log('No search query entered');  // If input is empty
  }
  
  document.querySelector('.form-control').value = '';  // Optionally clear the input field after search
});

document.addEventListener('DOMContentLoaded', function() {
  // DOM elements
  const loginSection = document.getElementById('login-section');
  const logoutSection = document.getElementById('logout-section');
  const loginButton = document.getElementById('login-button');
  const logoutButton = document.getElementById('logout-button');

  // Check if user is already logged in
  if (sessionStorage.getItem('loggedIn') === 'true') {
    showLogoutSection();
  } else {
    showLoginSection();
  }

  // Handle login button click
  loginButton.addEventListener('click', function() {
    // Simulate login (you can add authentication logic here)
    sessionStorage.setItem('loggedIn', 'true');
    showLogoutSection();
  });

  // Handle logout button click
  logoutButton.addEventListener('click', function() {
    // Clear session storage and simulate logout
    sessionStorage.removeItem('loggedIn');
    showLoginSection();
  });

  // Functions to toggle sections
  function showLoginSection() {
    loginSection.style.display = 'block';
    logoutSection.style.display = 'none';
  }

  function showLogoutSection() {
    loginSection.style.display = 'none';
    logoutSection.style.display = 'block';
  }
});

// Function to add a new image to the gallery
function addImage() {
  const fileInput = document.getElementById('fileInputAdd');
  const file = fileInput.files[0];  // Get the selected file

  if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();

      reader.onload = function(e) {
          const newImageContainer = document.createElement('div');
          newImageContainer.classList.add('image-container');

          const newImage = document.createElement('img');
          newImage.src = e.target.result;  // Set the image source
          newImage.alt = 'New Design Image';

          // Edit Button
          const editButton = document.createElement('button');
          editButton.innerText = 'Edit';
          editButton.classList.add('edit-btn');
          editButton.onclick = function() {
              const input = document.createElement('input');
              input.type = 'file';
              input.style.display = 'none';
              input.onchange = function() {
                  const file = input.files[0];
                  if (file && file.type.startsWith('image/')) {
                      const reader = new FileReader();
                      reader.onload = function(e) {
                          newImage.src = e.target.result;
                      };
                      reader.readAsDataURL(file);
                  }
              };
              input.click();  // Trigger file input for editing
          };

          // Delete Button
          const deleteButton = document.createElement('button');
          deleteButton.innerText = 'Delete';
          deleteButton.classList.add('delete-btn');
          deleteButton.onclick = function() {
              newImageContainer.remove();  // Remove the image container
          };

          // Append everything to the image container
          newImageContainer.appendChild(newImage);
          newImageContainer.appendChild(editButton);
          newImageContainer.appendChild(deleteButton);

          // Append the new image container to the gallery
          document.getElementById('imageGallery').appendChild(newImageContainer);
      };

      reader.readAsDataURL(file);  // Convert the image file to a data URL
  } else {
      alert('Please select a valid image file.');
  }

  fileInput.value = '';  // Clear the file input
}

// Track if the image is currently visible
let isImageVisible = false;
let currentImageIndex = 0;

// Function to handle the button click event
function viewImage(button) {
  const imageElement = document.getElementById("image");

  // Toggle the visibility of the image
  if (!isImageVisible) {
    // Show the image
    imageElement.src = images[currentImageIndex];
    imageElement.style.display = "block"; // Make the image visible
    button.textContent = "Next"; // Change button text to 'Next' after viewing the first image
    isImageVisible = true;
  } else {
    // Change to the next image
    currentImageIndex = (currentImageIndex + 1) % images.length;
    imageElement.src = images[currentImageIndex]; // Update the image source
  }
}