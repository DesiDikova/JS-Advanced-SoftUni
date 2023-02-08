//      -------------ПЪРВИ ВАРИАНТ
// function toggle() {
//     let buttonElements = document.getElementsByClassName('button')[0];
//     let textButton = document.querySelector('#extra');

//     if (buttonElements.textContent === 'More') {
//         buttonElements.textContent = 'Less';
//         textButton.style.display = 'block';
//     } else {
//         buttonElements.textContent = 'More';
//         textButton.style.display = 'none';
//     }
// }


//        -----------------ВТОРИ ВАРИАНТ
function toggle() {
    let buttonElements = document.getElementsByClassName('button')[0];
    let textButton = document.querySelector('#extra');

    if (buttonElements.textContent === 'More') {
       buttonElements.textContent = 'Less';
    } else {
        buttonElements.textContent = 'More';
    }

    if (textButton.style.display === 'block') {
        textButton.style.display = 'none';
    } else {
        textButton.style.display = 'block';
    }    
}