fetch('../Backend/categories.php')
    .then(response => response.json())
    .then(categories =>{
        let ul = document.getElementById('categories');
        categories.forEach(category => {
            let li = document.createElement('li');
            li.textContent = category.nom;
            ul.appendChild(li);
        });
    })
    .catch(erreur => console.error("Erreur de communication :", erreur))