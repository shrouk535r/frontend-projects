
//1
(function()
{
    document.addEventListener("DOMContentLoaded", () => {
        const courseContainer = document.querySelector(".mainCourses");
        const courseCards = Array.from(document.querySelectorAll(".CourseCard"));
        const rightArrow = document.querySelector(".secondCourseIcon");
        const leftArrow = document.querySelector(".firstCourseIcon");
    
        const visibleCards = 4; // Number of visible cards at a time
    
        function updateSlide() {
            courseContainer.innerHTML = ""; // Clear previous order
            courseCards.forEach((card, index) => {
                if (index < visibleCards) {
                    card.style.display = "block"; // Show first 4 cards
                    card.style.opacity = "1";
                } else {
                    card.style.display = "none"; // Hide extra cards
                    card.style.opacity = "0";
                }
                courseContainer.appendChild(card); // Re-add in correct order
            });
        }
    
        function rotateRight() {
            courseContainer.style.transition = "transform 0.5s ease-in-out";
            // courseContainer.style.transform = "translateX(-25%)"; // Slide left
    
            setTimeout(() => {
                const hiddenCard = courseCards[visibleCards]; // Get the hidden card
                courseCards.push(courseCards.shift()); // Moves first card to the end
                updateSlide();
                courseContainer.style.transition = "none";
                courseContainer.style.transform = "translateX(0)";
            }, 500);
        }
    
        function rotateLeft() {
            courseContainer.style.transition = "transform 0.5s ease-in-out";
            // courseContainer.style.transform = "translateX(25%)"; // Slide right
    
            setTimeout(() => {
                courseCards.unshift(courseCards.pop()); // Moves last card to the front
                updateSlide();
                courseContainer.style.transition = "none";
                courseContainer.style.transform = "translateX(0)";
            }, 500);
        }
    
        rightArrow.addEventListener("click", rotateLeft);
        leftArrow.addEventListener("click", rotateRight);
    
        updateSlide(); // Initialize carousel correctly
    });
    
    
    
    
    document.addEventListener("DOMContentLoaded", () => {
        const counters = document.querySelectorAll("#Statistics .firstone p:first-of-type");
        const statisticsSection = document.querySelector("#Statistics");
    
        function updateCounter(counter) {
            let targetNumber = parseInt(counter.innerText);
            let currentNumber = 0;
            let increment = Math.ceil(targetNumber / 100); // Speed adjustment
    
            function animate() {
                if (currentNumber < targetNumber) {
                    currentNumber += increment;
                    if (currentNumber > targetNumber) currentNumber = targetNumber; // Prevent overshoot
                    counter.innerText = currentNumber;
                    setTimeout(animate, 20); // Smooth animation speed
                }
            }
    
            counter.innerText = "0"; // Start from zero
            animate(); // Begin animation
        }
    
        // Set up Intersection Observer to detect when section enters viewport
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    counters.forEach(updateCounter);
                    observer.disconnect(); // Stops further triggering
                }
            });
        }, { threshold: 0.5 }); // Activates when 50% of the section is visible
    
        observer.observe(statisticsSection);
    });
    
//  //Register &login
//  const emailInput = document.getElementById("email");
//  const passwordInput = document.getElementById("password");
//  const passwordConf = document.getElementById("re-password");
//  const userName = document.getElementById("name");
//  const signupInput = document.getElementById("SignupInput");

// var maillist = []


// //here to get the pervious emails and passowrd and re-push it in the array
// if (localStorage.getItem("mailcontainer") != null) {
//     maillist = JSON.parse(localStorage.getItem('mailcontainer'))
// }
// var username1;

// signupInput.addEventListener("click", function () {
//     // userName.classList.add("d-block")
//     // userName.classList.remove("d-none")
//     // signupinputButton.classList.replace("d-none", "d-block")
//     // success.classList.replace("d-block", "d-none")
//     AddEmails();
// })

// // SigninInput.addEventListener("click", function () {
// //     username.classList.replace("d-block", "d-none")
// //     SigninInput.classList.replace("d-inline-block", "d-none")
// //     SignupInput.classList.replace("d-none", "d-inline-block")
// //     loginInput.classList.replace("d-none", "d-block")
// //     signupinputButton.classList.replace("d-block", "d-none")
// //     success.classList.replace("d-block", "d-none")
// //     emailinput.value = ""
// //     username.value=""
// //     Passwordinput.value = ""
// // }
// // )

// //the signup page
// function AddEmails() {
//     if (IsEmpty() == true) {
//         var addmail =
//         {
//             name: userName.value,
//             Email: emailInput.value,
//             Password: passwordInput.value,
//             profilePic: document.getElementById("profile").files[0]?.name || "default.jpg" // Get profile picture filename

//         }

//         //here to check id the e-mail was stored before or not
//         if (IsExist() == false) {
//             exists.classList.replace("d-none", "d-block")
//             success.classList.replace("d-block", "d-none")
//         }

//         else {
//             maillist.push(addmail)
//             localStorage.setItem("mailcontainer", JSON.stringify(maillist))
//         }
//     }


//     else {
//         required1.classList.replace("d-none", "d-block")
//         success.classList.replace("d-block", "d-none")
//         exists.classList.replace("d-block", "d-none")
//     }
//     emailInput.value = "";
//     passwordInput.value = "";
//     passwordConf.value = "";

// }

// //function to check if the input in the signup page is Empty or not
// function IsEmpty() {
//     if (userName.value == "" || passwordInput.value == ''|| passwordConf.value == '' || emailInput.value == "") {
//         return false
//     }
//     else {
//         return true

//     }
// }

// //Function to Check if the E-mail was stored before or not 
// function IsExist() {
//     for (let i = 0; i < maillist.length; i++) {
//         if (maillist[i].Email.toLowerCase() == emailInput.value.toLowerCase()) {
//             return false;
//         }

//     }
//     return true;
// }

// // to chech if the e-mail and the password in the login page is empty or not
// function LoginEmpty() {
//     if (passwordInput.value == '' || emailInput.value == "") {
//         return false
//     }
//     else {
//         return true

//     }
// }

// document.addEventListener("DOMContentLoaded", () => {




//     let userList = JSON.parse(localStorage.getItem("userList")) || []; // Retrieve users from localStorage or initialize an empty array

//     signupInput.addEventListener("click", (e) => {
//         e.preventDefault(); // Prevent form submission
//         const user = {
//             name: userName.value.trim(),
//             email: emailInput.value.trim(),
//             password: passwordInput.value.trim(),
//         };

//         // Input validation
//         if (validateInputs(user)) {
//             // Check for duplicate email
//             if (userList.some(u => u.email.toLowerCase() === user.email.toLowerCase())) {
//                 alert("Email already exists. Please use another email."); // Show duplicate error
//                 return;
//             }

//             userList.push(user); // Add new user to userList
//             localStorage.setItem("userList", JSON.stringify(userList)); // Save updated userList to localStorage
//             alert("Registration successful!");
//             clearInputs(); // Clear form inputs
//         } else {
//             alert("Please fill out all fields correctly.");
//         }
//     });

//     function validateInputs(user) {
//         // Ensure all inputs are filled and passwords match
//         return user.name && user.email && user.password && passwordConf.value === user.password;
//     }

//     function clearInputs() {
//         // Clear all input fields
//         userName.value = "";
//         emailInput.value = "";
//         passwordInput.value = "";
//         passwordConf.value = "";
//         document.getElementById("profile").value = "";
//     }
// });


    
}()
);



  
