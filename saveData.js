function saveFullName(){
    const fName=document.getElementById('fnameinput').value;
    const lName=document.getElementById('lnameinput').value;
    localStorage.setItem("fname",fName);
    localStorage.setItem("lname",lName);
  }
  function saveContacts(){
    const email=document.getElementById('email').value;
    const phoneNumber=document.getElementById('phone').value;
    const address=document.getElementById('address-input').value;
    const date=document.getElementById('DTP').value;
    localStorage.setItem("email",email);
    localStorage.setItem("phoneNumber",phoneNumber);
    localStorage.setItem("address",address);
    localStorage.setItem("date",date);
  }
  
  
  function showData(){
    const obj={
      fName:localStorage.getItem('fname'),
      lName:localStorage.getItem('lname'),
      email:localStorage.getItem('email'),
      phoneNumber:localStorage.getItem('phoneNumber'),
      address:0,
      date:localStorage.getItem('date'),
      dataProcessing:true,
      alertNotification:false
  
    };
    alert(localStorage.getItem('phoneNumber'));
    console.log(obj);
  }
