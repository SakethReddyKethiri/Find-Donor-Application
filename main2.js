document.getElementById("loginform").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    const formData = new FormData(this);

    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

  
    fetch("http://localhost:9000/donar/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(jsonData)
    })
    .then(response => {
      if (!response.ok) {
        alert("Invalid Login Credentials!!!!");
      }
      return response.json();
    })
    .then(data => {
      alert("Login Success!!");

      const jsonString = JSON.stringify(data);

      localStorage.setItem("userData", jsonString);
      window.location.href="user.html";

    })
    .catch(error => {
      alert(error.message);
      
    });
  });
