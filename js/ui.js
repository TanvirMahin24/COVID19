const output = document.querySelector('.output');

function makeTableRow(data){
    output.innerHTML = `
    <table class="table table-bordered text-center">
        <thead class="thead-dark">
        <tr>
            <th scope="col">#</th>
            <th scope="col">Country</th>
            <th scope="col">New Confirmed</th>
            <th scope="col">Total Confirmed</th>
            <th scope="col">New Deaths</th>
            <th scope="col">Total Deaths</th>
            <th scope="col">New Recovered</th>
            <th scope="col">Total Recovered</th>
        </tr>
        </thead>
        <tbody id="tableOutput" class="table-striped">
        </tbody>
    </table>
    `;
    let txt = '';
    let count = 1;
    const targrt = document.querySelector('#tableOutput');
    data.Countries.forEach(item => {
        txt+= `
        <tr>
            <th scope="row">${count++}</th>
            <td><a href="#${item.Slug}" class="countryLink">${item.Country}</a></td>
            <td>${item.NewConfirmed}</td>
            <td>${item.TotalConfirmed}</td>
            <td class="table-danger">${item.NewDeaths}</td>
            <td class="table-danger">${item.TotalDeaths}</td>
            <td class="table-success">${item.NewRecovered}</td>
            <td class="table-success">${item.TotalRecovered}</td>
        </tr>    
        `
    });
    targrt.innerHTML = txt;
    
}





function makeCountryRow(data){
    output.innerHTML = `
    <div class="p-4 bg-dark text-center">
        <h2 class="text-light">${data[0].Country}</h2>
        <p class="text-light">Day by day the number of patients</p>
        <a href="#" class="btn btn-light" id="backBTN">Back to all country page</a>
    </div>
    <table class="table table-bordered text-center">
        <thead class="thead-dark">
        <tr>
            <th scope="col">#</th>
            <th scope="col">Date</th>
            <th scope="col">Number of Confirmed paitent</th>
        </tr>
        </thead>
        <tbody id="tableOutput" class="table-striped">
        </tbody>
    </table>
    `;
    let txt = '';
    let count2 = 1;
    let flag = true;
    const targrt = document.querySelector('#tableOutput');
    data.forEach(item => {
        let d = new Date(item.Date);
        txt+= `
        <tr>
            <th scope="row">${count2++}</th>
            <td>${d.toDateString()}</td>
            <td class="table-danger">${item.Cases}</td>
        </tr>    
        `
    });
    targrt.innerHTML = txt;
}