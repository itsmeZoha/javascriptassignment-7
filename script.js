let userName = prompt("Please Enter your name to visit our website? ") 
window.onload = function(){
   let message ="Good Day"
//    let firstName = prompt("Please Enter Your First Name?")
//    let lastName = prompt("Please Enter Your Last Name?")
//    let fullName = firstName +" "+ lastName
   let banger ="!"
   document.getElementById("userName").innerHTML = message + " " + userName+ banger 
}
//---------------------if else Statement---------------------//
function ifElseStatement(){
   var  now = new Date()
   var today = now.getDay()
      // today = 4
   if(today === 0){
      alert("It's Sunday")
   }
   else if(today === 1){
      alert("It's Monday")
   }
   else if(today === 2){
      alert("It's Tuesday")
   }
   else if(today === 5){
      alert("It's Friday")
   }
   else{
      alert("It's some other day")
   }
}
//---------------------Switch Statements---------------------//
function switchStatement(){
   var  now = new Date()
   var today = now.getDay()
      today = 4
      switch(today){
         case 0:
            alert("It's Sunday")
            break;
         case 1:
            alert("It's Monday")
            break;
         case 2:
            alert("It's Tuesday")
            break;
         case 5:
            alert("It's Friday")
            break;
         default:
            alert("It's some other day")
      }
   }
//---------------------keep Asking The Name using While loop---------------------//
function keepAskingTheName(){
   do{
      var name = prompt("Enter your name")
      console.log(name)
   }while( name === null || name === "" || name.length < 3)                       // agr user cancel larta ha yah dubara name pouchy ga // 
                                       //is sy hecking bi ho jati ha jb hum while loop m koi bi condition na dy is sy wo brower cruh ho jye ga 
      result(name)

}
//show output
function result(name){
   return document.getElementById('output').innerHTML += name + "<br>"
}
//Clear output
function clearOutputButton(){
   document.getElementById('output').innerHTML = ""
}