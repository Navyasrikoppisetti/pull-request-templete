document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('pull-request-form');
    const resultDiv = document.getElementById('result');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const title = document.getElementById('title').value;
      const description = document.getElementById('description').value;
      
      fetchData(title, description)
        .then(function(response) {
          resultDiv.innerHTML = `<p class="success">Pull request submitted successfully.</p>`;
        })
        .catch(function(error) {
          resultDiv.innerHTML = `<p class="error">Error occurred: ${error}</p>`;
        });
    });
    
    function fetchData(title, description) {
      return new Promise(function(resolve, reject) {
        // Simulating fetch operation with setTimeout
        setTimeout(function() {
          const isSuccess = Math.random() < 0.5; // Random success or failure
          
          if (isSuccess) {
            resolve('Success');
          } else {
            reject('Failed');
          }
        }, 2000);
      });
    }
  });
  