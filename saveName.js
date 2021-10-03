function saveName(){
    const fName=document.getElementById('fnameinput').value;
    const lName=document.getElementById('lnameinput').value;
    localStorage.setItem("firstName",fName);
    localStorage.setItem("lastName",lName);
    return;
    }
    