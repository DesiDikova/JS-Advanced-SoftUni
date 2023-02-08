function lockedProfile() {
    Array
        .from(document.querySelectorAll('.profile button'))
        .forEach(element => element.addEventListener('click', clickButton));

    function clickButton(e) {
        let profile = e.target.parentElement;
        let checkElement = profile.querySelector('input[value="unlock"]').checked;
        
        if (checkElement) {
            let infoUserElement = profile.querySelector('div');
            if (e.target.textContent === 'Show more') {
                infoUserElement.style.display = 'block';
                e.target.textContent = 'Hide it';
            } else {
                infoUserElement.style.display = 'none';
                e.target.textContent === 'Show more';
            }
        }
    }
}