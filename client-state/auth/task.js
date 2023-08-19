const signIn = document.getElementById('signin');
if (localStorage.user_id) {
    document.getElementById('user_id').textContent = localStorage.user_id;
    document.getElementById('welcome').classList.add('welcome_active');
} 
else {
    signIn.classList.add('signin_active');
    const formName = document.getElementById('signin__form');
    const submitBtn = document.getElementById('signin__btn');
    submitBtn.addEventListener('click', () => {
        Event.preventDefault();
        const formData = new FormData(formName);
        const request = new XMLHttpRequest();
        request.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
        request.addEventListener('readystatechange', function() {
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(this.responseText); 
            if (data.success === true) {    
                localStorage.setItem('user_id', data.user_id);
                document.getElementById('user_id').textContent = data.user_id;
                signIn.classList.remove('signin_active');
                document.getElementById('welcome').classList.add('welcome_active');
            } 
            else {
                alert('Неверный логин/пароль');
            }
        };
        });
        request.send(formData);
    });
}