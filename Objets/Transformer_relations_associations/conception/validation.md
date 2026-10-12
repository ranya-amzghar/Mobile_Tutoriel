### Étape de vérification (Audit du Modèle)

Avant de *commit* et de valider définitivement votre modèle sur GitHub, vérifiez les points suivants :

- [X] **Classes** : Chaque table du MLD a-t-elle sa classe (au singulier) ?
- [X] **Identifiants** : Chaque classe possède-t-elle son attribut `id` ?
- [X] **Attributs** : Tous les champs (hors clés étrangères) sont-ils présents et correctement typés ?
- [X] **Associations** : Les clés étrangères ont-elles bien disparu des attributs pour devenir des lignes d’association ?
- [X] **Multiplicités** : Le sens de chaque association a-t-il été testé avec une phrase ? *(Exemple : « Un Auteur rédige 0 ou plusieurs Articles ».)*