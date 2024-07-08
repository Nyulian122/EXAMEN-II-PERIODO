document.addEventListener('DOMContentLoaded', (event) => {
 
    var formModal = document.getElementById("myModal");
    var dataModal = document.getElementById("dataModal");

    
    var btn = document.querySelector(".boton1");

    
    var spans = document.getElementsByClassName("close");

    
    btn.onclick = function() {
        formModal.style.display = "block";
    }


    for (var i = 0; i < spans.length; i++) {
        spans[i].onclick = function() {
            formModal.style.display = "none";
            dataModal.style.display = "none";
        }
    }


    window.onclick = function(event) {
        if (event.target == formModal || event.target == dataModal) {
            formModal.style.display = "none";
            dataModal.style.display = "none";
        }
    }


    var form = document.getElementById("userForm");
    form.onsubmit = function(event) {
        event.preventDefault();

        var fullName = document.getElementById("fullname").value;
        var email = document.getElementById("email").value;

        document.getElementById("displayName").textContent = fullName;
        document.getElementById("displayEmail").textContent = email;

        formModal.style.display = "none";
        dataModal.style.display = "block";
    }
});
