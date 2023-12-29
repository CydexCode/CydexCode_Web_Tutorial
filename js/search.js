let inputBox = document.querySelector(".input-box"),
 search = document.querySelector(".search"),
 closeIcon = document.querySelector(".close-icon");

 search.addEventListener("click", () => inputBox.classList.add("open"));
 closeIcon.addEventListener("click", () => inputBox.classList.remove("open"));


// Add this JavaScript code to your existing script or in a separate script file

document.addEventListener("DOMContentLoaded", function () {
    let inputBox = document.querySelector(".input-box"),
      search = document.querySelector(".search"),
      closeIcon = document.querySelector(".close-icon"),
      menuBtnMobile = document.getElementById("menu-btn-mobile");
  
    search.addEventListener("click", function () {
      inputBox.classList.add("open");
      hideMenuButton(); // Hide the menu button when the search bar is clicked
    });
  
    closeIcon.addEventListener("click", function () {
      inputBox.classList.remove("open");
      showMenuButton(); // Show the menu button when the search bar is closed
    });
  
    function hideMenuButton() {
      if (window.innerWidth <= 600) {
        menuBtnMobile.style.display = "none";
      }
    }
  
    function showMenuButton() {
      if (window.innerWidth <= 600) {
        menuBtnMobile.style.display = "flex";
      }
    }
  
    // Handle window resize to toggle menu button visibility
    window.addEventListener("resize", function () {
      if (inputBox.classList.contains("open")) {
        hideMenuButton();
      } else {
        showMenuButton();
      }
    });
  });

  /*hide login button when click search button <6000px*/
  document.addEventListener("DOMContentLoaded", function () {
    let inputBox = document.querySelector(".input-box"),
      search = document.querySelector(".search"),
      closeIcon = document.querySelector(".close-icon"),
      menuBtnMobile = document.getElementById("menu-btn-mobile"),
      loginBtn = document.getElementById("login-btn");
  
    search.addEventListener("click", function () {
      inputBox.classList.add("open");
      hideMobileButtons(); // Hide the menu and login buttons when the search bar is clicked
    });
  
    closeIcon.addEventListener("click", function () {
      inputBox.classList.remove("open");
      showMobileButtons(); // Show the menu and login buttons when the search bar is closed
    });
  
    function hideMobileButtons() {
      if (window.innerWidth <= 600) {
        menuBtnMobile.style.display = "none";
        loginBtn.style.display = "none";
      }
    }
  
    function showMobileButtons() {
      if (window.innerWidth <= 600) {
        menuBtnMobile.style.display = "flex";
        loginBtn.style.display = "flex";
      }
    }
  
    // Handle window resize to toggle menu and login button visibility
    window.addEventListener("resize", function () {
      if (inputBox.classList.contains("open")) {
        hideMobileButtons();
      } else {
        showMobileButtons();
      }
    });
  });
  

/*hide logo button*/ 

document.addEventListener("DOMContentLoaded", function () {
  let inputBox = document.querySelector(".input-box"),
    search = document.querySelector(".search"),
    closeIcon = document.querySelector(".close-icon"),
    menuBtnMobile = document.getElementById("menu-btn-mobile"),
    loginBtn = document.getElementById("login-btn"),
    logoBtn = document.querySelector(".CydexCode-logo");

  search.addEventListener("click", function () {
    inputBox.classList.add("open");
    hideMobileElements(); // Hide the logo, menu, and login buttons when the search bar is clicked
  });

  closeIcon.addEventListener("click", function () {
    inputBox.classList.remove("open");
    showMobileElements(); // Show the logo, menu, and login buttons when the search bar is closed
  });

  function hideMobileElements() {
    if (window.innerWidth <= 600) {
      menuBtnMobile.style.display = "none";
      loginBtn.style.display = "none";
      logoBtn.style.display = "none";
    }
  }

  function showMobileElements() {
    if (window.innerWidth <= 600) {
      menuBtnMobile.style.display = "flex";
      loginBtn.style.display = "flex";
      logoBtn.style.display = "block";
    }
  }

  // Handle window resize to toggle logo, menu, and login button visibility
  window.addEventListener("resize", function () {
    if (window.innerWidth > 600) {
      menuBtnMobile.style.display = "flex";
      loginBtn.style.display = "flex";
      logoBtn.style.display = "block";
    } else if (inputBox.classList.contains("open")) {
      hideMobileElements();
    } else {
      showMobileElements();
    }
  });
});

