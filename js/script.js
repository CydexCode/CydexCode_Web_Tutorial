import { Tutorials } from "../Data/Tutorials.js"
import { References } from "../Data/References.js"
import { Exercises } from "../Data/Exercises.js"


//store mobile content
let mobileTutorialContent = ''
let mobileReferencesContent = ''
let mobileExercisesContent = ''

//section mobile btn
let MenuBtnMobileEl = document.getElementById("menu-btn-mobile")
let MenuBtnMobileElOpenBoolen = false
let mobileMenuNavE1 = document.getElementById("mobile-menu-nav")
let HomePage = document.getElementById("homePage")

MenuBtnMobileEl.addEventListener("click",()=>{
    if(MenuBtnMobileElOpenBoolen)
    {
        //mobileMenuNavE1.style.display = "none"
        mobileMenuNavE1.classList.remove("mobile-menu-nav-hidden")
        MenuBtnMobileElOpenBoolen = false
        HomePage.classList.remove("homePage-hidden")
    }
    else
    {
        //mobileMenuNavE1.style.display = "block"
        mobileMenuNavE1.classList.add("mobile-menu-nav-hidden")
        MenuBtnMobileElOpenBoolen = true
        HomePage.classList.add("homePage-hidden")
    }
    
})

let mobileNavCloseE1 = document.getElementById("mobile-nav-close")

mobileNavCloseE1.addEventListener("click",()=>{
    {
        //mobileMenuNavE1.style.display = "none"
        mobileMenuNavE1.classList.remove("mobile-menu-nav-hidden")
        MenuBtnMobileElOpenBoolen = false
        HomePage.classList.remove("homePage-hidden")
    }
    
})



  



//**********************Tutorial-btn****************** */

const NestedNavigationContainer = document.getElementById("nested-navigation-container_id");
let TutorialE1 = document.getElementById("Tutorial-btn");
const nestedNavigationCloseBtn = document.getElementById("nested-navigation-close-Btn");

let isDarkMode = false;

TutorialE1.addEventListener("click",toggleTutorial)
nestedNavigationCloseBtn.addEventListener("click",closeMenuContent)

//close menu content
function closeMenuContent(){
    NestedNavigationContainer.classList.toggle("nested_navigation_hidden");
    //Tutorial
    TutorialE1.classList.remove("bg-black");
    TutorialE1.classList.remove("text-white");
    // isDarkMode = !isDarkMode;   // Toggle the text color directly
    // TutorialE1.style.color = isDarkMode ? 'white' : 'black';
    //Reference
    referencesBtnE1.classList.remove("bg-black");  
    referencesBtnE1.classList.remove("text-white");
    // isDarkMode = !isDarkMode;// Toggle the text color directly
    // referencesBtnE1.style.color = isDarkMode ? 'white' : 'black';

    //exeremove
    exercisesBtnE1.classList.remove("bg-black");  
    exercisesBtnE1.classList.remove("text-white");
}

function toggleTutorial(){
    TutorialE1.classList.toggle("bg-black");
// Toggle the text color directly
// isDarkMode = !isDarkMode;
// TutorialE1.style.color = isDarkMode ? 'white' : 'black';
TutorialE1.classList.toggle("text-white");

NestedNavigationContainer.classList.remove("nested_navigation_hidden")

tutorialMenuDisplayAll()
referencesBtnE1.classList.remove("bg-black");  
referencesBtnE1.classList.remove("text-white");
// isDarkMode = !isDarkMode;// Toggle the text color directly
// referencesBtnE1.style.color = isDarkMode ? 'white' : 'black';

//exeremove
exercisesBtnE1.classList.remove("bg-black");  
exercisesBtnE1.classList.remove("text-white");

}

/**************Tutorial Data************* */
/***************************** */
let nestedNavigationContainerContentID = document.getElementById("nested-navigation-container-contentID")


function resetTutorial(){
    nestedNavigationHeading = ''
    nestedNavigationTab1 = ''
    nestedNavigationTab2 = ''
    nestedNavigationTab3 = ''
    nestedNavigationTab4 = ''
}

