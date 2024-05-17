function matchpassword(){
    var firstpass=document.f1.password.value;
    var secondpass=document.f1.password2.value;
    if(firstpass==secondpass){
        alert("your password is correct❤❤❤");
        return true;
    }
    else{
        alert("password is incorrect!! please enter valid password");
        return false;
    }

}
       