const signIn = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const signinBtn = document.getElementById('signin__btn');
const userId = document.getElementById('user_id');
signinBtn.addEventListener('click', sendForm);
function sendForm(event) {
    event.preventDefault();
    const form = document.getElementById('signin__form');
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.addEventListener('load', showData);
  xhr.responseType = 'json';
    xhr.send(formData);
    function showData() {
    let xhrAnswer = xhr.response;
    let id = xhrAnswer.user_id
        // if (xhr.status === 200) {
            // const data = JSON.parse(xhr.responseText);
            if (xhrAnswer.success) {
                localStorage.setItem('user_id', id);
                signIn.classList.remove('signin_active');
                welcome.classList.add('welcome_active');
                userId.innerText = id;
            } else {
                alert('Неверный логин/пароль');
            }
        }
    }
// }
function init() {
    if (localStorage.getItem('user_id')) {
        signIn.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
        userId.innerText = localStorage.getItem('user_id');
    }
}
init();