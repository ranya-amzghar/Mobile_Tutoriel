<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json = file_get_contents('php://input');
    $newCategory = json_decode($json, true);

    $fileData = file_exists('data.json') ? file_get_contents('data.json') : '[]';
    $categories = json_decode($fileData, true);

    $categories[] = $newCategory;

    file_put_contents('data.json', json_encode($categories));

    echo json_encode(['id' => count($categories)]);
} 

else {
    if (file_exists('data.json')) {
        echo file_get_contents('data.json');
    } else {
        echo '[]';
    }
}
?>