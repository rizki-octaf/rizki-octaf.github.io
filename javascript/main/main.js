// tooltip
let _ = '<br>'
let __ = '<br><br>'


// to top function
let top_button = document.getElementById('go_to-top-button');
let header_border = document.getElementById('header');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        top_button.style.display = "block";
    } else {
        top_button.style.display = "none";
    }
}

function topButton() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// send mail
function sendMail(){
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_zi783r2", "template_t1qrygb", params).then(function(res) {
        alert("Pesan anda telah terkirim!");
    })
    
}




