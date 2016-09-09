<?php
    header('Content-type:text/javascript');
    $url = $_GET['data'];
    $lists = explode(',',$url);
    $url ='http://dshow.herokuapp.com/include/getdatas.php?'.implode("&",$lists);

    
    echo file_get_contents($url);


?>