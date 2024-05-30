document.addEventListener('DOMContentLoaded', () => {
    const loginContainer = document.getElementById('login-container');
    const calculatorContainer = document.getElementById('calculator-container');
    const passwordInput = document.getElementById('password-input');
    const loginButton = document.getElementById('login-button');
    const calculateButton = document.getElementById('calculate-button');

    const customSprayTimeInput = document.getElementById('custom-spray-time');
    const widthInput = document.getElementById('width-input');
    const aspectRatioInput = document.getElementById('aspect-ratio-input');
    const rimDiameterInput = document.getElementById('rim-diameter-input');
    const resultTread = document.getElementById('result-tread');
    const resultSidewall = document.getElementById('result-sidewall');

    const PASSWORD = 'TMQtg0856131313';

    loginButton.addEventListener('click', () => {
        if (passwordInput.value === PASSWORD) {
            localStorage.setItem('isLoggedIn', 'true');
            loginContainer.style.display = 'none';
            calculatorContainer.style.display = 'block';
        } else {
            alert('Sai mật khẩu, vui lòng thử lại.');
        }
    });

    if (localStorage.getItem('isLoggedIn')) {
        loginContainer.style.display = 'none';
        calculatorContainer.style.display = 'block';
    }

    calculateButton.addEventListener('click', () => {
        const width = parseInt(widthInput.value);
        const aspectRatio = parseInt(aspectRatioInput.value);
        const rimDiameter = parseInt(rimDiameterInput.value);
        const customSprayTimeValue = parseInt(customSprayTimeInput.value);

        const circumference = (width * (aspectRatio / 100) + rimDiameter * 25.4) * Math.PI;
        const contactArea = circumference * width;
        const sprayTimeTread = (contactArea / 3400) * (customSprayTimeValue / 100);
        const sprayTimeSidewall = ((contactArea / 555857.7 + circumference / 2021.3) / 0.137) * (customSprayTimeValue / 100);

        resultTread.textContent = `Thời gian phun cao su: ${convertToMinuteAndSecond(sprayTimeTread)}`;
        resultSidewall.textContent = `Thời gian phun mép: ${convertToMinuteAndSecond(sprayTimeSidewall)}`;
    });

    function convertToMinuteAndSecond(totalSeconds) {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = Math.round(totalSeconds % 60);
        if (seconds === 60) {
            return `${minutes + 1} phút 00 giây`;
        }
        return `${minutes} phút ${seconds} giây`;
    }
});
