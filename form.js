document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault(); 

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let country = document.getElementById("country").value;

    let gender = "";
    let radios = document.getElementsByName("gender");

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            gender = radios[i].value;
        }
    }

    document.getElementById("output").innerHTML =
        "Name: " + name + "<br>" +
        "Email: " + email + "<br>" +
        "Gender: " + gender + "<br>" +
        "Country: " + country;
});