const counterButton = document.getElementById('increaseButton');
const clearButton = document.getElementById('clearButton');
  const counterDisplay = document.getElementById('counter');
  const distractionCountDisplay = document.getElementById('distractionCount');

  let count = 0;

  counterButton.addEventListener('click', () => {
    count++;
    counterDisplay.textContent = count;
    distractionCountDisplay.textContent = count;

  });

  clearButton.addEventListener('click', () => {
    count = 0;
    counterDisplay.textContent = count;
    distractionCountDisplay.textContent = count;
  });