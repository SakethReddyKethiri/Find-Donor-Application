
const storedData = localStorage.getItem("userData");


const retrievedData = JSON.parse(storedData);

console.log(retrievedData);
const h1tag = document.getElementById("userh1");

h1tag.innerHTML = "Welcome to <bold>"+retrievedData['name']+"</bold>";

const tableBody = document.querySelector("table");

    for (let key in retrievedData) {
        const row = tableBody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);

        cell1.textContent = key;
        cell2.textContent = retrievedData[key];
    }
    



