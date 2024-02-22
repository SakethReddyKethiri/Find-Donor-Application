const h1tag = document.getElementById("userh1");

h1tag.innerHTML = "Welcome to !!!";

const storedData = localStorage.getItem("userData");

// Parse JSON string back to JSON object
const retrievedData = JSON.parse(storedData);

console.log(retrievedData);

function generateTable(data) {
    const tableBody = document.querySelector("table");

        for (let key in data) {
            const row = tableBody.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);

            cell1.textContent = key;
            cell2.textContent = data[key];
        }
    };
    generateTable(retrievedData);



