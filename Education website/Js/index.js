//0 
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



//1    
(
    function()
{
    document.addEventListener("DOMContentLoaded", () => {  
        // setcookies("name","shrouk",1) 
        let userList = JSON.parse(localStorage.getItem("userList")) || []; // Retrieve users from localStorage or initialize an empty array

        const accountBtns = document.querySelector("#account .account-buttons");
        const accountProfile = document.querySelector("#account #myaccount");
        var signInUser=getcookies("signInUser")
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
                    userList.forEach(u => {
                        if(u.email.toLowerCase() ===userInfo.toLowerCase() ) {
                    accountName.innerText=u.name
                    accountEmail.innerText=u.email
                    accountImg.src=u.profile
                    }
                });

                }
        }
       
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
        if(rightArrow&&leftArrow&&updateSlide){
            rightArrow.addEventListener("click", rotateLeft);
            leftArrow.addEventListener("click", rotateRight);
    
            updateSlide(); // Initialize carousel correctly
        }
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
    if(statisticsSection)
        observer.observe(statisticsSection);
    });
    


   
  
 
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
        //Register &login
    
    
    
        let userList = JSON.parse(localStorage.getItem("userList")) || []; // Retrieve users from localStorage or initialize an empty array
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
                                setcookies("signInUser",JSON.stringify(user.email),1/12)
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
                        setcookies("signInUser",JSON.stringify(user.email),1/12)
                        // console.log("userin",getcookies('signInUser'))
        
                        alert("Registration successful!");
                        
                        clearInputs(); // Clear form inputs
                        console.log(window.location.href);
                        
                        var returnTo=getreturnpage()

                        window.location.href = returnTo
                        return

                    }
                    
                } 
                alert("Please fill out all fields correctly.");
            });
    
    
    
            
        }

        // login
        if(signinInput)
            {
                signinInput.addEventListener("click", (e) => {
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
                        setcookies("signInUser",JSON.stringify(u.email),1/12)
                        console.log("userin",getcookies('signInUser'))
                        alert("logined successful!");
                        var returnTo=getreturnpage()

                        window.location.href = returnTo
                        return
                    }
                       
                    });
                    emailInput.value="";
                    passwordInput.value = "";
                    alert("incrroct email or password");

                });
        
        
        
                
            }

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
        function accountcard(){
            acc_card=document.querySelector(".account-card")
            prof=document.querySelector("#account")
            const profile_pos=prof.getBoundingClientRect()
            console.log(profile_pos);
        
            acc_card.style.top=profile_pos.bottom+10+"px"
            acc_card.style.right=(window.innerWidth-profile_pos.right)+5+"px"
        }
        accountcard()
        window.addEventListener('resize',()=>{console.log("resized");
         accountcard()})

         var prof_img=prof.querySelector("img")
         prof_img.addEventListener("click",function(){
            if(acc_card.classList.contains("show"))
            {
                acc_card.classList.add("hide")
                setTimeout(()=>{
                acc_card.classList.remove("show","hide")
                },1000);
            }
            else{
                acc_card.classList.add("show")
            }
         });
    }()
);






  
