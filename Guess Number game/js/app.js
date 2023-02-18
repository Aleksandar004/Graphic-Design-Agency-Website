let dugme = document.getElementById('submit-btn');
let poruka = document.getElementById('poruka');
let formula = Math.floor(Math.random() * 15) + 1;

let forma = document.getElementById('guessing-form');

dugme.addEventListener('click', function() {
    let unos = document.getElementById('number-input').value;
    if (unos > formula) {
        poruka.innerHTML = " Woooah, this number is too big, try 1 or 2 less...";
    }
    else if(unos < formula) {
        poruka.innerHTML = "Nah, this number is too small!";

    }
    if (unos == formula){
        poruka.innerHTML = "Well done, you guessed the number! (:";
        let reset = document.getElementById('resetbtn');
        forma.classList.add("hidden");
        reset.classList.remove("hidden");

    }

})