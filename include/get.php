<?php
    header('Content-type:text/javascript');
    $url = $_GET['data'];
    $lists = explode(',',$url);
    $x=false;
    if($x)
    $url ='http://dshow.herokuapp.com/include/getdatas.php?'.implode("&",$lists);
    else
    $url = "http://" .$_SERVER['SERVER_NAME']. "/include/getdatas.php?" .implode("&",$lists);
    echo $url;
    
    echo file_get_contents($url);


?>