let nestedNavigationHeading = ''
let nestedNavigationTab4 = ''
let nestedNavigationTab1 = ''
let nestedNavigationTab2 = ''
let nestedNavigationTab3 = ''

/***************************** */



// const simple = `
// <div class="nested-navigation-container_Content_data">
//                 <div class="nested-navigation_item">
//                     <h2>HTML and CSS</h2>
//                     <a href="">Learn HTML</a>
//                     <a href="">Learn CSS</a>
//                     <a href="">Learn RWD</a>
//                 </div>
//                 <div class="nested-navigation_item">
//                     <h2>JavaScript</h2>
//                     <a href="">Learn JS</a>
//                     <a href="">Learn JQuery</a>
//                     <a href="">Learn React</a>
//                 </div>
//                 <div class="nested-navigation_item">
//                     <h2>Server Side</h2>
//                     <a href="">Learn SQL</a>
//                     <a href="">Learn mySQL</a>
//                     <a href="">Learn PHP</a>
//                 </div>
//                 <div class="nested-navigation_item">
//                     <h2>Data Analytics</h2>
//                     <a href="">Learn AI</a>
//                     <a href="">Learn ML</a>
//                     <a href="">Learn DAta Science</a>
//                 </div>
//             </div>
// `



/*****************mobile tutorial menu**********/
const tutorialMenuLinkMobileE1 = document.getElementById("tutorial_menuLink_mobile")
let TutorialMenuMobileE1 = document.getElementById("Tutorial_menu_mobile")

tutorialMenuLinkMobileE1.addEventListener("click",()=>{
    tutorialMenuDisplayAll()
    let tutorialMenuTab_Mobile =  mobileTutorialContent 

   tutorialMenuLinkMobileE1.classList.toggle("mobile_menu_Active")
   TutorialMenuMobileE1.classList.toggle("mobile_menuActive_tutorial")

   TutorialMenuMobileE1.innerHTML = tutorialMenuTab_Mobile
})

/*****************reference  menu**********/
const referencesMenuLinkMobileE1 = document.getElementById("references_menuLink_mobile")
let referencesMenuMobileE1 = document.getElementById("references_menu_mobile")

referencesMenuLinkMobileE1.addEventListener("click",()=>{
    referenceContent()
    let referencesMenuTab_Mobile =  mobileReferencesContent 

    referencesMenuLinkMobileE1.classList.toggle("mobile_menu_Active")
    referencesMenuMobileE1.classList.toggle("mobile_menuActive_tutorial")

    referencesMenuMobileE1.innerHTML = referencesMenuTab_Mobile
})

/*****************mobile exercises menu**********/
const exercisesMenuLinkMobileE1 = document.getElementById("exercises_menuLink_mobile")
let exercisesMenuMobileE1 = document.getElementById("exercises_menu_mobile")

exercisesMenuLinkMobileE1.addEventListener("click",()=>{
    ExerciseContent()
    let exercisesMenuTab_Mobile = mobileExercisesContent 

   exercisesMenuLinkMobileE1.classList.toggle("mobile_menu_Active")
   exercisesMenuMobileE1.classList.toggle("mobile_menuActive_tutorial")

   exercisesMenuMobileE1.innerHTML = exercisesMenuTab_Mobile
})

