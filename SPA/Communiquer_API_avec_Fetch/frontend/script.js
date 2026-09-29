const API_URL = '../backend/api.php';

document.addEventListener('DOMContentLoaded', ()=>{
    let btnShow = document.querySelector('#btnShow');
    let form = document.querySelector('#form');
    let nom = document.querySelector('#nom');
    let couleur = document.querySelector('#couleur');
    let btnCancel = document.querySelector('#btnCancel');
    let table = document.querySelector('#table');
    function chargerCategories(){
        fetch(API_URL)
            .then(reponse=>reponse.json())
            .then(results => {
                table.innerHTML = '';
                results.forEach(result =>{
                    table.insertAdjacentHTML('beforeend', `<tr><td> ${result.nom} </td><td> ${result.couleur} </td></tr>`);
                })
            })
    };
    
    btnShow.addEventListener('click', ()=>{
        form.hidden = false;
        btnShow.hidden = true;
    });
    btnCancel.addEventListener('click', ()=>{
        form.hidden = true;
        btnShow.hidden = false;
    });
    form.addEventListener('submit', (event)=>{
        event.preventDefault();
        let newsCategories = {nom:nom.value, couleur:couleur.value};
        fetch(API_URL,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newsCategories)
        })
        .then(response => response.json())
        .then(data => {console.log('Crée avec ID :', data.id);
        table.insertAdjacentHTML('beforeend', `<tr><td> ${nom.value} </td> <td> ${couleur.value} </td></tr>`);
        form.reset();
        form.hidden = true;
        btnShow.hidden = false;
        chargerCategories();
        })
    })
    chargerCategories();
});
