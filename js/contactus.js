
function validateForm(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var organization = document.getElementById("organization").value;
    var adress = document.getElementById("adress1").value;
    var phone = document.getElementById("phone").value;
    var organizationUrl = document.getElementById("organization-url").value;
    var message = document.getElementById("msg").value;
    if (name.length === 0 || email.length === 0 || organization.length === 0 || adress.length === 0 || phone.length === 0){
        alert("Please fill all the required fields!")
        return false;
    }
    return true;
}