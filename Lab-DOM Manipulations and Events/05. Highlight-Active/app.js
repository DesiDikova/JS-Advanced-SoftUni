function focused() {
    let inputElements = document.querySelectorAll('input[type="text"]');

    for (let element of inputElements) {
        element.addEventListener('focus', focus);
        element.addEventListener('blur', blur);
    }

    function focus(e) {
        //e.target.parentElement.className = 'focused';
        e.target.parentElement.classList.add('focused');
    }

    function blur(e) {
        //e.target.parentElement.className = '';
        e.target.parentElement.classList.remove('focused');
    }
}

