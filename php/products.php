<?php

  // DB Details -- NB no exception handling included
  $db_name = 'roisin_products';
  $db_user = 'roisin';
  $db_pass = 'meninblack1416';

  try {

    $db = new PDO("mysql:host=localhost;dbname=$db_name;charset=utf8mb4", $db_user, $db_pass);

    // Get DB rows (all products)
    $stt = $db->prepare('SELECT id,name,price,description,image_href,creator FROM products');
    $stt->execute();

    // Associative array of all DB results
    $products = $stt->fetchAll(PDO::FETCH_ASSOC);

    // Render response as JSON (so it can be 'fetched' and parsed in in JS)
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    echo json_encode($products);
  } catch(Exception $e) {
    echo 'PDO error: ' . $e->getMessage();
  }

?>