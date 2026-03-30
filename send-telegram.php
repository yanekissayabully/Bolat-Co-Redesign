<?php
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

$botToken = '8751143847:AAE3ZKF-apLnD6Co7w7uC-tDNlwdEaf94Fw';
$chatId = '914762159';

$message = $data['message'] ?? '';
$name = $data['name'] ?? '';
$phone = $data['phone'] ?? '';
$fullData = $data['fullData'] ?? [];

// ========== ОТПРАВКА В TELEGRAM ==========
$telegramUrl = "https://api.telegram.org/bot{$botToken}/sendMessage";

$postData = json_encode([
    'chat_id' => $chatId,
    'text' => $message,
    'parse_mode' => 'Markdown'
]);

$ch = curl_init($telegramUrl);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$telegramResponse = curl_exec($ch);
curl_close($ch);

// ========== ОТПРАВКА В AMOCRM ==========
$amoResult = sendToAmoCRM($name, $phone, $fullData);

// ========== ФОРМИРУЕМ ОТВЕТ ==========
$response = [
    'telegram' => json_decode($telegramResponse, true),
    'amocrm' => $amoResult,
    'success' => true
];

echo json_encode($response, JSON_UNESCAPED_UNICODE);

// ========== ФУНКЦИЯ ОТПРАВКИ В AMOCRM ==========
function sendToAmoCRM($name, $phone, $fullData = []) {
    // Конфигурация amoCRM
    $AMO_SUBDOMAIN  = 'bolatco';
    $CLIENT_ID      = '57de4195-8060-46eb-bbcf-e3c77e447a08';
    $CLIENT_SECRET  = 'RwhZvDibbRdHOrwI0qppdkoThKKdAieSyVMIMZNYo4S7QoYxkB15lbq2P83NqAWA';
    $REDIRECT_URI   = 'https://crmbolat.kz';
    $ACCESS_TOKEN   = 'def5020071c34cf322813661025cb80490087e1fc7115ad5c4f3320f2f89771cb7f00de8d4187cee6df98e4f7eb08f31f219ecb382203913c1bd7e42fabbe0cfe5e93821abee5e6551140d9e91a570da0f8e97abb23dad999032650238af10b8d7f1690996660687742029b93eb92a46b677d94194812dc6c7d1e9479128fad8a2250d2c8d1d80fdce1925cbd8b6be197b6a2c7bc80fe86b901ceae3c9fac67a7a1fbcff939e42bbefa8da6b0b0ed0fe96a52a96f76255b5032da121abc3b605771c3e28ed0801b3996c9192ece94231450343b2394d8383f5dd1da8afe7f74adc0fb663a151861ef563cb3f449d1ba3d1012ccbc525fd546cce46af6ebf303e64c69cade0ecbb392d55976e1d00acf3fc17040e11a4c2929ebb180dcee42b631e585f4fc2999c4b96adce37807351b96cbb51830c3cdf88f800d0db40b6db36ebd88355265f241dc14e24e0880acf4c5cd8e035795cfcc8b0aec007fc6cdc0ba61d625862d398ed44ca8522a70aa051aaae3bb4c4f2b958d8a045b4388520be0a17b687c8f6ff6531a629f8bd5931b029849a8bbfcc2cc36bba9bfe1a4560ac1f135cf331e71110697e1c57feee44ae160704f547ddec472d825d5e4fff34d5a5cd08e6b22d4854747e0ca00617b153b9080d53b07dc12543f6ed761367a253bc7898cf';
    $REFRESH_TOKEN  = 'YOUR_REFRESH_TOKEN';
    
    // Если имя пустое, используем телефон
    if (empty($name)) {
        $name = $phone;
    }
    
    // Форматируем телефон
    $phoneFormatted = formatPhone($phone);
    
    // 1. Поиск существующего контакта
    $contactId = findContact($AMO_SUBDOMAIN, $ACCESS_TOKEN, $phoneFormatted, $CLIENT_ID, $CLIENT_SECRET, $REDIRECT_URI, $REFRESH_TOKEN);
    
    // 2. Если контакт не найден — создаём новый
    if (!$contactId) {
        $contactId = createContact($AMO_SUBDOMAIN, $ACCESS_TOKEN, $name, $phoneFormatted, $CLIENT_ID, $CLIENT_SECRET, $REDIRECT_URI, $REFRESH_TOKEN);
        if (!$contactId) {
            return ['success' => false, 'error' => 'Failed to create contact'];
        }
    }
    
    // 3. Создаём сделку
    $leadId = createLead($AMO_SUBDOMAIN, $ACCESS_TOKEN, $name, $fullData, $CLIENT_ID, $CLIENT_SECRET, $REDIRECT_URI, $REFRESH_TOKEN);
    if (!$leadId) {
        return ['success' => false, 'error' => 'Failed to create lead'];
    }
    
    // 4. Линкуем контакт к сделке
    $linkResult = linkContactToLead($AMO_SUBDOMAIN, $ACCESS_TOKEN, $leadId, $contactId, $CLIENT_ID, $CLIENT_SECRET, $REDIRECT_URI, $REFRESH_TOKEN);
    if (!$linkResult) {
        return ['success' => false, 'error' => 'Failed to link contact to lead'];
    }
    
    return ['success' => true, 'lead_id' => $leadId, 'contact_id' => $contactId];
}

