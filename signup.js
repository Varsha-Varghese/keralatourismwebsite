let mob = document.getElementById("mob");
let emailid = document.getElementById("emailid");
let pwd1 = document.getElementById("pwd1");
let pwd2 = document.getElementById("pwd2");
let zipcode = document.getElementById("zipcode");
let strengthBadge = document.getElementById('StrengthDisp')

// The strong and weak password Regex pattern checker

let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')

function signupvalidate(){
    let mobnoc1 = /^[1-9]\d{2}-\d{3}-\d{4}$/;
    let mobnoc2 = /^[1-9]\d{2}\s\d{3}\s\d{4}$/;
    let mobnoc3 = /^[1-9]\d{2}\d{3}\d{4}$/;
    let mobnoc4 = /^[1-9]\d{2}\.\d{3}\.\d{4}/;
    
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
   //  let regexp2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
   while(zipcode.value.length > 6){
      alert("Zipcode value must be less than or equal to 6");
      zipcode.focus();
      return false;
   }
    while(emailid.value.trim()=="" || pwd1.value.trim()=="" || pwd2.value.trim()=="" || mob.value=="") {
       alert("fields cannot be empty");
       return false;
      }
   
    while(mobnoc1.test(mob.value)==false & mobnoc2.test(mob.value)==false & mobnoc3.test(mob.value)==false & mobnoc4.test(mob.value)==false){
        alert("Please enter a valid phone number!");
        mob.focus();
        return false;
      }
      while(regexp.test(emailid.value)==false){
         alert("Invalid email id");
         emailid.focus();
         return false;
         }
         while (strongPassword.test(pwd1.value)==false){
            alert("Please enter a strong password!");
            pwd1.focus();
            return false;
        }

         
      while (pwd1.value != pwd2.value){
         alert("Passwords must be same!");
         pwd2.focus();
         return false;
     }
}

function StrengthChecker(pwd1){
    if(strongPassword.test(pwd1.value)) {
        strengthBadge.style.backgroundColor = "green";
        strengthBadge.textContent = 'Strong';
    } else if(mediumPassword.test(pwd1.value)){
        strengthBadge.style.backgroundColor = 'orange';
        strengthBadge.textContent = 'Medium';
    } else{
        strengthBadge.style.backgroundColor = 'red';
        strengthBadge.textContent = 'Weak';
    }
}

