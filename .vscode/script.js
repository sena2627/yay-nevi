const books = [
    { title: "İnce Memed", author: "Yaşar Kemal", genre: "Roman", pages: 436, price: 45 },
    { title: "Tutunamayanlar", author: "Oğuz Atay", genre: "Roman", pages: 724, price: 60 },
    { title: "Saatleri Ayarlama Enstitüsü", author: "Ahmet Hamdi Tanpınar", genre: "Roman", pages: 391, price: 50 },
    { title: "Kürk Mantolu Madonna", author: "Sabahattin Ali", genre: "Roman", pages: 177, price: 35 },
    { title: "Beyaz Gemi", author: "Cengiz Aytmatov", genre: "Roman", pages: 128, price: 30 },
    { title: "Devlet Ana", author: "Kemal Tahir", genre: "Tarih", pages: 863, price: 70 },
    { title: "Anayurt Oteli", author: "Yusuf Atılgan", genre: "Roman", pages: 175, price: 30 },
    { title: "Çalıkuşu", author: "Reşat Nuri Güntekin", genre: "Roman", pages: 412, price: 40 },
    { title: "Şeker Portakalı", author: "José Mauro De Vasconcelos", genre: "Roman", pages: 182, price: 35 },
    { title: "Kayıp Zamanın İzinde", author: "Marcel Proust", genre: "Roman", pages: 4215, price: 400 },
    { title: "Beyaz Kale", author: "Orhan Pamuk", genre: "Roman", pages: 160, price: 30 },
    { title: "O", author: "Ferit Edgü", genre: "Roman", pages: 95, price: 20 },
    { title: "İstanbul Hatırası", author: "Ahmet Ümit", genre: "Polisiye", pages: 560, price: 50 },
    { title: "Masumiyet Müzesi", author: "Orhan Pamuk", genre: "Roman", pages: 592, price: 60 },
    { title: "Aşk", author: "Elif Şafak", genre: "Roman", pages: 420, price: 45 },
    { title: "İlk Nurdan Sonra", author: "Ayşe Kulin", genre: "Roman", pages: 352, price: 40 },
    { title: "Siyah Süt", author: "Elif Şafak", genre: "Roman", pages: 300, price: 35 },
    { title: "Kuyucaklı Yusuf", author: "Sabahattin Ali", genre: "Roman", pages: 200, price: 25 },
    { title: "Yaban", author: "Yakup Kadri Karaosmanoğlu", genre: "Roman", pages: 260, price: 30 },
    { title: "Benim Adım Kırmızı", author: "Orhan Pamuk", genre: "Roman", pages: 416, price: 50 },
    { title: "Firarperest", author: "Elif Şafak", genre: "Deneme", pages: 246, price: 30 },
    { title: "Yolpalas Cinayeti", author: "Halide Edib Adıvar", genre: "Roman", pages: 276, price: 35 },
    { title: "Aylak Adam", author: "Yusuf Atılgan", genre: "Roman", pages: 188, price: 25 },
    { title: "Eylül", author: "Mehmet Rauf", genre: "Roman", pages: 216, price: 30 },
    { title: "Fikrimin İnce Gülü", author: "Adalet Ağaoğlu", genre: "Roman", pages: 310, price: 35 },
    { title: "Tuna Kılavuzu", author: "Vüs'at O. Bener", genre: "Öykü", pages: 160, price: 25 },
    { title: "Kar", author: "Orhan Pamuk", genre: "Roman", pages: 456, price: 50 },
    { title: "Huzur", author: "Ahmet Hamdi Tanpınar", genre: "Roman", pages: 442, price: 45 },
    { title: "Serenad", author: "Zülfü Livaneli", genre: "Roman", pages: 484, price: 50 },
    { title: "Baba ve Piç", author: "Elif Şafak", genre: "Roman", pages: 370, price: 40 },
    { title: "Leyla ile Mecnun", author: "Ali Şir Nevai", genre: "Mesnevi", pages: 232, price: 30 },
    { title: "Kafamda Bir Tuhaflık", author: "Orhan Pamuk", genre: "Roman", pages: 480, price: 55 },
    { title: "Yeşilçam Dedikleri Türkiye", author: "Atilla Dorsay", genre: "Sinema", pages: 368, price: 35 },
    { title: "Bir Bilim Adamının Romanı", author: "Oğuz Atay", genre: "Roman", pages: 320, price: 40 },
    { title: "Gülün Adı", author: "Umberto Eco", genre: "Roman", pages: 634, price: 60 },
    { title: "Yenişehir'de Bir Öğle Vakti", author: "Sevgi Soysal", genre: "Roman", pages: 272, price: 35 },
    { title: "Körlük", author: "José Saramago", genre: "Roman", pages: 336, price: 45 },
    { title: "Puslu Kıtalar Atlası", author: "İhsan Oktay Anar", genre: "Roman", pages: 250, price: 30 },
    { title: "Yaşar Ne Yaşar Ne Yaşamaz", author: "Aziz Nesin", genre: "Roman", pages: 282, price: 35 },
    { title: "Tatar Çölü", author: "Dino Buzzati", genre: "Roman", pages: 272, price: 35 }
];

