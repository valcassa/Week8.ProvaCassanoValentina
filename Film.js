 
function subscribe() {
    let btnsubscribe = document.getElementById("btnsubscribe");
    let emailInput = document.getElementById("email").value;
    if (emailInput.value != null) {
        btnsubscribe.style.visibility = "visible";
    }
  
    localStorage.setItem('email',emailInput);

    if (emailInput != null)
        alert("Iscritto alla newsletter!")
}

function viewButton() {
    let emailInput = document.getElementById("email").value;
    let button = document.getElementById("subscribe");
    if (emailInput != "") {
        if (emailInput != "") {
            button.disabled = "";
        }
    }
}
function unscribe() {

    let emailStored = localStorage.getItem('email');
    let btnsubscribe = document.getElementByType("button");
    let btnunscribe = document.getElementByType("button");

    if (elementStored != null) {
        btnsubscribe.style.visibility = "no";
    }
    else if (emailInput.value != "email") {
        btnunscribe.style.visibility = "visible";
    }
}