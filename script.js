console.log('ravanello');


const user_nameEl = document.querySelector('.user_name')
const user_kmEl = document.querySelector('.user_km')
const formEl = document.querySelector('.user_form')


formEl.addEventListener('submit', function(e) {
    e.preventDefault()
    console.log(e.target.user_name.value);
    console.log(e.target.user_km.value);
    console.log(e.target.user_age.value);
    
}
)
