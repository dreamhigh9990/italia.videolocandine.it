<?php
	if (! function_exists('h_getDays')) {
	    function h_getDays()
	    {
	    	if(Session::get('locale') == 'it')
	            $days = ['Lun', 'Mar', 'Mer', 'Giov', 'Ven', 'Sab', 'Dom'];
	        else if(Session::get('locale') == 'en')
	            $days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
	        return $days;
	    }
	}

	if (! function_exists('h_isLive')) {
	    function h_isLive($media)
	    {
	    	$daysTable = [
		        "Monday" => "Lun",
		        "Tuesday" => "Mar",
		        "Wednesday" => "Mer",
		        "Thursday" => "Giov",
		        "Friday" => "Ven",
		        "Saturday" => "Sab",
		        "Sunday" => "Dom",
		    ];

		    $now = date('Y-m-d');
	        $dayOfWeek = date("l", strtotime($now));
	        $days = explode(',', $media->days);
	        if(in_array($daysTable[$dayOfWeek], $days) && $now >= $media->start_date && $now <= $media->end_date)
	        	return true;
	        else
	        	return false;
	    }
	}
?>