 this.getBrand();
//this.getCarros();

function getCarros() {
    const cars = []
    fetch("./jsons/carros.json")
        .then(res => res.json())
        .then(data => {         
            for(i in data) {
                
                if(data[i].preco > 30000){
                    cars.push(data[i]);
                }
            }
            console.log(cars)
            return cars;
        })
}

function getBrand() {
    fetch('https://fipeapi.appspot.com/api/1/carros/veiculos/1.json', {
            method: 'get'
        })
        .then(response => response.json())
        .then(data => {

            addRow(data);
        });
}


function addRow(data) {
    const list = data;
    console.log('LISTA', list)
    // Get a reference to the table
    let tableRef = document.getElementById('my-table');

    for (i in list) {
        console.log(list[i].name);
        let newRow = tableRef.insertRow(-1);
        let cel = newRow.insertCell(0);
        let cel1 = newRow.insertCell(1);
        let cel2 = newRow.insertCell(2);
        let id = document.createTextNode(list[i].id);
        let name = document.createTextNode(list[i].name);
        let marca = document.createTextNode(list[i].marca);
        cel.appendChild(id);
        cel1.appendChild(name);
        cel2.appendChild(marca);

    }
    // Insert a row at the end of the table


    // Insert a cell in the row at index 0


    // Append a text node to the cell

}

// Call addRow() with the table's ID