document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("bloodgroupform").addEventListener("submit", function(event) {
        event.preventDefault(); 
        
        const bloodgrp = document.getElementById("bloodGroup").value;
        const url = `http://localhost:9000/donar/bloodgrp/${bloodgrp}`;
    
        fetch(url)
        .then(response => {
            return response.json(); 
        })
        .then(data => {
            if(data.length === 0) {
                const table = document.getElementById('jsonTable');
                table.innerHTML = '';
                alert("No Donors Found");
                
            } else {
                generateTable(data);
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    });
    
    function generateTable(data) {
        const table = document.getElementById('jsonTable');
    
        
        if (!table) {
            console.error("Table element not found");
            return;
        }
    
        
        table.innerHTML = '';
    
        
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        Object.keys(data[0]).forEach(key => {
            const th = document.createElement('th');
            th.textContent = key;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);
    
        
        const tbody = document.createElement('tbody');
        data.forEach(obj => {
            const tr = document.createElement('tr');
            Object.values(obj).forEach(value => {
                const td = document.createElement('td');
                td.textContent = value;
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });
        table.appendChild(tbody);
    }
});
