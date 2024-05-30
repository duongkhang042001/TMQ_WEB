document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("login-button");
    const passwordInput = document.getElementById("password-input");
    const loginContainer = document.getElementById("login-container");
    const calculatorContainer = document.getElementById("calculator-container");

    const calculateButton = document.getElementById("calculate-button");
    const widthInput = document.getElementById("width-input");
    const aspectRatioInput = document.getElementById("aspect-ratio-input");
    const rimDiameterInput = document.getElementById("rim-diameter-input");
    const customSprayTimeInput = document.getElementById("custom-spray-time");
    const resultTread = document.getElementById("result-tread");
    const resultSidewall = document.getElementById("result-sidewall");

    loginButton.addEventListener("click", function () {
        const password = passwordInput.value.trim();
        if (password === "TMQtg0856131313") {
            loginContainer.style.display = "none";
            calculatorContainer.style.display = "block";
        } else {
            alert("Vui lòng nhập đúng mật khẩu.");
        }
    });

    calculateButton.addEventListener("click", function () {
        const width = parseInt(widthInput.value.trim());
        const aspectRatio = parseInt(aspectRatioInput.value.trim());
        const rimDiameter = parseInt(rimDiameterInput.value.trim());
        const customSprayTimeValue = parseInt(customSprayTimeInput.value.trim());

        if (!width || !aspectRatio || !rimDiameter || !customSprayTimeValue) {
            alert("Vui lòng nhập đầy đủ thông tin.");
            return;
        }

        const circumferenceValue =
            (width * (aspectRatio / 100) + rimDiameter * 25.4) * Math.PI;
        const contactAreaValue = circumferenceValue * width;
        const sprayTimeTreadValue = (contactAreaValue / 3400) * (customSprayTimeValue / 100);
        const sprayTimeSidewallValue =
            ((contactAreaValue / 555857.7 + circumferenceValue / 2021.3) / 0.137) *
            (customSprayTimeValue / 100);

        resultTread.textContent = `Thời gian phun cao su: ${convertToMinuteAndSecond(sprayTimeTreadValue)}`;
        resultSidewall.textContent = `Thời gian phun mép: ${convertToMinuteAndSecond(sprayTimeSidewallValue)}`;
    });

    const convertToMinuteAndSecond = (totalSeconds) => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = Math.round(totalSeconds % 60);
        if (seconds === 60) {
            return `${minutes + 1} phút 00 giây`;
        }
        return `${minutes} phút ${seconds} giây`;
    };
});
