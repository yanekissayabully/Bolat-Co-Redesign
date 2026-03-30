<?php
error_reporting(0);
ini_set('display_errors', 0);
ob_start();

/**
 * sendFormData.php — ТОЛЬКО ИМЯ + ТЕЛЕФОН -> amoCRM
 * Возвращает: OK (успех) / ERROR (ошибка)
 * Требования: PHP 7.4+, cURL
 */

/* ============== CONFIG ============== */
$AMO_SUBDOMAIN  = 'ansarhalal';          // без .amocrm.ru (например: ansarhalal)
$CLIENT_ID      = '4d99ea83-bdd1-4df2-8fc5-aa738266e33d';          // ID интеграции
$CLIENT_SECRET  = 'NB0kwl2iCtJT6kBob4gckokROQQIbsjzLomVROW1oecTXkyLO4kyQfPFcI9WxuAK';      // Секрет интеграции
$REDIRECT_URI   = 'https://ansar-halal.kz'; // как в интеграции
$ACCESS_TOKEN   = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImEyZDM2OWM4YzlmMGQ2NmQ2Yzc5MjExYzIwZDZkMzljODdkNDUwMjc4ZTFjMTg1MzcxOWIxNzQwNmYyYzIyYWMyMDE0OGE2YTQxYjk0NTNlIn0.eyJhdWQiOiI0ZDk5ZWE4My1iZGQxLTRkZjItOGZjNS1hYTczODI2NmUzM2QiLCJqdGkiOiJhMmQzNjljOGM5ZjBkNjZkNmM3OTIxMWMyMGQ2ZDM5Yzg3ZDQ1MDI3OGUxYzE4NTM3MTliMTc0MDZmMmMyMmFjMjAxNDhhNmE0MWI5NDUzZSIsImlhdCI6MTc1ODEwMTAzOCwibmJmIjoxNzU4MTAxMDM4LCJleHAiOjE5MTU4MzM2MDAsInN1YiI6IjEyODgzMzM0IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMyNjE3OTMwLCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwidXNlcl9mbGFncyI6MCwiaGFzaF91dWlkIjoiYzkyMmViZTktNzhiYi00NzJhLWIwNTQtYmI2ZDM5NDI3MTQ1IiwiYXBpX2RvbWFpbiI6ImFwaS1iLmFtb2NybS5ydSJ9.Yz4VqfphEwsTSGFnTTyqtULbSoWeHx5Bju8P5kJyckcGv4dfCTXOolyA1PlLuwLwe2TFwqT63uWhP_CpXQRZ86bhCUPKKUy7aZhAcCJAoXdSPtVBYFv0s_B-H3sSADNoAPwny0w7S4jZlWL0clhJRGqyC-2dTIibNAbwaoF9Yalbf98UirWPlqefHYrz2_ijzFnpT9SET3WFmxkEZP6mXL9ln6f9OT8CjN_qiH5Ur0Zz7L8CPnifIAtXMziOE0WglCW8nSmdH0VTpih31LAWjW3l4NN4Zil7XWYykZWxkBwTepcJAo39CfgcNo3ubs48zQ14H2uFq-rYlhrT_0JDiQ';       // действующий токен
$REFRESH_TOKEN  = 'YOUR_REFRESH_TOKEN';      // refresh_token
$PIPELINE_ID    = null;                      // ID воронки (опционально)
$STATUS_ID      = null;                      // ID статуса (опционально)
$RESPONSIBLE_ID = null;                      // Ответственный (опционально)
/* ==================================== */

header('Content-Type: text/plain; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With, Accept');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit; }

function post_any($keys, $default='') {
  foreach ($keys as $k) if (isset($_POST[$k]) && $_POST[$k] !== '') return trim((string)$_POST[$k]);
  return $default;
}
function kz_phone($raw) {
  $d = preg_replace('/\D+/', '', (string)$raw);
  if ($d === '') return '';
  if (strlen($d)===11 && $d[0]==='8') return '+7'.substr($d,1);
  if (strlen($d)===11 && $d[0]==='7') return '+7'.substr($d,1);
  if (strlen($d)===10) return '+7'.$d;
  return ($raw[0]==='+') ? '+'.$d : '+'.$d;
}
function amo_url($sub, $path){ return "https://{$sub}.amocrm.ru{$path}"; }
function req($method,$url,$token,$payload=null){
  $ch=curl_init(); $hdr=["Authorization: Bearer {$token}","Content-Type: application/json"];
  curl_setopt_array($ch,[CURLOPT_URL=>$url,CURLOPT_RETURNTRANSFER=>true,CURLOPT_CUSTOMREQUEST=>$method,CURLOPT_HTTPHEADER=>$hdr,CURLOPT_TIMEOUT=>20,CURLOPT_SSL_VERIFYPEER=>true,CURLOPT_SSL_VERIFYHOST=>2]);
  if($payload!==null) curl_setopt($ch,CURLOPT_POSTFIELDS,json_encode($payload,JSON_UNESCAPED_UNICODE));
  $res=curl_exec($ch); $http=curl_getinfo($ch,CURLINFO_HTTP_CODE); $err=curl_error($ch); curl_close($ch);
  return [$http,$res,$err];
}
function refresh(&$access,&$refresh,$sub,$cid,$secret,$redir){
  $url=amo_url($sub,"/oauth2/access_token");
  $payload=["client_id"=>$cid,"client_secret"=>$secret,"grant_type"=>"refresh_token","refresh_token"=>$refresh,"redirect_uri"=>$redir];
  $ch=curl_init(); curl_setopt_array($ch,[CURLOPT_URL=>$url,CURLOPT_RETURNTRANSFER=>true,CURLOPT_POST=>true,CURLOPT_HTTPHEADER=>["Content-Type: application/json"],CURLOPT_POSTFIELDS=>json_encode($payload),CURLOPT_TIMEOUT=>20]);
  $res=curl_exec($ch); $code=curl_getinfo($ch,CURLINFO_HTTP_CODE); curl_close($ch);
  if($code===200){ $d=json_decode($res,true); $access=$d['access_token']; if(!empty($d['refresh_token'])) $refresh=$d['refresh_token']; return true; }
  return false;
}

