 
function saveParams(){
const email=document.getElementById('email').value;
const phone=document.getElementById('phone').value;
const address=document.getElementById('address').value;
const date=document.getElementById('DTP').value;
localStorage.setItem("email",email);
localStorage.setItem("phone",phone);
localStorage.setItem("address",address);
localStorage.setItem("date",date);
return;
}

