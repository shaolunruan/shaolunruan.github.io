<?php
require_once ("include/common.inc.php");
require_once ("include/arc.partview.class.php");
require_once ("include/charset.func.php");
$year = date("Y");
$month = date("m");
$day = date("d");
$dayBegin = mktime(0,0,0,$month,$day,$year);//当天0点0分0秒开始时间
$dayEnd = mktime(23,59,59,$month,$day,$year);//当天23点59分59秒结束时间
$query = "SELECT arch.id,types.typedir FROM dede_arctype as types inner join dede_archives as arch on types.id=arch.typeid where pubdate<".$dayEnd." AND pubdate>".$dayBegin.""; //这里dede换成你们自己的表前缀
$urls="";
$dsql->Execute('arch.id,types.typedir',$query);
while($row = $dsql->GetArray('arch.id,types.typedir'))
{
 $urls.="https://shaolunruan.github.io".str_replace("{cmspath}","",$row['typedir'])."/".$row[id].".html".","; 
 //将上边的http://www.csmbw.com换成你的网址
}
$urls=substr($urls,0,-1);
$urls = explode(",",$urls);
$api = 'http://data.zz.baidu.com/urls?site=https://shaolunruan.github.io&token=FoxIKuSowFWd1JhG'; // 前边的site换成自己的网址 token换成自己的密钥
$ch = curl_init();
$options = array(
 CURLOPT_URL => $api,
 CURLOPT_POST => true,
 CURLOPT_RETURNTRANSFER => true,
 CURLOPT_POSTFIELDS => implode("\n", $urls),
 CURLOPT_HTTPHEADER => array('Content-Type: text/plain'),
);
curl_setopt_array($ch, $options);
$result = curl_exec($ch);
echo $result.count($urls);
?>