function tutorialMenuDisplayAll(){
    //heading
nestedNavigationHeading =`<h1>${Tutorials.name}</h1>`

//sub menu
//1
nestedNavigationTab1 =`<h2>${Tutorials.Dsa.name}</h2>` 
 Tutorials.Dsa.menu.forEach(el =>{
    nestedNavigationTab1 += `<a href="${el.link}">${el.title}</a>`
})
// nestedNavigationTab1 +=`<h2>${Tutorials.WebBuilding.name}</h2>` 
//  Tutorials.WebBuilding.menu.forEach(el =>{
//     nestedNavigationTab1 += `<a href="${el.link}">${el.title}</a>`
// })
//4
nestedNavigationTab1 +=`<h2>${Tutorials.ServerSide.name}</h2>` 
Tutorials.ServerSide.menu.forEach(el =>{
    nestedNavigationTab1 += `<a href="${el.link}">${el.title}</a>`

})

//2
nestedNavigationTab2 =`<h2>${Tutorials.WebDev.name}</h2>` 
 Tutorials.WebDev.menu.forEach(el =>{
    nestedNavigationTab2 += `<a href="${el.link}">${el.title}</a>`
})

//3
nestedNavigationTab3 =`<h2>${Tutorials.MLandDS.name}</h2>` 
Tutorials.MLandDS.menu.forEach(el =>{
    nestedNavigationTab3 += `<a href="${el.link}">${el.title}</a>`

})



    //render all the menu
nestedNavigationContainerContentID.innerHTML = `
${nestedNavigationHeading}
<div class="nested-navigation-container_Content_data">
  <div class="nested-navigation_item">
     
       ${nestedNavigationTab1}
  </div>
  <div class="nested-navigation_item">
     
        ${nestedNavigationTab2}
 </div>
<div class="nested-navigation_item">
    
       ${nestedNavigationTab3}
 </div>
 <div class="nested-navigation_item">

     ${nestedNavigationTab4}
</div>
</div> `
 mobileTutorialContent = nestedNavigationHeading + nestedNavigationTab1 + nestedNavigationTab2 + nestedNavigationTab3 + nestedNavigationTab4 


}


//****************References section js************ */

let referencesBtnE1 = document.getElementById("references-btn")

referencesBtnE1.addEventListener("click",()=>{

    referencesBtnE1.classList.toggle("bg-black");  
    referencesBtnE1.classList.toggle("text-white");
    // Toggle the text color directly
    // isDarkMode = !isDarkMode;
    // referencesBtnE1.style.color = isDarkMode ? 'white' : 'black';
    
    NestedNavigationContainer.classList.remove("nested_navigation_hidden");

    referenceContent()
    resetTutorial()
       //Tutorial
       TutorialE1.classList.remove("bg-black");
       TutorialE1.classList.remove("text-white");
       // isDarkMode = !isDarkMode;   // Toggle the text color directly
       // TutorialE1.style.color = isDarkMode ? 'white' : 'black';
   
       //exeremove
       exercisesBtnE1.classList.remove("bg-black");  
       exercisesBtnE1.classList.remove("text-white");

       referenceContent()
})


function referenceContent(){
   resetTutorial()
        //heading
nestedNavigationHeading = `<h1>${References.name}</h1>`

//sub menu
//1
nestedNavigationTab1 =`<h2>${References.Dsa.name}</h2>` 
 References.Dsa.menu.forEach(el =>{
    nestedNavigationTab1 += `<a href="${el.link}">${el.title}</a>`
})
//4
nestedNavigationTab1 +=`<h2>${References.ServerSide.name}</h2>` 
References.ServerSide.menu.forEach(el =>{
    nestedNavigationTab1 += `<a href="${el.link}">${el.title}</a>`

})

//2
nestedNavigationTab2 =`<h2>${References.WebDev.name}</h2>` 
 References.WebDev.menu.forEach(el =>{
    nestedNavigationTab2 += `<a href="${el.link}">${el.title}</a>`

})

//3
nestedNavigationTab3 =`<h2>${References.MLandDS.name}</h2>` 
References.MLandDS.menu.forEach(el =>{
    nestedNavigationTab3 += `<a href="${el.link}">${el.title}</a>`

})



    //render all the menu
nestedNavigationContainerContentID.innerHTML = `
${nestedNavigationHeading}
<div class="nested-navigation-container_Content_data">
  <div class="nested-navigation_item">
     
       ${nestedNavigationTab1}
  </div>
  <div class="nested-navigation_item">
     
        ${nestedNavigationTab2}
 </div>
<div class="nested-navigation_item">
    
       ${nestedNavigationTab3}
 </div>
 <div class="nested-navigation_item">

     ${nestedNavigationTab4}
</div>
</div> `

mobileReferencesContent = nestedNavigationHeading + nestedNavigationTab1 + nestedNavigationTab2 + nestedNavigationTab3 + nestedNavigationTab4 

resetTutorial()
}

