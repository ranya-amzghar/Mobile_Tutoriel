<?php
require '../../backend/classes/GestionCategorie.php';
class CategorieController{
    public function listCategorie(): void{
        $gestion = new GestionCategorie();
        $categories = $gestion->getAll();

        $data = [];
        foreach($categories as $cat){
            $data[]= [
                'id' => $cat->getId(),
                'nom' => $cat->getNom(),
                'couleur'=> $cat->getCouleur(),
                'icone' => $cat->getIcone()
            ];
        }
        header('Content-Type: application/json');

        json_encode($data);
    }
}
$controller = new CategorieController();
$controller->listCategorie();
?>