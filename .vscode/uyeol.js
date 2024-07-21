document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('newUsername').value;
            const password = document.getElementById('newPassword').value;

            if (username && password) {
                // Kullanıcı kayıt işlemi
                localStorage.setItem('username', username);
                window.location.href = 'kullanicilar.html';
            } else {
                alert('Kullanıcı adı ve şifre gerekli.');
            }
        });
    }
});