//exercises-btn

let exercisesBtnE1 = document.getElementById("exercises-btn")

exercisesBtnE1.addEventListener("click",()=>{
    exercisesBtnE1.classList.toggle("bg-black");  
    exercisesBtnE1.classList.toggle("text-white");
    // Toggle the text color directly
    // isDarkMode = !isDarkMode;
    // referencesBtnE1.style.color = isDarkMode ? 'white' : 'black';
    
    NestedNavigationContainer.classList.remove("nested_navigation_hidden");

    //Tutorial
    TutorialE1.classList.remove("bg-black");
    TutorialE1.classList.remove("text-white");
    // isDarkMode = !isDarkMode;   // Toggle the text color directly
    // TutorialE1.style.color = isDarkMode ? 'white' : 'black';
    //Reference
    referencesBtnE1.classList.remove("bg-black");  
    referencesBtnE1.classList.remove("text-white");
    // isDarkMode = !isDarkMode;// Toggle the text color directly
    // referencesBtnE1.style.color = isDarkMode ? 'white' : 'black';

    ExerciseContent()
    
})

function ExerciseContent(){
    resetTutorial()
    //heading
nestedNavigationHeading =`<h1>${Exercises.name}</h1>`

//sub menu
//1
nestedNavigationTab1 =`<h2>${Exercises.Dsa.name}</h2>` 
Exercises.Dsa.menu.forEach(el =>{
nestedNavigationTab1 += `<a href="${el.link}">${el.title}</a>`
})
//4
nestedNavigationTab1 +=`<h2>${Exercises.ServerSide.name}</h2>` 
Exercises.ServerSide.menu.forEach(el =>{
nestedNavigationTab1 += `<a href="${el.link}">${el.title}</a>`

})

//2
nestedNavigationTab2 =`<h2>${Exercises.WebDev.name}</h2>` 
Exercises.WebDev.menu.forEach(el =>{
nestedNavigationTab2 += `<a href="${el.link}">${el.title}</a>`

})

//3
nestedNavigationTab3 +=`<h2>${Exercises.MLandDS.name}</h2>` 
Exercises.MLandDS.menu.forEach(el =>{
nestedNavigationTab3 += `<a href="${el.link}">${el.title}</a>`

})



//render all the menu
nestedNavigationContainerContentID.innerHTML = `
${nestedNavigationHeading}
<div class="nested-navigation-container_Content_data">
<div class="nested-navigation_item">
 
   ${nestedNavigationTab1}
</div>
<div class="nested-navigation_item">
 
    ${nestedNavigationTab2}
</div>
<div class="nested-navigation_item">

   ${nestedNavigationTab3}
</div>
<div class="nested-navigation_item">

 ${nestedNavigationTab4}
</div>
</div> `

mobileExercisesContent = nestedNavigationHeading + nestedNavigationTab1 + nestedNavigationTab2 + nestedNavigationTab3 + nestedNavigationTab4 

resetTutorial()
}

/**************************************************************** */

const htmlCode = `
<!DOCTYPE html>
   <html>
   <head>
   <title>HTML Tutorial</title>
     </head>
     <body>

      <h1>This is a heading</h1>
      <p>This is a paragraph.</p>
       
      </body>
      </html> 
`
let htmlCodeE1 = document.getElementById("htmlCode").innerText = htmlCode


const cssCode = `
body {
    background-color: lightblue;
  }
  
  h1 {
    color: white;
    text-align: center;
  }
  
  p {
    font-family: verdana;
  }
`
let cssCodeE1 = document.getElementById("cssCode").innerText = cssCode

const jsCode = `
<button onclick="myFunction()">Click Me!</button>

<script>
function myFunction() {
  let x = document.getElementById("demo");
  x.style.fontSize = "25px";
  x.style.color = "red";
}
</script>
`
let jsCodeE1 = document.getElementById("jsCode").innerText = jsCode





