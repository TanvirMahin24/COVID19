async function summary(){
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  await fetch("https://api.covid19api.com/summary", requestOptions)
    .then(response => response.text())
    .then(result => {
        const data = JSON.parse(result);
        //console.log(data);
        makeTableRow(data);
    })
    .catch(error => console.log('error', error));
}

async function countryData(countrySlug){
  var myHeaders = new Headers();

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  await fetch(`https://api.covid19api.com/total/dayone/country/${countrySlug}/status/confirmed`, requestOptions)
    .then(response => response.text())
    .then(result => {
      const data = JSON.parse(result);
        //console.log(data);
        makeCountryRow(data);
    })
    .catch(error => console.log('error', error));
}