function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');
    let resultElement = document.getElementById('result');

    gradientElement.addEventListener('mousemove', (e) => {
        let result = (Math.floor(e.offsetX / gradientElement.clientWidth * 100));
        resultElement.textContent = `${result}%`;        
    });

    gradientElement.addEventListener('mouseout', () => {
        resultElement.textContent = '';        
    });
}