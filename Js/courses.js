
var enrolled_arr=[
    {course:'',name:'data science', result:0,expiration:'November 27, 2023 5:46 am',end_time:'-'},
    {course:'',name:'data science', result:0,expiration:'November 27, 2023 5:46 am',end_time:'-'},
    {course:'', name:'data science', result:0,expiration:'November 27, 2023 5:46 am',end_time:'-'},

]
//Global variables
var CardButton;
var cardNum;
var cardNamevar; 
var ExpirationDate;
var temp;
// 
// need to check in enroll is he loged in?
// if true ->enroll
// if false->go to sign in
//return list of buttons
var buttonChoiseed=document.querySelectorAll(".enrolled-btn");

// console.log(buttonChoiseed)

buttonChoiseed.forEach(btn=>{

    btn.addEventListener(('click'),
    (event)=>{

          CardButton= event.target.id;
    
          cardNum=CardButton[CardButton.length-1]
    
          CardImg=document.querySelector(`#img${cardNum}`)
          cardName=document.querySelector(`#name${cardNum}`)
          ExpirationDate=new Date();
    
         fillData()
         enrolled_arr.push(tempObject);
         tempObject={}
         localStorage.setItem("courseinfo",JSON.stringify(enrolled_arr));
         btn.innerHTML='Enrolled'
         btn.style.backgroundColor = '#4CAF50';
         btn.style.color = 'white';            
         btn.disabled = true;          
        
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
      btn.disabled = true;          
    }
  })

})
enrolled_arr=[]
enrolled_arr=returnedCourses;

}())




