
$(document).ready(function(){

	function main(){	
		$("#weeklyresult").on("click",function(){
				/* Variables by nature*/
			var salary = parseInt($("#salary").val());
			var suppression = parseInt($("#suppression").val());
			var add = parseInt($("#add").val());
			var booklet = parseInt($("#booklet").val());
			var provision = parseInt($("#provision").val());
			var aids = parseInt($("#aids").val());
			var annuities = parseInt($("#annuities").val());
			var other = parseInt($("#other").val());
			var rents = parseInt($("#rents").val());
			var refund = parseInt($("#refund").val());
			var water = parseInt($("#water").val());
			var phone = parseInt($("#phone").val());
			var race = parseInt($("#race").val());
			var fuel = parseInt($("#fuel").val());
			var activity = parseInt($("#activity").val());
			var spending = parseInt($("#spending").val());

			
			/* Variable result of recipes */
			var receipResult = salary + add + aids + rents + annuities;

			/* Variable expenditure result */
			var spendingResult = rents + refund + water + phone + race + fuel + activity + spending;
			
			/* Variable total result */
			var result= receipResult - spendingResult;
			alert(result);
		   
			$("#courant" ).html(weeklyresult);
		})
	}	

	main();
});