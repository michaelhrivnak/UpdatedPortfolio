window.onload = function(){            
    document.getElementsByTagName("main")[0].style.width = document.documentElement.offsetWidth - document.getElementById("menu").clientWidth+"px";
};
window.onresize = function(){
    document.getElementsByTagName("main")[0].style.width = document.documentElement.offsetWidth - document.getElementById("menu").clientWidth+"px";
}

document.getElementById("submit").onclick = sendEmail;

function sendEmail() {
    event.preventDefault();
    let fromName = document.getElementById("contactName").value;
    let fromAddress = document.getElementById("emailAddress").value;
    let userMessage = document.getElementById("messageBox").value;
    console.log(userMessage);
    if(userMessage == ""){
        alert("please enter a message");
    }else{
         
        Email.send({
        Host : 'smtp.gmail.com',
        Username : gmailACC,
        Password : gmailPW,
        //SecureToken : secTokenb,
        To : gmailTO,
        From : fromAddress,
        Subject : `Message from ${fromName}`,
        Body : userMessage,
        }).then(
            message => alert("mail sent successfully")
        );
    }
    
}