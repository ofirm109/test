function sub() {
    var email = (document.getElementById("email").value).toString();
    var name = (document.getElementById("name").value).toString();
    var message = (document.getElementById("message").value).toString();

    if (name == "") {
        alert("enter your name");
    } else if (validateEmail(email) == false) {
        alert("enter your email");
    } else if (message == "") {
        alert("enter message");
    } else {
        alert("the message has been sent");
    }
    
}

function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}