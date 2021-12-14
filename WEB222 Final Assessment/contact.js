function ValidateEmail(input) {
    if(document.getElementById(input).value == ""){
        document.getElementById("EmailError").innerHTML="Please enter Email address";
        return false;
    }
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if ( !document.getElementById(input).value.match(validRegex)) {
        document.getElementById("EmailError").innerHTML="Invalid email address!";
        return false;
    } 
    return true;
}
function onFormSubmit(){
    //document.getElementsByClassName("validation-error").innerHTML="";
    validateIfEmpty("fullName");
    ValidateEmail("Email");
    validateIfEmpty("Address");
    validateIfEmpty("City");
    validatePostalCode("PostalCode");
    
}

function validateIfEmpty(input){
    if(document.getElementById(input).value == ""){
        document.getElementById(input+"Error").innerHTML="Please enter "+input;
    }
}

function validatePostalCode(input){
    if(document.getElementById(input).value == ""){
        document.getElementById("PostalCodeError").innerHTML="Please enter Postal Code";
        return false;
    }
    var validRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    if ( !document.getElementById(input).value.match(validRegex)) {
        document.getElementById("PostalCodeError").innerHTML="Invalid postal code!";
        return false;
    } 
    document.getElementById("frmContact").submit();
    return true;
}

function popTextarea(){
    document.getElementById("txtHiring").style.display="none";
    document.getElementById("txtarea").style.display="block";
}

function popTextbox(){
    document.getElementById("txtarea").style.display="none";
    document.getElementById("txtHiring").style.display="block";
}
