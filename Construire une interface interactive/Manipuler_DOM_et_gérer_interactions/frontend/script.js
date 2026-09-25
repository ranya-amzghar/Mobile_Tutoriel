document.addEventListener('DOMContentLoaded', ()=>{
    let btnShow = document.querySelector('#btnShow');
    let form = document.querySelector('#form');
    let nom = document.querySelector('#nom');
    let couleur = document.querySelector('#couleur');
    let btnAdd = document.querySelector('#btnAdd');
    let btnCancel = document.querySelector('#btnCancel');
    let table = document.querySelector('#table');
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
        table.insertAdjacentHTML('beforeend', `<tr><td> ${nom.value} </td> <td> ${couleur.value} </tr></td>`);
        form.reset();
        form.hidden = true;
        btnShow.hidden = false;
    })
});