window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
function getRandomTime() {
        return Math.floor(Math.random() * 5) + 1; // Random time between 1 and 5 seconds
      }

      function createPromise() {
        const randomTime = getRandomTime();
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(`Resolved after ${randomTime} second(s)`);
          }, randomTime * 1000);
        });
      }

      const promises = Array.from({ length: 5 }, () => createPromise());

      Promise.any(promises)
        .then((result) => {
          const outputElement = document.getElementById('output');
          outputElement.textContent = result;
        })
        .catch((error) => {
          console.error('All promises rejected:', error);
        });