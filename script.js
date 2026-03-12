//your JS code here. If required.
function daysOfAYear(n) {
	if((n%4==0 &&n%100!=0) ||(n%400==0)){
		console.log(366);
	}else{
		console.log(365);
	}
}