// ========== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ==========

function formatPhone($raw) {
    $d = preg_replace('/\D+/', '', (string)$raw);
    if ($d === '') return '';
    if (strlen($d) === 11 && $d[0] === '8') return '+7' . substr($d, 1);
    if (strlen($d) === 11 && $d[0] === '7') return '+7' . substr($d, 1);
    if (strlen($d) === 10) return '+7' . $d;
    return ($raw[0] === '+') ? '+' . $d : '+7' . $d;
}

function amo_url($sub, $path) {
    return "https://{$sub}.amocrm.ru{$path}";
}

function amo_request($method, $url, $token, $payload = null) {
    $ch = curl_init();
    $headers = [
        "Authorization: Bearer {$token}",
        "Content-Type: application/json"
    ];
    
    curl_setopt_array($ch, [
        CURLOPT_URL => $url,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CUSTOMREQUEST => $method,
        CURLOPT_HTTPHEADER => $headers,
        CURLOPT_TIMEOUT => 20,
        CURLOPT_SSL_VERIFYPEER => true,
        CURLOPT_SSL_VERIFYHOST => 2
    ]);
    
    if ($payload !== null) {
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload, JSON_UNESCAPED_UNICODE));
    }
    
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $error = curl_error($ch);
    curl_close($ch);
    
    return [$httpCode, $response, $error];
}

function refreshToken(&$access, &$refresh, $sub, $cid, $secret, $redir) {
    $url = amo_url($sub, "/oauth2/access_token");
    $payload = [
        "client_id" => $cid,
        "client_secret" => $secret,
        "grant_type" => "refresh_token",
        "refresh_token" => $refresh,
        "redirect_uri" => $redir
    ];
    
    $ch = curl_init();
    curl_setopt_array($ch, [
        CURLOPT_URL => $url,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST => true,
        CURLOPT_HTTPHEADER => ["Content-Type: application/json"],
        CURLOPT_POSTFIELDS => json_encode($payload),
        CURLOPT_TIMEOUT => 20
    ]);
    
    $response = curl_exec($ch);
    $code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    if ($code === 200) {
        $data = json_decode($response, true);
        $access = $data['access_token'];
        if (!empty($data['refresh_token'])) {
            $refresh = $data['refresh_token'];
        }
        return true;
    }
    return false;
}

function findContact($subdomain, $token, $phone, $clientId, $clientSecret, $redirectUri, $refreshToken) {
    $query = urlencode($phone);
    $url = amo_url($subdomain, "/api/v4/contacts?query={$query}&limit=1");
    
    list($code, $body, $err) = amo_request('GET', $url, $token);
    
    // Если токен протух — обновляем
    if ($code === 401) {
        $newToken = $token;
        $newRefresh = $refreshToken;
        if (refreshToken($newToken, $newRefresh, $subdomain, $clientId, $clientSecret, $redirectUri)) {
            list($code, $body, $err) = amo_request('GET', $url, $newToken);
            $token = $newToken;
        }
    }
    
    if ($code >= 200 && $code < 300) {
        $data = json_decode($body, true);
        if (!empty($data['_embedded']['contacts'][0]['id'])) {
            return $data['_embedded']['contacts'][0]['id'];
        }
    }
    
    return null;
}

