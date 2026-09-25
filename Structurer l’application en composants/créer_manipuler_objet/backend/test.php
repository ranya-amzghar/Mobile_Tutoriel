<?php
require_once 'categorie.php';

$cat1 = new Category("Développement Web","Blue","D-W");
$cat2 = new Category("Design UI/UX","Red","UI/UX");
$cat1->afficher();
$cat2->afficher();
?>