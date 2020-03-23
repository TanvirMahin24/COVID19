summary();

const parentElem = document.querySelector('body');
parentElem.addEventListener('click', (e) => {
    
    if(e.target.className === 'countryLink'){
        let slug = e.target.href.split('#')[1];
        countryData(slug);
    }
    if(e.target.id === 'backBTN'){
        summary();
    }
    e.preventDefault();
});
