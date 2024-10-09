console.log('ravanello');


const user_nameEl = document.querySelector('.user_name')
const user_kmEl = document.querySelector('.user_km')
const formEl = document.querySelector('.user_form')
const user_ageEl = document.querySelector('.user_age')


formEl.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(e.target.user_name.value);
    console.log(e.target.user_km.value);
    console.log(e.target.user_age.value);

    const price_for_km = 0.21;
    let price = user_kmEl * price_for_km;



    if (user_ageEl.value == 'Minorenne') {

        price = price * 0.8;

    } else if (user_ageEl.value == "Anziano") {

        price = price * 0.6;

    }

    console.log(price.toFixed(2));
     

}
    
)
