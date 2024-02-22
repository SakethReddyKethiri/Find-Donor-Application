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
        alert("Invalid user credentilas!!!");
      }
      else{
            alert("Login Success");
            window.location.href = "user.html";
      
      }
    })
});