/* ===== Получаем ТОЛЬКО имя и телефон ===== */
$name  = post_any(['name','fullname','fio','first_name','your-name'], '');
$telIn = post_any(['phone','tel','phone_number','your-phone','Телефон','contact[phone]'], '');
$phone = kz_phone($telIn);
if ($phone==='') { echo "ERROR"; exit; }  // нужен только телефон

/* ===== 1) Поиск/создание контакта по телефону ===== */
$cfg=['cid'=>$CLIENT_ID,'secret'=>$CLIENT_SECRET,'redir'=>$REDIRECT_URI];
$token=$ACCESS_TOKEN; $refr=$REFRESH_TOKEN;

$q = urlencode($phone);
$url = amo_url($AMO_SUBDOMAIN,"/api/v4/contacts?query={$q}&limit=1");
list($code,$body,$err)=req('GET',$url,$token);
if($code===401 && refresh($token,$refr,$AMO_SUBDOMAIN,$cfg['cid'],$cfg['secret'],$cfg['redir'])){
  list($code,$body,$err)=req('GET',$url,$token);
}
$contactId=null;
if($code>=200 && $code<300){
  $data=json_decode($body,true);
  if(!empty($data['_embedded']['contacts'][0]['id'])) $contactId=$data['_embedded']['contacts'][0]['id'];
}
if(!$contactId){
  $payload=[[
    "name"=>$name ?: $phone,
    "custom_fields_values"=>[["field_code"=>"PHONE","values"=>[["value"=>$phone,"enum_code"=>"MOB"]]]]
  ]];
  $url=amo_url($AMO_SUBDOMAIN,"/api/v4/contacts");
  list($code,$body,$err)=req('POST',$url,$token,$payload);
  if($code===401 && refresh($token,$refr,$AMO_SUBDOMAIN,$cfg['cid'],$cfg['secret'],$cfg['redir'])){
    list($code,$body,$err)=req('POST',$url,$token,$payload);
  }
  if(!($code>=200 && $code<300)){ echo "ERROR"; exit; }
  $data=json_decode($body,true);
  $contactId=$data['_embedded']['contacts'][0]['id'] ?? null;
  if(!$contactId){ echo "ERROR"; exit; }
}

/* ===== 2) Создаём сделку ===== */
$lead = [
  "name" => "Заявка с сайта — ".($name ?: $phone),
  "_embedded" => [
    "tags" => [
      ["name" => "ЛИДФОРМА"],
      ["name" => "ansar-halal.kz"]
    ]
  ]
];
if($PIPELINE_ID)    $lead["pipeline_id"]=(int)$PIPELINE_ID;
if($STATUS_ID)      $lead["status_id"]=(int)$STATUS_ID;
if($RESPONSIBLE_ID) $lead["responsible_user_id"]=(int)$RESPONSIBLE_ID;


$url=amo_url($AMO_SUBDOMAIN,"/api/v4/leads");
list($code,$body,$err)=req('POST',$url,$token,[$lead]);
if($code===401 && refresh($token,$refr,$AMO_SUBDOMAIN,$cfg['cid'],$cfg['secret'],$cfg['redir'])){
  list($code,$body,$err)=req('POST',$url,$token,[$lead]);
}
if(!($code>=200 && $code<300)){ echo "ERROR"; exit; }
$data=json_decode($body,true);
$leadId=$data['_embedded']['leads'][0]['id'] ?? null;
if(!$leadId){ echo "ERROR"; exit; }

/* ===== 3) Линкуем контакт к сделке ===== */
$url=amo_url($AMO_SUBDOMAIN,"/api/v4/leads/{$leadId}/link");
$payload=[[ "to_entity_id"=>(int)$contactId, "to_entity_type"=>"contacts", "metadata"=>["is_main"=>true] ]];
list($code,$body,$err)=req('POST',$url,$token,$payload);
if($code===401 && refresh($token,$refr,$AMO_SUBDOMAIN,$cfg['cid'],$cfg['secret'],$cfg['redir'])){
  list($code,$body,$err)=req('POST',$url,$token,$payload);
}
if(!($code>=200 && $code<300)){ echo "ERROR"; exit; }

/* ===== УСПЕХ ===== */
http_response_code(200);
@ob_end_clean();
header('Content-Type: text/plain; charset=utf-8');
echo 'success';
exit;