const updateBookList = () => {
    const bookListDiv = document.getElementById('book-list');
    if (bookListDiv) {
        bookListDiv.innerHTML = '';

        books.forEach(book => {
            const bookDiv = document.createElement('div');
            bookDiv.classList.add('book-item');
            bookDiv.innerHTML = `
                <h3>${book.title}</h3>
                <p><strong>Yazar:</strong> ${book.author}</p>
                <p><strong>Tür:</strong> ${book.genre}</p>
                <p><strong>Sayfa Sayısı:</strong> ${book.pages}</p>
                <p><strong>Fiyat:</strong> ${book.price} TL</p>
                <button class="add-to-cart" data-book='${JSON.stringify(book)}'>Sepete Ekle</button>
            `;
            bookListDiv.appendChild(bookDiv);
        });
    } else {
        console.error('Element with ID "book-list" not found.');
    }
};

// Sepet güncelleme
const updateCartDisplay = () => {
    const cartList = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartList.innerHTML = '';
    let totalPrice = 0;

    if (cart.length > 0) {
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('book-item');
            cartItem.innerHTML = `
                <h3>${item.title}</h3>
                <p><strong>Yazar:</strong> ${item.author}</p>
                <p><strong>Fiyat:</strong> ${item.price} TL</p>
                <p><strong>Adet:</strong> ${item.quantity}</p>
                <button class="remove-from-cart" data-index="${index}">Sepetten Çıkar</button>
            `;
            cartList.appendChild(cartItem);
            totalPrice += item.price * item.quantity;
        });
    } else {
        cartList.innerHTML = '<p>Sepetiniz boş.</p>';
    }

    totalPriceElement.textContent = `Toplam: ${totalPrice} TL`;
};

// Sepete kitap ekleme
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart')) {
        const book = JSON.parse(e.target.getAttribute('data-book'));
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingBookIndex = cart.findIndex(item => item.title === book.title);

        if (existingBookIndex !== -1) {
            cart[existingBookIndex].quantity += 1;
        } else {
            book.quantity = 1;
            cart.push(book);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
    }
});

// Sepetten kitap çıkarma
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-from-cart')) {
        const index = parseInt(e.target.getAttribute('data-index'));
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
    }
});

// Arama motoru işlevi
const searchForm = document.getElementById('searchForm');
if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = document.getElementById('searchQuery').value.toLowerCase();
        const results = books.filter(book => book.title.toLowerCase().includes(query));
        const resultsDiv = document.getElementById('search-results');
        resultsDiv.innerHTML = '';

        if (results.length > 0) {
            results.forEach(book => {
                const bookDiv = document.createElement('div');
                bookDiv.classList.add('book-item');
                bookDiv.innerHTML = `
                    <h3>${book.title}</h3>
                    <p><strong>Yazar:</strong> ${book.author}</p>
                    <p><strong>Fiyat:</strong> ${book.price} TL</p>
                    <button class="add-to-cart" data-book='${JSON.stringify(book)}'>Sepete Ekle</button>
                `;
                resultsDiv.appendChild(bookDiv);
            });
        } else {
            resultsDiv.innerHTML = '<p>Stokta yok.</p>';
        }
    });
}

// Giriş yapma
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Kullanıcı doğrulama işlemi
        if (username && password) {
            localStorage.setItem('username', username);
            window.location.href = 'index.html';
        } else {
            alert('Kullanıcı adı ve şifre gerekli.');
        }
    });
}

// Hoş geldin mesajı
const welcomeMessageContainer = document.getElementById('welcome-message-container');
const welcomeMessage = document.getElementById('welcome-message');
const username = localStorage.getItem('username');
if (welcomeMessageContainer && welcomeMessage && username) {
    welcomeMessage.textContent = `${username}`;
} else if (welcomeMessageContainer) {
    welcomeMessageContainer.style.display = 'none';
}

// Üye olma sayfasına yönlendirme
const goToRegisterButton = document.getElementById('goToRegister');
if (goToRegisterButton) {
    goToRegisterButton.addEventListener('click', () => {
        window.location.href = 'uyeol.html';
    });
}

// Sayfa yüklendiğinde güncellemeleri yap
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('book-list')) {
        updateBookList();
    }
    if (document.getElementById('cart-items')) {
        updateCartDisplay();
    }
});