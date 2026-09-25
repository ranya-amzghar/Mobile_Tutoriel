<?php
Class Category{
    public $id;
    public $nom;
    public $couleur;
    public $icone;

    public function __construct($nom,$couleur,$icone){
        $this->nom = $nom;
        $this->couleur = $couleur;
        $this->icone = $icone;
    }
    public function afficher(){
        echo "Categorie: ". $this->nom. ", ". $this->couleur. ", ".$this->icone; 
    }
}
?>