let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
function loginvalidate(){
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    let regexp2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    while(email.value.trim()=="" || pwd.value.trim()=="") {
        alert("fields cannot be empty");
        return false;
     }
    if(regexp.test(email.value) & regexp2.test(pwd.value)){
        return true;    
    }
    else {
        alert("Invalid email id or password");
        return false;
    }
    
    
}
     
    
