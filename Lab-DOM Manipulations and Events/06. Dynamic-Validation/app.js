function validate() {

    let pattern = /^[a-z]+\@[a-z]+\.[a-z]+$/gm
    let inputEmailElement = document.getElementById('email');
    inputEmailElement.addEventListener('change', validEmail);

    function validEmail(e) {
        if (!pattern.test(e.target.value)) {
            e.target.classList.add('error');
        } else {
            e.target.classList.remove('error');
        }
    };
}