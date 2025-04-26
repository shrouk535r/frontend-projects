
var enrolled_arr=[
    {course:'../imgs/course1',name:'Data science', result:0,expiration:'November 27, 2023 5:46 am',end_time:'-'},
    {course:'../imgs/course2',name:'Data engineer', result:0,expiration:'November 27, 2023 5:46 am',end_time:'-'},
    {course:'../imgs/course3', name:'Data anylsis', result:0,expiration:'November 27, 2023 5:46 am',end_time:'-'},


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

          //   //first check if signed in or not
          //  var signedinCoockie= getcookies("signInUser");       
          //  var user=get_user_info(JSON.parse(signInUser),userList)


          
          CardButton= event.target.id;
          CardDataCheck=event.target.dataset.check;
          cardNum=CardButton[CardButton.length-1]

          if(CardDataCheck==='false')
          {
            
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

}())




