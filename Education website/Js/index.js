
var star=document.querySelectorAll('i')

for(let i=0;i<star.length;i++)
{

    star[i].addEventListener('click',function(){
        const k=i;
        console.log(k)
      if(this.classList.contains("addblack"))
      {
      
          for(let j=0;j<=i;j++)
          {
            if (j <= i) {
                star[j].classList.add('addyellow');
                star[j].classList.remove('addblack');
                console.log(star[j])
            }
            else
            {
                star[j].classList.remove('addyellow');
                star[j].classList.remove('addblack'); 
            } 
          }
          

      }
      else
      {
        for(let j=0;j<=star.length;j++)
            {
              if (j <= i) {
                  star[j].classList.remove("addyellow");
                star[j].classList.add("addblack");
                }
                else
                {
                    star[j].classList.remove('addyellow');
                star[j].classList.add('addblack');
                }
            }
              
      }
      
    })
  
}

const grade=80
switch(grade)
{
  case grade>90 &&grade<=100:
  console.log('a+');
  break;
  case grade>80:
  console.log('a');
  break;
  case grade>70:
  console.log('b');
  break;
  default:
  console.log('hi');
}