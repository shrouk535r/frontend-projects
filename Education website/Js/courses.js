
var enrolled_arr=[
  {}
]
//Global variables
var CardButton;
var cardNum;
var cardNamevar; 
var ExpirationDate;
var temp;

var buttonChoiseed=document.querySelectorAll(".enrolled-btn");

buttonChoiseed.forEach(btn=>{

    btn.addEventListener(('click'),
    (event)=>{

           //first check if signed in or not
           var signedinCoockie= getcookies("signInUser"); 
           if (signedinCoockie) 
            {
              //  let data = JSON.parse(signedinCoockie);
           console.log(signedinCoockie);   
          //  let userList = JSON.parse(localStorage.getItem("userList")) || []; // Retrieve users from localStorage or initialize an empty array
          //  console.log(userList);   
          //  var user=get_user_info(JSON.parse(signedinCoockie),userList)
                 
          CardButton= event.target.id;
          CardDataCheck=event.target.dataset.check;
          cardNum=CardButton[CardButton.length-1]

          if(CardDataCheck==='false')
          {
            
            CardImg=document.querySelector(`#img${cardNum}`)
            cardName=document.querySelector(`#name${cardNum}`)
            ExpirationDate=new Date();
      
           fillData()
/////////////////////////////
           
           ///////////////////////////

           enrolled_arr.push(tempObject);
           tempObject={}
           localStorage.setItem("courseinfo",JSON.stringify(enrolled_arr));
           btn.innerHTML='Enrolled'
           btn.style.backgroundColor = '#4CAF50';
           btn.style.color = 'white';            
           event.target.dataset.check='true';      

          //  event.dataset.check='true';
          }
          else if(CardDataCheck==='true')
          {
            var returnedCourses=JSON.parse(localStorage.getItem("courseinfo"));

            returnedCourses.forEach((course,i)=>{
              
                // CardButton= btn.id;   
                cardNum=CardButton[CardButton.length-1]
                cardName=document.querySelector(`#name${cardNum}`);
                console.log(cardName)
            
                if(cardName.innerHTML==course.name)
                {
            
                  // btn.innerHTML='Enroll'
                  // btn.style.backgroundColor = '#4CAF50';
                  // btn.style.color = 'white';            
                  // btn.disabled = false;     
                  // btn.classList.add(".enrolled-btn")    
                  enrolled_arr.splice(i,1) ;          
                  localStorage.removeItem(course.name);
                  localStorage.setItem("courseinfo",JSON.stringify(enrolled_arr));

                  btn.innerHTML = 'Enroll';
                  btn.style.backgroundColor = ''; 
                  btn.style.color = '';           
                  event.target.dataset.check = 'false';  
                         
                }
            })
            
          }
        }    
      
      else 
        window.location.href = "login.html";
    })

})



 var tempObject={}
  function fillData()
{

  //course img
   tempObject.course=CardImg.src
   console.log(CardImg.src);
 
   //course Name
   tempObject.name=cardName.innerHTML;
   console.log(cardName.innerHTML);
 
   // course result
   tempObject.result=0,  
   
   //course expiration time
   tempObject.expiration=ExpirationDate;
   tempObject.end_time='-';
   


}

(function(){

  //when reload return enrolled courses
  var returnedCourses=JSON.parse(localStorage.getItem("courseinfo"));

  returnedCourses.forEach(course=>{
    console.log(course)
    buttonChoiseed.forEach(btn=>{
    CardButton= btn.id;   
    cardNum=CardButton[CardButton.length-1]
    cardName=document.querySelector(`#name${cardNum}`);
    console.log(cardName)

    if(cardName.innerHTML==course.name)
    {

      btn.innerHTML='Enrolled'
      btn.style.backgroundColor = '#4CAF50';
      btn.style.color = 'white';            
      // btn.disabled = true;          
    }
  })

})
enrolled_arr=[]
enrolled_arr=returnedCourses;

}()
)




// function getcookies(searchedpropetry)
// {
//     var objects=document.cookie.split(";")
//     for(var object of objects)
//     {
//         var cookie=object.split("=")
//         var prop=cookie[0]
//         var value=cookie[1]
//         if(prop==searchedpropetry)
//         {
//             // console.log("is existing\n","propetry= "+prop+", value= "+value)
//             return value
//         }

//     }
//     return null
// }
// function get_user_info(user_mail,userList)
//            {
//                var user={};
//                userList.forEach(u => {
//                    if(u.email.toLowerCase() ===user_mail.toLowerCase() )
//                        user=u;
//                });
//                return user
//            }


// var userNotCourse=JSON.parse(localStorage.getItem("userList"));
//  userNotCourse.push(enrolled_arr);
//  localStorage.setItem("userList",JSON.stringify("userNotCourse"));