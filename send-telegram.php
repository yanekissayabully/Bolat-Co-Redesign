<?php
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

$botToken = '8751143847:AAE3ZKF-apLnD6Co7w7uC-tDNlwdEaf94Fw';
$chatId = '914762159';

$message = $data['message'] ?? '';

$url = "https://api.telegram.org/bot{$botToken}/sendMessage";

$postData = json_encode([
    'chat_id' => $chatId,
    'text' => $message,
    'parse_mode' => 'Markdown'
]);

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
curl_close($ch);

echo $response;
?>