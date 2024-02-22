document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    const formData = new FormData(this);

    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

  
    fetch("http://localhost:9000/donar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(jsonData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then(data => {
      alert(data);
      // Optionally, redirect to another page or show a success message
    })
    .catch(error => {
      alert(error.message);
      // Optionally, display an error message to the user
    });
  });
