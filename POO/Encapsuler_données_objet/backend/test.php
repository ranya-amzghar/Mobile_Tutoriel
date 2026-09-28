<?php
require_once 'categorie.php';

$cat1 = new Category(1, "Développement Web", "Blue", "D-W");
$cat2 = new Category(2, "Design", "Red", "UI/UX");
$cat1->setNom("Développement Mobile");
$cat2->setCouleur("Pink");
$cat1->afficher();
$cat2->afficher();
?>