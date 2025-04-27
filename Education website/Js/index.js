//1    
(function()
{


  //Nav Change Color
    window.addEventListener("scroll", () => {
        var scrollTop = window.scrollY; // Get the current scroll position
        var nav = document.getElementById("nav"); // Select the navbar element
        var navCourse = document.getElementById("navCourse"); // Select the navbar element
        var navAbout = document.getElementById("navAbout"); // Select the navbar element
        var About = document.getElementById("About"); // Select the navbar element
        var navRegister = document.getElementById("navRegister"); // Select the navbar element
        var Register = document.getElementById("register"); // Select the navbar element
        var iconUp = document.querySelector(".iconup"); // Optional: Fade-in/out icon element
        var about=document.querySelector('#about');
        var Courses=document.querySelector('#Courses');
        var iconNav=document.getElementById('iconNav');
        var menulist=document.getElementById('menulist');
       
        if (window.location.pathname.includes("index.html")) {
        if (scrollTop > About.offsetTop ) {
            nav.style.backgroundColor = "black"; // Change background color to tomato
            nav.classList.add('shadow'); // Set boxShadow to none
            nav.classList.remove('nonshadow'); // Set boxShadow to none
            console.log("Scroll detected");
    
            // Fade-in effect for an icon (optional)
            if (iconUp) {
                iconUp.style.transition = "opacity 1s"; // Smooth transition
                iconUp.style.opacity = "1";
                iconUp.style.display = "block";
            }
        } else {
            nav.style.backgroundColor = "transparent"; // Change background color to black
            nav.classList.add('nonshadow'); // Set boxShadow to none
            nav.classList.remove('shadow'); // Set boxShadow to none
            // Fade-out effect for an icon (optional)
            if (iconUp) {
                iconUp.style.transition = "opacity 1s";
                iconUp.style.opacity = "0";
                setTimeout(() => {
                    iconUp.style.display = "none";
                }, 1000); // Matches fade-out duration
            }
        }
    }
    if (window.location.pathname.includes("courses.html")) {
        if (scrollTop>Courses.offsetTop-78) {
            navCourse.style.backgroundColor = "black"; // Change background color to tomato
            navCourse.classList.add('shadow'); // Set boxShadow to none
            navCourse.classList.remove('nonshadow'); // Set boxShadow to none
            //             console.log("Scroll detected");
    
            // Fade-in effect for an icon (optional)
            if (iconUp) {
                iconUp.style.transition = "opacity 1s"; // Smooth transition
                iconUp.style.opacity = "1";
                iconUp.style.display = "block";
            }
        } else {
            navCourse.style.backgroundColor = "transparent"; // Change background color to black
            navCourse.classList.add('nonshadow'); // Set boxShadow to none
            navCourse.classList.remove('shadow'); // Set boxShadow to none
            if (iconUp) {
                iconUp.style.transition = "opacity 1s";
                iconUp.style.opacity = "0";
                setTimeout(() => {
                    iconUp.style.display = "none";
                }, 1000); // Matches fade-out duration
            }
        }
    }
    if (window.location.pathname.includes("about.html")) {
        if (scrollTop>About.offsetTop-78) {
            navAbout.style.backgroundColor = "black"; // Change background color to tomato
            navAbout.classList.add('shadow'); // Set boxShadow to none
            navAbout.classList.remove('nonshadow'); // Set boxShadow to none
            //             console.log("Scroll detected");
    
            // Fade-in effect for an icon (optional)
            if (iconUp) {
                iconUp.style.transition = "opacity 1s"; // Smooth transition
                iconUp.style.opacity = "1";
                iconUp.style.display = "block";
            }
        } else {
            navAbout.style.backgroundColor = "transparent"; // Change background color to black
            navAbout.classList.add('nonshadow'); // Set boxShadow to none
            navAbout.classList.remove('shadow'); // Set boxShadow to none
            if (iconUp) {
                iconUp.style.transition = "opacity 1s";
                iconUp.style.opacity = "0";
                setTimeout(() => {
                    iconUp.style.display = "none";
                }, 1000); // Matches fade-out duration
            }
        }
    }
    if (window.location.pathname.includes("register.html")) {
        if (scrollTop>Register.offsetTop-75) {
            navRegister.style.backgroundColor = "black"; // Change background color to tomato
            navRegister.classList.add('shadow'); // Set boxShadow to none
            navRegister.classList.remove('nonshadow'); // Set boxShadow to none
              console.log("Scroll detected");
    
            // Fade-in effect for an icon (optional)
            if (iconUp) {
                iconUp.style.transition = "opacity 1s"; // Smooth transition
                iconUp.style.opacity = "1";
                iconUp.style.display = "block";
            }
        } else {
            navRegister.style.backgroundColor = "transparent"; // Change background color to black
            navRegister.classList.add('nonshadow'); // Set boxShadow to none
            navRegister.classList.remove('shadow'); // Set boxShadow to none
            if (iconUp) {
                iconUp.style.transition = "opacity 1s";
                iconUp.style.opacity = "0";
                setTimeout(() => {
                    iconUp.style.display = "none";
                }, 1000); // Matches fade-out duration
            }
        }
    }

    });
    //nav Responsive
    iconNav.addEventListener('click',function(){
        console.log('hello')
        navIcon()

    })

    function navIcon()
    {
        if(menulist.classList.contains('appear'))
        {
            menulist.classList.remove('appear');
            menulist.classList.add('hide');
            menulist.style.maxHeight='0px'
        }
        else
        {
            menulist.classList.add('appear');
            menulist.style.maxHeight='300px'
            
        menulist.classList.remove('hide');
        }
    }

    /*End Of Nav*/


    
    // document.addEventListener("DOMContentLoaded", () => {
    //     const courseContainer = document.querySelector(".mainCourses");
    //     const courseCards = Array.from(document.querySelectorAll(".CourseCard"));
    //     const rightArrow = document.querySelector(".secondCourseIcon");
    //     const leftArrow = document.querySelector(".firstCourseIcon");
    
    //     const visibleCards = 4; // Number of visible cards at a time
    
    //     function updateSlide() {
    //         courseContainer.innerHTML = ""; // Clear previous order
    //         courseCards.forEach((card, index) => {
    //             if (index < visibleCards) {
    //                 card.style.display = "block"; // Show first 4 cards
    //                 card.style.opacity = "1";
    //             } else {
    //                 card.style.display = "none"; // Hide extra cards
    //                 card.style.opacity = "0";
    //             }
    //             courseContainer.appendChild(card); // Re-add in correct order
    //         });
    //     }
    
    //     function rotateRight() {
    //         courseContainer.style.transition = "transform 0.5s ease-in-out";
    //         // courseContainer.style.transform = "translateX(-25%)"; // Slide left
    
    //         setTimeout(() => {
    //             const hiddenCard = courseCards[visibleCards]; // Get the hidden card
    //             courseCards.push(courseCards.shift()); // Moves first card to the end
    //             updateSlide();
    //             courseContainer.style.transition = "none";
    //             courseContainer.style.transform = "translateX(0)";
    //         }, 500);
    //     }
    
    //     function rotateLeft() {
    //         courseContainer.style.transition = "transform 0.5s ease-in-out";
    //         // courseContainer.style.transform = "translateX(25%)"; // Slide right
    
    //         setTimeout(() => {
    //             courseCards.unshift(courseCards.pop()); // Moves last card to the front
    //             updateSlide();
    //             courseContainer.style.transition = "none";
    //             courseContainer.style.transform = "translateX(0)";
    //         }, 500);
    //     }
    
    //      rightArrow.addEventListener("click", rotateLeft);
    //      leftArrow.addEventListener("click", rotateRight);
    
    //      updateSlide(); // Initialize carousel correctly
    // });
    
    
    
    
    // document.addEventListener("DOMContentLoaded", () => {
    //     const counters = document.querySelectorAll("#Statistics .firstone p:first-of-type");
    //     const statisticsSection = document.querySelector("#Statistics");
    
    //     function updateCounter(counter) {
    //         let targetNumber = parseInt(counter.innerText);
    //         let currentNumber = 0;
    //         let increment = Math.ceil(targetNumber / 100); // Speed adjustment
    
    //         function animate() {
    //             if (currentNumber < targetNumber) {
    //                 currentNumber += increment;
    //                 if (currentNumber > targetNumber) currentNumber = targetNumber; // Prevent overshoot
    //                 counter.innerText = currentNumber;
    //                 setTimeout(animate, 20); // Smooth animation speed
    //             }
    //         }
    
    //         counter.innerText = "0"; // Start from zero
    //         animate(); // Begin animation
    //     }
    
    //     // Set up Intersection Observer to detect when section enters viewport
    //     const observer = new IntersectionObserver(entries => {
    //         entries.forEach(entry => {
    //             if (entry.isIntersecting) {
    //                 counters.forEach(updateCounter);
    //                 observer.disconnect(); // Stops further triggering
    //             }
    //         });
    //     }, { threshold: 0.5 }); // Activates when 50% of the section is visible
    
    //     observer.observe(statisticsSection);
    // });
    
    //Course Page
var searchinput=document.getElementById("searchinput")
var coursesName = ["How To Create An Online Course","How To Teach An Online Course","The Complete Online Teaching Masterclass","Create an LMS Website with LearnPress","Create an Asp.net project","Create an angular system"]
localStorage.setItem("ProdeuctContainer",JSON.stringify(coursesName))

if (window.location.pathname.includes("courses.html")) {
searchinput.addEventListener('keyup',function(){
    search();
})
function search()
{
var searchValue=searchinput.value.toLowerCase()
    var temp=''
for(var i=0;i<coursesName.length;i++)
{
    if(coursesName[i].toLowerCase().includes(searchValue)==true)
{
    temp+= `    <div class="CourseCardPage" >
                    <img src="imgs/course1.jpg" alt="">
                   <a href=""><h2>Keny White</h2></a> 
                    <p>${coursesName[i]}</p>
                    <div class="btnCourse">
                    <button><a href="login.html">Enroll</a></button>
                </div>
                    <div class="mainFooter">
                    <div class="courseFooter">
                        <i class="fa-solid fa-file-lines"></i>
                        <span>30</span>
                        <i class="fa-solid fa-user"></i>
                        <span>25</span>
                    </div>
                    <div>
                        <p style="color: green;">Free</p>
                    </div>
                </div>
                </div>`
}
document.getElementById("courseCardPageId").innerHTML=temp
}
}
}
var photoCount=2,teacherTrainiCount=2,coachingCount=2,onlineBusinessCount=1,technologyCount=3,teachingOnlineCount=5,videoCreationCount=3,passiveIncomeCount=2;
var photography=document.getElementById('photography');
var teacherTraining=document.getElementById('teacherTraining');
var coaching=document.getElementById('coaching');
var onlineBusiness=document.getElementById('onlineBusiness');
var technology=document.getElementById('technology');
var teachingOnline=document.getElementById('teachingOnline');
var videoCreation=document.getElementById('videoCreation');
var passiveIncome=document.getElementById('passiveIncome');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

var photographTitles=["Online Course Creation Secrets","Become a Successful Online Teacher"]
var teacherTrainingTitles=["The Complete Online Teaching Masterclass","How to Teach English Online and Get Paid"]
var coachingTitles=["How To Create An Online Course","Build a Six-Figure Online Business Selling Online Courses"]
var onlineBusinessTitles=["How To Create In-Demand Online Courses"]
var technologyTitles=["How To Sell In-Person Course With LearnPress","How To Teach Online Courses Effectively","How to Create an Awesome Online Course"]
var teachingOnlineTitles=["Introduction LearnPress – LMS plugin","Create an LMS Website with LearnPress","How To Teach An Online Course","Instructional Design for Learning and Development","50 Tips on Making a Great Online Course"]
var videoCreationTitles=["Accelerate Your Course Creation Speed","Begin Teaching Online Full Time","Eduma Course Creation for Passive Income"]
var passiveIncomeTitles=["Launch Your Own Online School and Increase Your Profits","Easy Zurb Foundation"]
var temp='';
let temp2=``;
// let check=true;
var check=false;
// Object to map course details
const courseDetails = {
    photography: {
      count: 2,
      titles: ["Online Course Creation Secrets", "Become a Successful Online Teacher"]
    },
    teacherTraining: {///
      count: 2,
      titles: ["The Complete Online Teaching Masterclass", "How to Teach English Online and Get Paid"]
    },
    coaching: {///
      count: 2,
      titles: ["How To Create An Online Course", "Build a Six-Figure Online Business Selling Online Courses"]
    },
    onlineBusiness: {
      count: 1,
      titles: ["How To Create In-Demand Online Courses"]
    },
    technology: {///
      count: 3,
      titles: ["How To Sell In-Person Course With LearnPress", "How To Teach Online Courses Effectively", "How to Create an Awesome Online Course"]
    },
    teachingOnline: {///
      count: 4,
      titles: [
        "Introduction LearnPress – LMS plugin",
        "Create an LMS Website with LearnPress",
        "How To Teach An Online Course",
        "Instructional Design for Learning and Development",
      ]
    },
    videoCreation: {
      count: 3,
      titles: [
        "Accelerate Your Course Creation Speed",
        "Begin Teaching Online Full Time",
        "Eduma Course Creation for Passive Income"
      ]
    },
    passiveIncome: {//
      count: 2,
      titles: ["Launch Your Own Online School and Increase Your Profits", "Easy Zurb Foundation"]
    }
  };
  
  // Select checkboxes and the target div
  const courseContainer = document.getElementById('courseCardPageId');
  
  // Event listener for all checkboxes
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', updateCourses);
  });
  
  function updateCourses() {
    let temp = '';
    let hasChecked = false;
  
    // Iterate through all checkboxes
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        hasChecked = true;
        let category = checkbox.id; // Checkbox ID maps to courseDetails key
        if (courseDetails[category]) {
          const details = courseDetails[category];
  
          for (let i = 1; i <= details.count; i++) {
           
            temp += `
            
              <div class="CourseCardPage" style="width: 45%;">
                <img src="imgs/${category}${i}.jpg" alt="${details.titles[i - 1]}">
                <a href=""><h2>Keny White</h2></a>
                <p>${details.titles[i - 1]}</p>
                <div class="btnCourse">
                  <button><a href="login.html">Enroll</a></button>
                </div>
                <div class="mainFooter">
                  <div class="courseFooter">
                    <i class="fa-solid fa-file-lines"></i>
                    <span>30</span>
                    <i class="fa-solid fa-user"></i>
                    <span>25</span>
                  </div>
                  <div>
                    <p style="color: green;">Free</p>
                  </div>
                </div>
              </div>
            `;
          }
        }
      }
      
    });
    // Update the course container
    if (hasChecked) {
        selectedCourses = temp; // Store current selection
      }
    
      // If no checkboxes are checked, display previous selection or a fallback message
      courseContainer.innerHTML = hasChecked ? temp : selectedCourses || `<p style="text-align: center; font-size: 18px; color: gray;">No courses selected. Please choose a category to view courses.</p>`;  }
  

      const searchInput = document.getElementById('searchinput'); // Your search input field

      function searchCourses() {
        const searchValue = searchInput.value.toLowerCase(); // Convert input to lowercase for case-insensitive search
        let results = '';
        let hasCheckedCategory = false; // Flag to check if any category is selected
    
        // Iterate through all checkboxes to identify selected categories
        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                hasCheckedCategory = true; // Mark that at least one category is selected
                const category = checkbox.id; // Get the category ID
                const titles = courseDetails[category].titles; // Access titles array for the category
    
                // Perform search within selected categories
                titles.forEach((title, index) => {
                    if (title.toLowerCase().includes(searchValue)) {
                        results += `
                            <div class="CourseCardPage" style="width: 45%;">
                                <img src="imgs/${category}${index + 1}.jpg" alt="${title}">
                                <a href=""><h2>Keny White</h2></a>
                                <p>${title}</p>
                                <div class="btnCourse">
                                    <button><a href="login.html">Enroll</a></button>
                                </div>
                                <div class="mainFooter">
                                    <div class="courseFooter">
                                        <i class="fa-solid fa-file-lines"></i>
                                        <span>30</span>
                                        <i class="fa-solid fa-user"></i>
                                        <span>25</span>
                                    </div>
                                    <div>
                                        <p style="color: green;">Free</p>
                                    </div>
                                </div>
                            </div>
                        `;
                    }
                });
            }
        });
    
        // If no categories are selected, search across all categories
        if (!hasCheckedCategory) {
            for (let category in courseDetails) {
                const titles = courseDetails[category].titles; // Access titles array for each category
    
                titles.forEach((title, index) => {
                    if (title.toLowerCase().includes(searchValue)) {
                        results += `
                            <div class="CourseCardPage" style="width: 45%;">
                                <img src="imgs/${category}${index + 1}.jpg" alt="${title}">
                                <a href=""><h2>Keny White</h2></a>
                                <p>${title}</p>
                                <div class="btnCourse">
                                    <button><a href="login.html">Enroll</a></button>
                                </div>
                                <div class="mainFooter">
                                    <div class="courseFooter">
                                        <i class="fa-solid fa-file-lines"></i>
                                        <span>30</span>
                                        <i class="fa-solid fa-user"></i>
                                        <span>25</span>
                                    </div>
                                    <div>
                                        <p style="color: green;">Free</p>
                                    </div>
                                </div>
                            </div>
                        `;
                    }
                });
            }
        }
    
        // Display fallback messages if no results are found
        document.getElementById('courseCardPageId').innerHTML = results || (hasCheckedCategory
            ? `<p style="text-align: center; color: gray;">No courses found matching your search in the selected categories.</p>`
            : `<p style="text-align: center; color: gray;">Please select a category or type a search term to find courses.</p>`);
    }
    
    // Event listener for search input
    if (window.location.pathname.includes("courses.html")) {
    searchInput.addEventListener('keyup', searchCourses);
    }
    // Add this for category checkbox changes to refresh results
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', searchCourses);
    });
    
      

   //Testimonial
   const wrapper = document.querySelector('.wrapper');
