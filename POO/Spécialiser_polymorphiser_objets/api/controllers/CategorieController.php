<?php
require '../../backend/classes/Auteur.php';

$users = [new User(),new Auteur()];

foreach($users as $user){
    echo $user->getRoleName(). " ";
}
?>