<?php
require 'User.php';

class Auteur extends User{
    private string $biographie;

    public function getRoleName(): string{
        return "Auteur publié";
    }
}
?>