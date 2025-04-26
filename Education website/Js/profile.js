
// var enrolled_arr=[
//     {course:'',name:'data science', result:0,expiration:'November 27, 2023 5:46 am',end_time:'-'},
//     {course:'',name:'data science', result:0,expiration:'November 27, 2023 5:46 am',end_time:'-'},
//     {course:'', name:'data science', result:0,expiration:'November 27, 2023 5:46 am',end_time:'-'},

// ]

(
  function(){
    var inprograss_arr=[{course:'',name:'data science', result:0,expiration:'November 27, 2023 5:46 am',end_time:'-'},
      {course:'',name:'data science', result:0,expiration:'November 27, 2023 5:46 am',end_time:'-'},
      {course:'',name:'data science', result:0,expiration:'November 27, 2023 5:46 am',end_time:'-'},
      {course:'',name:'data science', result:0,expiration:'November 27, 2023 5:46 am',end_time:'-'},
      {course:'',name:'data science', result:0,expiration:'November 27, 2023 5:46 am',end_time:'-'},
      {course:'',name:'data science', result:0,expiration:'November 27, 2023 5:46 am',end_time:'-'},

      ]
var finished_arr=
[{course:'',name:'data science', result:0,expiration:'November 27, 2023 5:46 am',end_time:'-'},
{course:'',name:'data science', result:0,expiration:'November 27, 2023 5:46 am',end_time:'-'},
{course:'',name:'data science', result:0,expiration:'November 27, 2023 5:46 am',end_time:'-'},
]

var passed_arr=
[{course:'',name:'data science', result:0,expiration:'November 27, 2023 5:46 am',end_time:'-'},
{course:'',name:'data science', result:0,expiration:'November 27, 2023 5:46 am',end_time:'-'},
{course:'',name:'data science', result:0,expiration:'November 27, 2023 5:46 am',end_time:'-'},
{course:'',name:'data science', result:0,expiration:'November 27, 2023 5:46 am',end_time:'-'},
{course:'',name:'data science', result:0,expiration:'November 27, 2023 5:46 am',end_time:'-'},
{course:'',name:'data science', result:0,expiration:'November 27, 2023 5:46 am',end_time:'-'},
{course:'',name:'data science', result:0,expiration:'November 27, 2023 5:46 am',end_time:'-'},
{course:'',name:'data science', result:0,expiration:'November 27, 2023 5:46 am',end_time:'-'},
{course:'',name:'data science', result:0,expiration:'November 27, 2023 5:46 am',end_time:'-'},

]

var failed_arr=[];

var myCoursesNumber=document.querySelector("#enrolledNum")
var inprograssNumber=document.querySelector("#inprograssNum")
var finishedNumber=document.querySelector("#finishedNum")
var passedNumber=document.querySelector("#passedNum")
var failedNumber=document.querySelector("#failedNum")

var getCourses=JSON.parse(localStorage.getItem('courseinfo'))
const enrolledTable = document.querySelector(".mycoursesList");
const inprograssTable = document.querySelector(".inprograssList");
const finishedTable = document.querySelector(".finishedList");
const passedTable = document.querySelector(".passedList");

(
function()
{
document.addEventListener("DOMContentLoaded", () => {

/***********************MyCourses***********************/

creatTable(enrolledTable,getCourses)
// creatTable()

/***********************Inprograss***********************/

creatTable(inprograssTable,inprograss_arr)
// creatTable()



/***********************finished***********************/
creatTable(finishedTable,finished_arr)
// creatTable()


/***********************Passed***********************/
creatTable(passedTable,passed_arr)
// creatTable()


/***********************switch sections***********************/
// debugger;
var temp= document.querySelectorAll('.options')
console.log(temp)
console.log(temp)

temp.forEach(te=>
{
console.log(te)

te.addEventListener('click',()=>
{

  // var section= ev.target;
    var split=te.id.split('-');
    
    var item=document.querySelectorAll('.op')

    item.forEach(it=>
    {
        it.style.display='none';

    })

    document.getElementById(split[0]).style.display='block';

})

}
)


/***********************Course Cards***********************/
myCoursesNumber.innerHTML=getCourses.length;
inprograssNumber.innerHTML=inprograss_arr.length;
finishedNumber.innerHTML=finished_arr.length;
passedNumber.innerHTML=passed_arr.length;
failedNumber.innerHTML=failed_arr.length;

})
}()
)

function creatTable(tableName,arrName)
{
tableName.innerHTML = ""; // Clear the table body
arrName.forEach((ele,i )=> {
var row = document.createElement("tr");

var courseCell = document.createElement("td");
courseCell.innerHTML = `<img src="${ele.course}" width=100px height=50px></img>`
var nameCell = document.createElement("td");
nameCell.innerText = ele.name;
var resultCell = document.createElement("td");
resultCell.innerText = ele.result;
var expCell = document.createElement("td");
expCell.innerText = ele.expiration ;
var deleteCell = document.createElement("td");

deleteCell.innerHTML = `<button style='padding:0px' >
<img style='width:25px;'  src='../imgs/cancel.png'></button>`;
deleteCell.addEventListener("click",()=>{
  deleteRow(i);
})

// console.log(ele.exprition_time)
// console.log(cardCell.innerText)
var endTime = document.createElement("td");
endTime.innerText = ele.end_time;

row.appendChild(courseCell);
row.appendChild(nameCell);
row.appendChild(resultCell);
row.appendChild(expCell);
row.appendChild(endTime);
row.appendChild(deleteCell);


tableName.appendChild(row);

});

}

function deleteRow(index)
{
getCourses.splice(index,1);
localStorage.setItem("courseinfo",JSON.stringify(getCourses));

creatTable(enrolledTable,getCourses)

}


  }()
)






