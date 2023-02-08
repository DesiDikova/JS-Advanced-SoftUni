function deleteByEmail() {
    let inputEmailElement = document.querySelector('input[name="email"]');
    let resultElement = document.getElementById('result');
    let emailElements = document.querySelectorAll('tr td:nth-of-type(2)');
    
    for (let email of emailElements) {
        if (email.textContent === inputEmailElement.value) {
            email.parentNode.remove();
            resultElement.textContent = 'Deleted.';
        } else {
            resultElement.textContent = 'Not found.';
        } 
    } 
}