// Sample array of items with links
const itemsWithLinks = [
  { name: "Data Structures", link: "../processingPage/processingPage.html" },
  { name: "Algorithms", link: "../processingPage/processingPage.html" },
  { name: "DSA Exercises", link: "../processingPage/processingPage.html" },
  { name: "HTML", link: "../page/HTMLMainPage.html" },
  { name: "CSS", link: "../processingPage/processingPage.html" },
  { name: "JavaScript", link: "../processingPage/processingPage.html" },
  { name: "JQuery", link: "../processingPage/processingPage.html" },
  { name: "ReactJS", link: "../processingPage/processingPage.html" },
  { name: "AngularJS", link: "#../processingPage/processingPage.html" },
  { name: "ExpressJS", link: "../processingPage/processingPage.html" },
  { name: "NodeJS", link: "../processingPage/processingPage.html" },
  { name: "Machine Learning", link: "../processingPage/processingPage.html" },
  { name: "Data Science", link: "../processingPage/processingPage.html" },
  { name: "Data Analysis", link: "../processingPage/processingPage.html" },
  { name: "Deep Learning", link: "../processingPage/processingPage.html" },
  { name: "Maths", link: "../processingPage/processingPage.html" },
  { name: "Learn SQL", link: "../processingPage/processingPage.html" },
  { name: "Learn MySQL", link: "../processingPage/processingPage.html" },
  { name: "Learn PHP", link: "../processingPage/processingPage.html" },
  { name: "Learn Java", link: "../processingPage/processingPage.html" },
  { name: "Learn Python", link: "../processingPage/processingPage.html" },
  { name: "Learn C", link: "../processingPage/processingPage.html" },
  { name: "Learn C#", link: "../processingPage/processingPage.html" },
  { name: "Learn C++", link: "../processingPage/processingPage.html" },
  { name: "Data Structures Exercises", link: "../processingPage/processingPage.html" },
  { name: "Algorithms Exercises", link: "../processingPage/processingPage.html" },
  { name: "HTML Exercises", link: "../page/HTMLMainPage.html" },
  { name: "CSS Exercises", link: "../processingPage/processingPage.html" },
  { name: "JavaScript Exercises", link: "../processingPage/processingPage.html" },
  { name: "JQuery Exercises", link: "../processingPage/processingPage.html" },
  { name: "ReactJS Exercises", link: "../processingPage/processingPage.html" },
  { name: "AngularJS Exercises", link: "../processingPage/processingPage.html" },
  { name: "ExpressJS Exercises", link: "../processingPage/processingPage.html" },
  { name: "NodeJS Exercises", link: "../processingPage/processingPage.html" },
  { name: "Machine Learning Exercises", link: "../processingPage/processingPage.html" },
  { name: "Data Science Exercises", link: "../processingPage/processingPage.html" },
  { name: "Data Analysis Exercises", link: "../processingPage/processingPage.html" },
  { name: "Deep Learning Exercises", link: "../processingPage/processingPage.html" },
  { name: "Maths Exercises", link: "../processingPage/processingPage.html" },
  { name: "SQL Exercises", link: "../processingPage/processingPage.html" },
  { name: "MySQL Exercises", link: "../processingPage/processingPage.html" },
  { name: "PHP Exercises", link: "../processingPage/processingPage.html" },
  { name: "Java Exercises", link: "../processingPage/processingPage.html" },
  { name: "Python Exercises", link: "../processingPage/processingPage.html" },
  { name: "C Exercises", link: "../processingPage/processingPage.html" },
  { name: "C# Exercises", link: "../processingPage/processingPage.html" },
  { name: "C++ Exercises", link: "../processingPage/processingPage.html" },
];