const indicators = [...document.querySelectorAll('.indicators button')];

let currentTestimonial = 0; // Default 0

indicators.forEach((item, i) => {
    item.addEventListener('click', () => {
        indicators[currentTestimonial].classList.remove('active');
        wrapper.style.marginLeft = `-${100 * i}%`;
        item.classList.add('active');
        currentTestimonial = i;
    })
    
})
    

//Testimonial final
// if (window.location.pathname.includes("index.html"))
//      {
//         var testim = document.getElementById("testim");


//     testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
//     testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
//     testimleftArrow = document.getElementById("left-arrow"),
//     testimRightArrow = document.getElementById("right-arrow"),
//     testimSpeed = 4500,
//     currentSlide = 0,
//     currentActive = 0,
//     testimTimer
//     ;

  
// window.onload = function () {

//     // Testim Script
//     function playSlide(slide) {
//         for (var k = 0; k < testimDots.length; k++) {
//             testimContent[k].classList.remove("active");
//             testimContent[k].classList.remove("inactive");
//             testimDots[k].classList.remove("active");
//         }
//         if (slide < 0) {
//             slide = currentSlide = testimContent.length - 1;
//         }
//         if (slide > testimContent.length - 1) {
//             slide = currentSlide = 0;
//         }
//         if (currentActive != currentSlide) {
//             testimContent[currentActive].classList.add("inactive");
//         }
//         testimContent[slide].classList.add("active");
//         testimDots[slide].classList.add("active");

