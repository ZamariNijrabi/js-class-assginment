// user login function
 function  login() {
    // this user name regular user name
     var validEamil = new RegExp("[A-z][A-z0-9]{5,32}@[A-z][A-z0-9]{2,4}.[A-z]{2,5}");
    // this is the of regular exp
    //user name
    var username = document.getElementById('username').value;
 //   password
     var password = document.getElementById('password').value;
 //    passwrod length
     var passwordLength =  password.length;
     // user name length
     var usernameLength = username.length;

     var isInforValid = true;
     //check if info is valid
     if(username =='zamari@gmail.com' && password == 'secret' ){
         window.location.assign('HomePage.html');
     }
     else if(username !='zamari@gmail.com' )
     {
         document.getElementById("error1").innerText ="Invalid user name";
         document.getElementById("username").style.border = "1px solid red";
         isInforValid =  false;
     }
     else if(username == "")
     {
         document.getElementById("error1").innerText = "Please Enter username king";
         document.getElementById("username").style.border = "1px solid red";
         isInforValid =  false;

     }
     else if(username.length < 12)
     {
         document.getElementById("error1").innerText = "Please enter at lest 12 charecter!!";
         document.getElementById("username").style.border = "1px solid red";
         isInforValid =  false;
     }
     if(password < 3)
     {
         document.getElementById("error2").innerText = "Please Enter at lest 3 character";
         document.getElementById("password").style.border = "1px solid red"
         isInforValid =  false;
     }
     else if(password.length =="" && password== 'secret')
     {
         document.getElementById("error2").innerText = "Please enter Password!!";
         isInforValid =  false;
     }
     else if(password != 'secret'){
         document.getElementById("error2").innerText = "Invalid password!!";
     }
     else
     {
         document.getElementById("warning").innerText == "You are not registred";
     }




     window.setTimeout(hideSpan,4000);

 }
// this function to reset text boxes
//and this some commentgi
function  hideSpan()
{
   document.getElementById("userndame").value = "";
    document.getElementById("password").value = "";
    document.getElementById("error1").innerHTML = "";
    document.getElementById("error2").innerHTML = "";
    document.getElementById("username").style.border = "";
    document.getElementById("password").style.border = ""
   /*document.getElementById("username").style.border = "1px solid black";
    document.getElementById("password").style.border = "1px solid black";*/
}
