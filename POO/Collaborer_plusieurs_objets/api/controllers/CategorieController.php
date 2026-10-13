<?php
require '../../backend/classes/GestionCategorie.php';
class CategorieController{
    public function listCategorie(): void{
        $gestion = new GestionCategorie();
        $categories = $gestion->getAll();

        foreach($categories as $cat){
            echo $cat->getNom(). "<br>";
        }
    }
}
$controller = new CategorieController();
$controller->listCategorie();
?>