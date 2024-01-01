document.addEventListener("DOMContentLoaded", () => {
  let count = 0;
  const counterDisplay = document.getElementById("counterDisplay");

  const updateDisplay = () => {
    count = clamp(17, count, -17);

    counterDisplay.textContent = count;
  };
  document.getElementById("increaseBtn-ten").addEventListener("click", () => {
    count += 10;
    updateDisplay();
  });

  document.getElementById("increaseBtn").addEventListener("click", () => {
    count += 1;
    updateDisplay();
  });
  document.getElementById("decreaseBtn-ten").addEventListener("click", () => {
    count -= 10;
    updateDisplay();
  });
  document.getElementById("decreaseBtn").addEventListener("click", () => {
    count -= 1;
    updateDisplay();
  });

  document.getElementById("resetBtn").addEventListener("click", () => {
    count = 0;
    updateDisplay();
  });
});

function clamp(max, variable, min) {
  variable = Math.max(variable, min);
  variable = Math.min(variable, max);
  return variable;
}
