## Pratique

**1.Compléter avec les exceptions**

**Scénario d’erreur:**

Condition: À l’étape 3, l’Auteur ne saisit aucun contenu avant de valider.

1.L’Auteur clique sur le bouton “Enregistrer l’article”.

2.Le système refuse l’enregistrement et affiche le message d’erreur “Le contenu de l’article est obligatoire”.

Reprise : L’Auteur remplit le champ contenu et le scénario reprend à l’étape 3.

**Scénario d’alternatif:**

Condition: À l’étape 3, l’Auteur sélectionne le statut “Brouillon” au lieu de “Publié”.

1.L’Auteur clique sur le bouton “Enregistrer l’article”.

2.Le système sauvegarde l’article dans la base de données avec le statut inactif (brouillon).

3.Le système redirige l’Auteur vers la liste des articles.

**2.La Checklist du Dossier Fonctionnel**

[x]Mes diagrammes (Contexte, Cas d’utilisation) n’utilisent que des arcs non orientés (---).

[x]Mes acteurs ne sont jamais des interfaces graphiques ou des bases de données.

[x]J’ai vérifié que chaque trait sur le diagramme correspond bien à une fonctionnalité documentée en texte.

[x]Mes scénarios utilisent un vocabulaire précis (“Le système…”, “L’Acteur…”) et évitent les phrases vagues.

[x]J’ai prévu les cas d’erreur principaux (champs vides, doublons, annulations).