function createContact($subdomain, $token, $name, $phone, $clientId, $clientSecret, $redirectUri, $refreshToken) {
    $payload = [[
        "name" => $name,
        "custom_fields_values" => [[
            "field_code" => "PHONE",
            "values" => [[
                "value" => $phone,
                "enum_code" => "MOB"
            ]]
        ]]
    ]];
    
    $url = amo_url($subdomain, "/api/v4/contacts");
    list($code, $body, $err) = amo_request('POST', $url, $token, $payload);
    
    if ($code === 401) {
        $newToken = $token;
        $newRefresh = $refreshToken;
        if (refreshToken($newToken, $newRefresh, $subdomain, $clientId, $clientSecret, $redirectUri)) {
            list($code, $body, $err) = amo_request('POST', $url, $newToken, $payload);
            $token = $newToken;
        }
    }
    
    if ($code >= 200 && $code < 300) {
        $data = json_decode($body, true);
        return $data['_embedded']['contacts'][0]['id'] ?? null;
    }
    
    return null;
}

function createLead($subdomain, $token, $name, $fullData, $clientId, $clientSecret, $redirectUri, $refreshToken) {
    $lead = [
        "name" => "Заявка с VSL — " . ($name ?: 'Клиент'),
        "_embedded" => [
            "tags" => [
                ["name" => "VSL_LEAD"],
                ["name" => "crmbolat.kz"],
                ["name" => "КВАЛИФИЦИРОВАН"]
            ]
        ]
    ];
    
    // Добавляем доп. поля, если они есть
    $customFields = [];
    if (!empty($fullData['businessType'])) {
        $customFields[] = [
            "field_id" => 913789, // Замени на реальный ID поля "Тип бизнеса"
            "values" => [["value" => $fullData['businessType']]]
        ];
    }
    if (!empty($fullData['crmUsage'])) {
        $customFields[] = [
            "field_id" => 913791, // Замени на реальный ID поля "Использование CRM"
            "values" => [["value" => $fullData['crmUsage']]]
        ];
    }
    if (!empty($fullData['crmIssues'])) {
        $customFields[] = [
            "field_id" => 913793, // Замени на реальный ID поля "Проблемы с CRM"
            "values" => [["value" => $fullData['crmIssues']]]
        ];
    }
    if (!empty($fullData['technicalSupport'])) {
        $customFields[] = [
            "field_id" => 913795, // Замени на реальный ID поля "Техподдержка"
            "values" => [["value" => $fullData['technicalSupport']]]
        ];
    }
    if (!empty($fullData['vslWatchTime'])) {
        $customFields[] = [
            "field_id" => 913797, // Замени на реальный ID поля "Время просмотра видео"
            "values" => [["value" => $fullData['vslWatchTime']]]
        ];
    }
    
    if (!empty($customFields)) {
        $lead["custom_fields_values"] = $customFields;
    }
    
    $url = amo_url($subdomain, "/api/v4/leads");
    list($code, $body, $err) = amo_request('POST', $url, $token, [$lead]);
    
    if ($code === 401) {
        $newToken = $token;
        $newRefresh = $refreshToken;
        if (refreshToken($newToken, $newRefresh, $subdomain, $clientId, $clientSecret, $redirectUri)) {
            list($code, $body, $err) = amo_request('POST', $url, $newToken, [$lead]);
            $token = $newToken;
        }
    }
    
    if ($code >= 200 && $code < 300) {
        $data = json_decode($body, true);
        return $data['_embedded']['leads'][0]['id'] ?? null;
    }
    
    return null;
}

function linkContactToLead($subdomain, $token, $leadId, $contactId, $clientId, $clientSecret, $redirectUri, $refreshToken) {
    $url = amo_url($subdomain, "/api/v4/leads/{$leadId}/link");
    $payload = [[
        "to_entity_id" => (int)$contactId,
        "to_entity_type" => "contacts",
        "metadata" => ["is_main" => true]
    ]];
    
    list($code, $body, $err) = amo_request('POST', $url, $token, $payload);
    
    if ($code === 401) {
        $newToken = $token;
        $newRefresh = $refreshToken;
        if (refreshToken($newToken, $newRefresh, $subdomain, $clientId, $clientSecret, $redirectUri)) {
            list($code, $body, $err) = amo_request('POST', $url, $newToken, $payload);
            $token = $newToken;
        }
    }
    
    return ($code >= 200 && $code < 300);
}