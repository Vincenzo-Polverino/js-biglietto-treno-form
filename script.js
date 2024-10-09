console.log('ravanello');


const user_nameEl = document.querySelector('.user_name')
const user_kmEl = document.querySelector('.user_km')
const formEl = document.querySelector('.user_form')
const user_ageEl = document.querySelector('.user_age')
const resultEl = document.getElementById('result');


formEl.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(e.target.user_name.value,);
    console.log(e.target.user_km.value,'Km');
    console.log(e.target.user_age.value);

    const price_for_km = 0.21;
    let price = user_kmEl.value * price_for_km;



    if (user_ageEl.value == "minor") {

        price *= 0.8;
        discount_message = 'Biglietto Scontato (20%)';
        

    } else if (user_ageEl.value == "senior") {

        price *= 0.6;
        discount_message = 'Biglietto Scontato (40%)';

    }else{
    discount_message = 'Biglietto Standard';
    }

    resultEl.innerHTML = `
        <p>${user_nameEl.value}</p>
        <p>€${price.toFixed(2)}</p>
        <p>${discount_message}</p>`;

}

)
