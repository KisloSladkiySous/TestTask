let obj ={};
function saveCheckBox(){
    const datacheckbox=document.getElementById('datacheckbox').checked;
    const alertchecbox=document.getElementById('alertchecbox').checked;
    localStorage.setItem("datacheckbox",datacheckbox);
    localStorage.setItem("alertcheckbox",alertchecbox);
     obj={
        fname:localStorage.getItem("firstName"),
        lname:localStorage.getItem("lastName"),
        email:localStorage.getItem("email"),
        phone:localStorage.getItem("phone"),
        address:localStorage.getItem("address"),
        date:localStorage.getItem("date"),
        dataCB:localStorage.getItem("datacheckbox"),
        alertCB:localStorage.getItem("alertcheckbox")
        
    };
    show();
    return;
    }
   
    function show(){
        console.log(obj);
    }