document.addEventListener("DOMContentLoaded", function () {
  let inputBox = document.querySelector(".input-box"),
    search = document.querySelector(".search"),
    closeIcon = document.querySelector(".close-icon"),
    searchInput = document.getElementById("searchInput"),
    searchResultsContainer = document.getElementById("searchResults");

  search.addEventListener("click", function () {
    inputBox.classList.add("open");
    updateSearchResults(); // Initial update on click
  });

  closeIcon.addEventListener("click", function () {
    inputBox.classList.remove("open");
    searchResultsContainer.innerHTML = ""; // Clear search results when closing
  });

  searchInput.addEventListener("input", updateSearchResults);

  function updateSearchResults() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredItems = itemsWithLinks.filter(item =>
      item.name.toLowerCase().includes(searchTerm)
    );

    // Clear previous search results
    searchResultsContainer.innerHTML = "";

    // Display new search results as links
    filteredItems.forEach(item => {
      const linkElement = document.createElement("a");
      linkElement.href = item.link;
      linkElement.textContent = item.name;
      linkElement.classList.add("search-result-link");
      searchResultsContainer.appendChild(linkElement);
    });
  }
});


document.addEventListener("DOMContentLoaded", function () {
  let inputBox = document.querySelector(".input-box"),
    search = document.querySelector(".search"),
    closeIcon = document.querySelector(".close-icon"),
    searchInput = document.getElementById("searchInput"),
    searchResultsContainer = document.getElementById("searchResults");

  search.addEventListener("click", function () {
    inputBox.classList.add("open");
    updateSearchResults(); // Initial update on click
  });

  closeIcon.addEventListener("click", function () {
    inputBox.classList.remove("open");
    searchResultsContainer.innerHTML = ""; // Clear search results when closing
  });

  searchInput.addEventListener("input", updateSearchResults);

  function updateSearchResults() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredItems = itemsWithLinks.filter(item =>
      item.name.toLowerCase().includes(searchTerm)
    );

    // Clear previous search results
    searchResultsContainer.innerHTML = "";

    // Display new search results as links
    filteredItems.forEach(item => {
      const linkElement = document.createElement("a");
      linkElement.href = item.link;
      linkElement.textContent = item.name;
      linkElement.classList.add("search-result-link");
      searchResultsContainer.appendChild(linkElement);
    });

    // Toggle visibility of search results container
    searchResultsContainer.style.display = searchTerm ? "block" : "none";
  }
});



// /******big  search bar */

// // script.js

// document.addEventListener("DOMContentLoaded", function () {
//   let searchInput = document.getElementById("sectionHeadingSearchInput");
//   let searchResultsContainer = document.createElement("div");
//   searchResultsContainer.id = "search-results-container"; // Use the correct ID
//   document.querySelector(".section_Heading_search").appendChild(searchResultsContainer);