//         currentActive = currentSlide;

//         clearTimeout(testimTimer);
//         testimTimer = setTimeout(function () {
//             playSlide(currentSlide += 1);
//         }, testimSpeed)
//     }
//     testimleftArrow.addEventListener("click", function () {
//         playSlide(currentSlide -= 1);
//     })
//     testimRightArrow.addEventListener("click", function () {
//         playSlide(currentSlide += 1);
//     })

//     for (var l = 0; l < testimDots.length; l++) {
//         testimDots[l].addEventListener("click", function () {
//             playSlide(currentSlide = testimDots.indexOf(this));
//         })
//     }
//     playSlide(currentSlide);

// }
// }
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


//3
//login& register
(
    function()
    {
        let userList = JSON.parse(localStorage.getItem("userList")) || []; // Retrieve users from localStorage or initialize an empty array


        document.addEventListener("DOMContentLoaded", () => {  
            // setcookies("name","shrouk",1) 
            const accountBtns = document.querySelector("#account .account-buttons");
            const accountProfile = document.querySelector("#account #myaccount");
            var signInUser=getcookies("signInUser")//to know if user sign in or not if ==null not sign in else return user-email
            if(!signInUser){
                if(accountProfile && accountBtns)
                {
                    accountBtns.style.display="block"
                    accountProfile.style.display="none"
                }
            }
            else
            {
    
                if(accountProfile && accountBtns)
                    {
    
                        accountBtns.style.display="none"
                        accountProfile.style.display="flex"
                        const accountName=accountProfile.querySelector(".name-acc")
                        const accountEmail=accountProfile.querySelector(".email-acc")
                        const accountImg=accountProfile.querySelector(".img-acc")
                        var userInfo=JSON.parse(signInUser)
                        console.log(userInfo);
                        u=get_user_info(userInfo,userList)
                        accountName.innerText=u.name
                        accountEmail.innerText=u.email
                        accountImg.src=u.profile

    
                }
            }
        })
        //Register &login

    
        var signupInput=document.querySelector("#signup-btn")
        var signinInput=document.querySelector("#signin-btn")
        var userName=document.querySelector("#name")
        var emailInput=document.querySelector("#email")
        var passwordInput=document.querySelector("#password")
        var passwordConf=document.querySelector("#re-password")
        var profile_img=document.querySelector("#profile")

        // register
        if(signupInput)
        {
            signupInput.addEventListener("click", (e) => {
                
                e.preventDefault(); // Prevent form submission
                const user = {
                    name: userName.value.trim(),
                    email: emailInput.value.trim(),
                    password: passwordInput.value.trim(),
                    profile: "imgs/persons/unknown.png"
                };
                console.log(user);
                
                // Input validation
                if (validateInputs(user)) {
                    
                    // Check for duplicate email
                    if (userList.some(u => u.email.toLowerCase() === user.email.toLowerCase())) {
                        alert("Email already exists. Please use another email."); // Show duplicate error
                        return;
                    }
                    //check for confirming password
                    if(user.password!==passwordConf.value){
                        alert("the passwords dosn't match")
                        return
                    }
                    console.log(profile_img);
                    
                    if(profile_img.value)
                    {
                        var profile=profile_img.files[0]
                        console.log("upload profile_img");
                        console.log(profile.type);
                        
                        if(!profile.type.startsWith('image/'))
                        {
                            alert("please select an image file")
                            return
                        }
                        else{
                            const reader=new FileReader()
                            reader.onload= function(d){
                                debugger
                                const base64Image=d.target.result;
                                user.profile=base64Image;
                                userList.push(user); // Add new user to userList
                                localStorage.setItem("userList", JSON.stringify(userList)); // Save updated userList to localStorage
                                setcookies("signInUser",JSON.stringify(user.email),1/2)
                                // console.log("userin",getcookies('signInUser'))
                
                                alert("Registration successful!");
                                
                                clearInputs(); // Clear form inputs
                                console.log(window.location.href);
                                
                                var returnTo=getreturnpage()

                                window.location.href = returnTo
                            };
                            reader.readAsDataURL(profile);
                            return

                            
                        }

                    }
                    else{
                        userList.push(user); // Add new user to userList
                        localStorage.setItem("userList", JSON.stringify(userList)); // Save updated userList to localStorage
                        setcookies("signInUser",JSON.stringify(user.email),1)
                        // console.log("userin",getcookies('signInUser'))
        
                        alert("Registration successful!");
                        
                        clearInputs(); // Clear form inputs
                        console.log(window.location.href);
                        
                        var returnTo=getreturnpage()

                        window.location.href = returnTo
                        return

                    }
                    
                } 
                else
                    alert("Please fill out all fields correctly.");
            });
    
    
    
            
        }

        // login
        
        login(signinInput,userList)
       
        function getreturnpage(){
            const params = new URLSearchParams(window.location.search);
            return params.get('returnTo')||"index.html";
        }
        function validateInputs(user) {
            // Ensure all inputs are filled and passwords match
            
            return user.name && user.email && user.password && validEmail(user);
        }
        function validEmail(user){
            
            return /\S+@\S+\.\S+/.test(user.email)
        }
        function clearInputs() {
            // Clear all input fields
            userName.value = "";
            emailInput.value = "";
            passwordInput.value = "";
            passwordConf.value = "";
            document.getElementById("profile").value = "";
        }


        function login(signinInput,userList)
{
    if(signinInput)
        {
            signinInput.addEventListener("click", (e) => {
                let signned=false
                console.log("login clicked");
                
                e.preventDefault(); // Prevent form submission
                const registeredUser = {
                    email: emailInput.value.trim(),
                    password: passwordInput.value.trim(),
                };
                console.log(registeredUser);
                
                // Input validation
                //check correct email &pass    
                userList.forEach(u => {
                    if(u.email.toLowerCase() === registeredUser.email.toLowerCase() && u.password===registeredUser.password) {
                    setcookies("signInUser",JSON.stringify(u.email),1)
                    console.log("userin",getcookies('signInUser'))
                    alert("logined successful!");
                    var returnTo=getreturnpage()
                    signned=true
                    window.location.href = returnTo
                    return
                }
                   
                });
                if(!signned)
                {
                    emailInput.value="";
                    passwordInput.value = "";
                    alert("incrroct email or password");
                }

            });
    
    
    
            
        }

}

    }()
);

