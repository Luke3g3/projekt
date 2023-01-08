
var users = ["admin", "Menne", "Niklas"];
var passwords = ["admin", "Lm2006", "Niklas123"];
var dashboard = ["dashboard-admin.html", "dashboard-menne.html", "dashboard-niklas.html"];


var userIn;
var passIn;

function login(){
    userIn = document.getElementById("userIn").value;
    passIn = document.getElementById("passIn").value;

   for(i = 0; i < users.length; i++){
    if(userIn == users[i]){
        var leng = i;
        console.log('index of user ' + leng);
        if(passIn == passwords[leng]){
            window.location = dashboard[leng];
            break;
        }
        
    }
   }
    
}
window.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {
        login();
    }
});
    


