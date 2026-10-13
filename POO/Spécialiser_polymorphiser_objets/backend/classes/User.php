<?php
class User{
    protected string $nom;
    protected string $email;

    public function getRoleName(): string{
        return "Visiteur anonyme";
    }
}
?>