//4
//redirect to main page
(
    function(){
        signin_btn=document.querySelectorAll("a[href='login.html']")
        signup_btn=document.querySelectorAll("a[href='register.html']")

        
        if(signin_btn)
        {
            signin_btn.forEach(x => {
                x.addEventListener("click",function(e){

                e.preventDefault();
                if(window.location.pathname=="/register.html")
                {
                    const params = new URLSearchParams(window.location.search);
                    const returnTo = params.get('returnTo')||"index.html";
                    window.location.href = "login.html?returnTo="+returnTo
                }
                else
                    window.location.href="login.html?returnTo="+window.location.pathname
            });
        });
        }
        if(signup_btn)
        {
            signup_btn.forEach(x=> {
                x.addEventListener("click",function(e){
                e.preventDefault();
                
                if(window.location.pathname=="/login.html"){
                    const params = new URLSearchParams(window.location.search);
                    const returnTo = params.get('returnTo')||"index.html";
                    window.location.href = "register.html?returnTo="+returnTo
                }
                else
                    window.location.href="register.html?returnTo="+window.location.pathname
                });
            });
            console.log(window.location.href);
            
        }
    }()
);

//5
//account-card
(
    function(){
        acc_card=document.querySelector(".account-card")
        let userList = JSON.parse(localStorage.getItem("userList")) || []; // Retrieve users from localStorage or initialize an empty array
        var signInUser=getcookies("signInUser")//to know if user sign in or not if ==null not sign in else return user-email

        function accountcard(){

            prof=document.querySelector("#account")
            const profile_pos=prof.getBoundingClientRect()
            console.log(profile_pos);
            acc_card.style.top=profile_pos.bottom+10+"px"
            acc_card.style.right=(window.innerWidth-profile_pos.right)-50+"px"
            var card_name=acc_card.querySelector("#prof-name")
            var card_email=acc_card.querySelector("#prof-email")
            var card_img=acc_card.querySelector("img")
            
            if(signInUser){
            var user=get_user_info(JSON.parse(signInUser),userList)
            card_name.innerText=user.name
            card_email.innerText=user.email
            card_img.src=user.profile
            }
        }
        if(acc_card){
            var profile_btn=acc_card.querySelector("#view-profile")
            var signOut_btn=acc_card.querySelector("#signout")
            accountcard()
            window.addEventListener('resize',()=>{console.log("resized");
            accountcard()})
            var prof_img=prof.querySelector("img")

            prof_img.addEventListener("click",function(){
                if(acc_card.classList.contains("show-account"))
                {
                    acc_card.classList.add("hide-account")
                    setTimeout(()=>{
                    acc_card.classList.remove("show-account","hide-account")
                    },1000);
                }
                else{
                    acc_card.classList.add("show-account")
                }
            });
            window.addEventListener("scroll",function(){
                if(acc_card.classList.contains("show-account"))
                {
                    acc_card.classList.add("hide-account")
                    setTimeout(()=>{
                    acc_card.classList.remove("show-account","hide-account")
                    },1000);
                }
            });
             
            profile_btn.addEventListener("click",()=>window.location.href="profile.html")
            signOut_btn.addEventListener("click",()=>{setcookies("signInUser","",1);window.location.reload()})
        };
    }()
);


//6
//cookies

function setcookies(name, value, expirationHours) {
    const date = new Date();
    date.setTime(date.getTime() + (expirationHours * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    console.log(expires);
    console.log(name);
    console.log(value);
    
    
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
    // Note: You cannot restrict access to this file only via cookie settings.
}

function getcookies(searchedpropetry)
{
    var objects=document.cookie.split(";")
    for(var object of objects)
    {
        var cookie=object.split("=")
        var prop=cookie[0]
        var value=cookie[1]
        if(prop==searchedpropetry)
        {
            // console.log("is existing\n","propetry= "+prop+", value= "+value)
            return value
        }

    }
    return null
}

  
function get_user_info(user_mail,userList)
{
    var user={};
    userList.forEach(u => {
        if(u.email.toLowerCase() ===user_mail.toLowerCase() )
            user=u;
    });
    return user
}