// 
// need to check in enroll is he loged in?
// if yes ->enroll
// if no->go to sign in
// document.querySelector(".enrolled-btn").addEventListener(('click'),
// ()=>{
//       CardButton= this.id;
//       cardNum=CardButton[CardButton.length-1]
//       CardImg=document.querySelector('img${cardNum}')
//       cardName=document.querySelector('name${cardNum}')
//       ExpirationDate=new Date();

//      fillData()
//      enrolled_arr.push(tempObject);
//      localStorage.setItem("courseinfo",JSON.stringify(enrolled_arr));
//      // console.log(localStorage.getItem("userinfo"))
//      creatTable()

// })
// // check which button clicked

// enrollbtn.addEventListener(("click"),()=>{
//     //check if this accout is sigined in

//     //then
   
// })
// (
//   function()
//   {
//     document.addEventListener("DOMContentLoaded", () => {



//       var getCourses=JSON.parse(localStorage.getItem('courseinfo'))
//       // console.log(getCourses)
      
//       const userTable = document.querySelector(".mycoursesList");
//       console.log(userTable)
//       creatTable()
      
//     })







//     /***********************INPROGRASS***********************/
//     const inprograssTable = document.querySelector(".inprograssList");
//       console.log(inprograssTable)
//       creatTable()
//       function creatTable()
//       {
//         inprograssTable.innerHTML = ""; // Clear the table body
//         inprograss_arr.forEach((ele,i )=> {
//           var row = document.createElement("tr");
           
//             var nameCell = document.createElement("td");
//             nameCell.innerHTML = `<img src="${ele.course}" width=100px height=50px></img>`
//             var emailCell = document.createElement("td");
//             emailCell.innerText = ele.name;
//             var saveCell = document.createElement("td");
//             saveCell.innerText = ele.result;
//             var cardCell = document.createElement("td");
//             cardCell.innerText = ele.expiration ;
//             console.log(ele.exprition_time)
//             console.log(cardCell.innerText)
//             var endTime = document.createElement("td");
//             endTime.innerText = ele.end_time;
          
//             row.appendChild(nameCell);
//             row.appendChild(emailCell);
//             row.appendChild(saveCell);
//             row.appendChild(cardCell);
//             row.appendChild(endTime);
         
//             inprograssTable.appendChild(row);

//         });
      
//         }



// //          /***********************finished***********************/
// //     const finishedTable = document.querySelector(".finishedList");
// //     console.log(finishedTable)
// //     creatTable()
// //     function creatTable()
// //     {
// //       finishedTable.innerHTML = ""; // Clear the table body
// //       finished_arr.forEach((ele,i )=> {
// //         var row = document.createElement("tr");
         
// //           var nameCell = document.createElement("td");
// //           nameCell.innerHTML = `<img src="${ele.course}" width=100px height=50px></img>`
// //           var emailCell = document.createElement("td");
// //           emailCell.innerText = ele.name;
// //           var saveCell = document.createElement("td");
// //           saveCell.innerText = ele.result;
// //           var cardCell = document.createElement("td");
// //           cardCell.innerText = ele.expiration ;
// //           console.log(ele.exprition_time)
// //           console.log(cardCell.innerText)
// //           var endTime = document.createElement("td");
// //           endTime.innerText = ele.end_time;
        
// //           row.appendChild(nameCell);
// //           row.appendChild(emailCell);
// //           row.appendChild(saveCell);
// //           row.appendChild(cardCell);
// //           row.appendChild(endTime);
       
// //           finishedTable.appendChild(row);

// //       });
    
// //       }
    
// //       /***********************INPROGRASS***********************/
// //       const passedTable = document.querySelector(".passedList");
// //       console.log(passedTable)
// //       // creatTable()
// //       // function creatTable()
// //       // {
// //       //   passedTable.innerHTML = ""; // Clear the table body
// //       //   passed_arr.forEach((ele,i )=> {
// //       //     var row = document.createElement("tr");
            
// //       //       var nameCell = document.createElement("td");
// //       //       nameCell.innerHTML = `<img src="${ele.course}" width=100px height=50px></img>`
// //       //       var emailCell = document.createElement("td");
// //       //       emailCell.innerText = ele.name;
// //       //       var saveCell = document.createElement("td");
// //       //       saveCell.innerText = ele.result;
// //       //       var cardCell = document.createElement("td");
// //       //       cardCell.innerText = ele.expiration ;
// //       //       console.log(ele.exprition_time)
// //       //       console.log(cardCell.innerText)
// //       //       var endTime = document.createElement("td");
// //       //       endTime.innerText = ele.end_time;
          
// //       //       row.appendChild(nameCell);
// //       //       row.appendChild(emailCell);
// //       //       row.appendChild(saveCell);
// //       //       row.appendChild(cardCell);
// //       //       row.appendChild(endTime);
          
// //       //       passedTable.appendChild(row);

// //       //   });
      
// //       //   }






// //        
//   }()
// )


// var tempObject={}
//   function fillData()
// {

//   //course img
//     tempObject.course=CardImg.src
//   console.log(CardImg.src);

//   //course Name
//   tempObject.name=cardName.innerHTML;
//   console.log(cardName.innerHTML);

//   // course result
//   tempObject.result=0,  
  
//   //course expiration time
//   tempObject.expiration=ExpirationDate;
//   tempObject.end_time='-';

// }