//   let itemsWithLinks = [
//     { name: "Data Structures", link: "../processingPage/processingPage.html" },
//     { name: "Algorithms", link: "../processingPage/processingPage.html" },
//     { name: "DSA Exercises", link: "../processingPage/processingPage.html" },
//     { name: "HTML", link: "../page/HTMLMainPage.html" },
//     { name: "CSS", link: "../processingPage/processingPage.html" },
//     { name: "JavaScript", link: "../processingPage/processingPage.html" },
//     { name: "JQuery", link: "../processingPage/processingPage.html" },
//     { name: "ReactJS", link: "../processingPage/processingPage.html" },
//     { name: "AngularJS", link: "#../processingPage/processingPage.html" },
//     { name: "ExpressJS", link: "../processingPage/processingPage.html" },
//     { name: "NodeJS", link: "../processingPage/processingPage.html" },
//     { name: "Machine Learning", link: "../processingPage/processingPage.html" },
//     { name: "Data Science", link: "../processingPage/processingPage.html" },
//     { name: "Data Analysis", link: "../processingPage/processingPage.html" },
//     { name: "Deep Learning", link: "../processingPage/processingPage.html" },
//     { name: "Maths", link: "../processingPage/processingPage.html" },
//     { name: "Learn SQL", link: "../processingPage/processingPage.html" },
//     { name: "Learn MySQL", link: "../processingPage/processingPage.html" },
//     { name: "Learn PHP", link: "../processingPage/processingPage.html" },
//     { name: "Learn Java", link: "../processingPage/processingPage.html" },
//     { name: "Learn Python", link: "../processingPage/processingPage.html" },
//     { name: "Learn C", link: "../processingPage/processingPage.html" },
//     { name: "Learn C#", link: "../processingPage/processingPage.html" },
//     { name: "Learn C++", link: "../processingPage/processingPage.html" },
//     { name: "Data Structures Exercises", link: "../processingPage/processingPage.html" },
//     { name: "Algorithms Exercises", link: "../processingPage/processingPage.html" },
//     { name: "HTML Exercises", link: "../page/HTMLMainPage.html" },
//     { name: "CSS Exercises", link: "../processingPage/processingPage.html" },
//     { name: "JavaScript Exercises", link: "../processingPage/processingPage.html" },
//     { name: "JQuery Exercises", link: "../processingPage/processingPage.html" },
//     { name: "ReactJS Exercises", link: "../processingPage/processingPage.html" },
//     { name: "AngularJS Exercises", link: "../processingPage/processingPage.html" },
//     { name: "ExpressJS Exercises", link: "../processingPage/processingPage.html" },
//     { name: "NodeJS Exercises", link: "../processingPage/processingPage.html" },
//     { name: "Machine Learning Exercises", link: "../processingPage/processingPage.html" },
//     { name: "Data Science Exercises", link: "../processingPage/processingPage.html" },
//     { name: "Data Analysis Exercises", link: "../processingPage/processingPage.html" },
//     { name: "Deep Learning Exercises", link: "../processingPage/processingPage.html" },
//     { name: "Maths Exercises", link: "../processingPage/processingPage.html" },
//     { name: "SQL Exercises", link: "../processingPage/processingPage.html" },
//     { name: "MySQL Exercises", link: "../processingPage/processingPage.html" },
//     { name: "PHP Exercises", link: "../processingPage/processingPage.html" },
//     { name: "Java Exercises", link: "../processingPage/processingPage.html" },
//     { name: "Python Exercises", link: "../processingPage/processingPage.html" },
//     { name: "C Exercises", link: "../processingPage/processingPage.html" },
//     { name: "C# Exercises", link: "../processingPage/processingPage.html" },
//     { name: "C++ Exercises", link: "../processingPage/processingPage.html" },
//   ];

//   searchInput.addEventListener("input", updateSearchResults);

//   function updateSearchResults() {
//       const searchTerm = searchInput.value.toLowerCase();
//       const filteredItems = itemsWithLinks.filter(item =>
//           item.name.toLowerCase().includes(searchTerm)
//       );

//       // Clear previous search results
//       searchResultsContainer.innerHTML = "";

//       // Display new search results as links
//       filteredItems.forEach(item => {
//           const linkElement = document.createElement("a");
//           linkElement.href = item.link;
//           linkElement.textContent = item.name;
//           linkElement.classList.add("search-result-link");
//           searchResultsContainer.appendChild(linkElement);
//       });

//       // Toggle visibility of search results container
//       searchResultsContainer.style.display = searchTerm ? "flex" : "none"; // Corrected the display property
//   }
// });

