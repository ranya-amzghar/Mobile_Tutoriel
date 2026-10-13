<?php
require 'Categorie.php';

class GestionCategorie{
    public function getAll(): array{
        return [
            new Categorie("Design"),
            new Categorie("Web")
        ];
    }
}
?>