const signIn = document.getElementById('signin');
signIn.classList.add('signin_active');
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
    xhr.addEventListener('readystatechange', showData);
    xhr.send(formData);
    function showData(event) {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            if (data.success) {
                localStorage.userId = data.user_id;
                formDiv.classList.remove('signin_active');
                welcome.classList.add('welcome_active');
                userId.innerText = response.user_id;
            } else {
                alert('Неверный логин/пароль');
            }
        }
    }
}
function init() {
    if (localStorage.userId) {
        signIn.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
        userId.innerText = localStorage.userId;
    }
}
init();