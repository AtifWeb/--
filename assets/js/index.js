import {BoxesPopUp} from './PopUps.js'

let AdditionalButton=document.querySelector(".addtional-options");
let LargeButton=document.querySelector(".large-btn-form");
let CloseIcon=document.querySelector(".popup-content > img");
let popUpWrapper=document.querySelector(".popup");
let complete_btn=document.querySelector(".complete_btn")
let Cards=document.querySelectorAll(".cards-wrapper .card")
let PopUpInnerContent=document.querySelector(".inner-content")
let DynamicInput=""
let BurgerIcon=document.querySelector(".burger-icon");
let currentStep=1;


BurgerIcon.addEventListener("click",e=>{
    document.querySelector("header ul").classList.toggle("active")
})

const HandleShowDynaicPopup=(id)=>{

    PopUpInnerContent.innerHTML="";
    let RelatedObject=BoxesPopUp[id];
    let HTML=`
    <h1 class="submit-heading box-heading">${RelatedObject.heading}</h1>
    <p class="submit-first-para box-first-para">${RelatedObject.paragraph}</p>
    <div class="image-wrapper">
        <img src="./assets/img/${RelatedObject.image}.png" alt="">
    </div>
    `
    PopUpInnerContent.insertAdjacentHTML("beforeend",HTML);
    popUpWrapper.style.display='flex'

}

Cards.forEach(EachCard=>{
    EachCard.addEventListener("click",e=>HandleShowDynaicPopup(e.target.id))
})


complete_btn.addEventListener("click",e=>{
    e.preventDefault();
    popUpWrapper.style.display="flex"
})

CloseIcon.addEventListener("click",e=>{
    popUpWrapper.style.display="none"
})


LargeButton.addEventListener("click",e=>{
    e.preventDefault();
    e.target.style.display="none";


    document.querySelector(".bottom-level").style.display="block";

document.querySelector(".lines-bg").style.display="block";

})




AdditionalButton.addEventListener("click",(e)=>{
    let HTML=`
     <div class="input-wrapper dyanimic-input-wrapper">
                     
                       
                        <input type="text" placeholder="Адрес забора товара">
                    </div>
    
    `

    DynamicInput=document.querySelectorAll(".dyanimic-input-wrapper");
if( DynamicInput.length>2 ){
    e.target.classList.add("hidden")
    document.querySelector(".large-btn-form").classList.add("buttonMargin")
}




    e.target.insertAdjacentHTML("beforebegin",HTML);
})




setInterval(()=>{
   if(currentStep==7){
       currentStep=1;
       document.querySelector(".lines-start-area").style.opacity=0;
       document.querySelectorAll(".lines-start-area *").forEach(Each=>{
           Each.style.opacity=0;
       })
   }

   document.querySelector(`#step-${currentStep}`).style.opacity=1;
   currentStep++;
},1500)