
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
    
        // rightArrow.addEventListener("click", rotateLeft);
        // leftArrow.addEventListener("click", rotateRight);
    
        // updateSlide(); // Initialize carousel correctly
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
    
        // observer.observe(statisticsSection);
    });
    


   
  
//  //Register &login



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


//2
(
    function(){
        document.addEventListener("DOMContentLoaded", () => {      

            // debugger;
             var temp= document.querySelectorAll('.options')
             temp.forEach(te=>
                    {
                        te.addEventListener('click',()=>
                        {
                            var split=te.id.split('-');
                           
                            var item=document.querySelectorAll('.op')
        
                            item.forEach(it=>
                            {
                                it.style.display='none';
        
                            }
                            )
        
                        if(split[0]=='all')
                            document.getElementById(split[0]).style.display='flex';
                        else
                            document.getElementById(split[0]).style.display='block';
        
                            
        
                        })
        
                    }
           )
        
    })
    }()
);



 //2
//  (
//     function()
//     {
       

//     }
// );







  
