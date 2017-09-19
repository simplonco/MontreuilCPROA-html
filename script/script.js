(function () {

    const materialInputs = document.querySelectorAll('.material-input');
    const labeled = document.querySelectorAll('label');

    materialInputs.forEach((materialInput, index) => {
        materialInput.addEventListener('focus', () => {
            if (materialInput.childNodes[1]) {
                materialInput.childNodes[1].style.color = "#009688";
                materialInput.childNodes[1].style.fontSize = "0.8em";
                materialInput.childNodes[1].style.top = "0";
            }

        }, true);

        materialInput.addEventListener('focusout', () => {
            if (materialInput.childNodes[3] && materialInput.childNodes[3].value.length <= 0) {
                materialInput.childNodes[1].style.color = "#AAA";
                materialInput.childNodes[1].style.fontSize = "1em";
                materialInput.childNodes[1].style.top = "0.9em";
            }
        });
    });
})();