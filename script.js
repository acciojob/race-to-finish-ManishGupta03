window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
function getRandomDelay() {
        // Generate a random delay between 1 and 5 seconds
        return Math.random() * 4000 + 1000;
      }

      function createDelayedPromise(index) {
        return new Promise((resolve, reject) => {
          const delay = getRandomDelay();
          setTimeout(() => {
            resolve(`Promise ${index} resolved after ${delay / 1000} seconds.`);
          }, delay);
        });
      }

      const promises = Array.from({ length: 5 }, (_, index) => createDelayedPromise(index));

      Promise.any(promises)
        .then((result) => {
          const outputElement = document.getElementById('output');
          outputElement.textContent = result;
        })
        .catch((error) => {
          console.error('All promises were rejected:', error);
        });
