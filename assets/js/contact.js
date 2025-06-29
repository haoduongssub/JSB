let form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;

    let index = email.indexOf('@');
    if (index < 1 || email.indexOf('.', index) < 1) {
        alert('email không hợp lệ')
        return;
    }

    // validate phone
    if (phone.length < 10) {
        alert('Số điện thoại không hợp lệ');
        return;
    }
    
    alert("Gửi đi thành công");
});