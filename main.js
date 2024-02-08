let display = document.querySelector(".display");

let buttons = Array.from(document.querySelectorAll(".button"));

buttons.map((button) => {
    button.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            case "AC":
                display.innerText = "0";
                break;
            case "=":
                try {
                    display.innerText = eval(display.innerText).toFixed(2);
                }
                catch (e) {
                    display.innerText = "Wrong expression";
                }
                break;
            case "%":
                let passedText = display.innerText + "/100";
                display.innerText = eval(passedText);
                break;
            case "<-":
                if (display.innerText.length === 1 || display.innerText === "0") {
                    display.innerText = "0"; 
                }
                if (display.innerText !== "0") {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                if (display.innerText === "0" && display.innerText !== ".") {
                    display.innerText = e.target.innerText;
                } else {
                    display.innerText += e.target.innerText;
                }
        }
    })
});