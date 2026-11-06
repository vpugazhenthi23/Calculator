    const display = document.getElementById("display");
    let expression = "";

    document.querySelectorAll(".calc .btn").forEach(function (button) {
      button.addEventListener("click", function () {
        const value = button.textContent;

        if (value === "Clear") {
          expression = "";
        } else if (value === "x") {
          expression = expression.slice(0, -1);   // delete last character
        } else if (value === "=") {
          try {
            expression = String(Function("return " + expression)());
          } catch {
            expression = "";
            display.textContent = "Error";
            return;
          }
        } else {
          expression += value;
        }

        display.textContent = expression || "0";
      });
    });
