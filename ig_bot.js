/*Ig Follow and Unfollow Bot By Awad Nisar*/
var stop_unfollow = '', total_follows = 0, total_req = 0;
function sleep(ms){
	return new Promise(resolve => setTimeout(resolve, ms));
}
function follow_users(){
    var inputs = document.querySelectorAll('.y3zKF');
    function follow(i){
        inputs[i].click();
        console.log('following...');
    }
    for(var i = 0; i<10; i++){
        follow(i);
    }
}
async function start(again = true){
	if(again){
		stop_unfollow = '';
	}
    console.warn('Bot Started Successfully');
    for(var i = 0; i<100; i++){
		if(stop_unfollow == 'break'){
		break;
		}
        follow_users();
        if(i>0){
            var loop = i*10;
            var till = loop +10;
        }else{
            var loop = 0;
            var till = 10;
        }
        var followed = 0, req = 0;
        for(j=loop; j<till; j++){
			await sleep(1000);
            var done = document.querySelectorAll('._8A5w5');
            var inputVal = done[j].innerText;
            if(inputVal == "Following"){
                followed++;
            total_follows++;
            }
            if(inputVal == "Requested"){
                req++;
            total_req++;
            }
        }
        console.log(followed+' users followed and '+req+' users requested');
        console.info('Total Follows = '+total_follows+', Total Requests = '+total_req);
        await sleep(1000 * 60 * 5);
    }
	if(stop_unfollow == 'break'){
		console.warn('Bot Stopped (following)');
		return true;
	}
	if(i >= 100){
    console.log('Loop ended, recall the start function to do restart again...');
	}
}
function stop(){
	stop_unfollow = 'break';
}
//Unfollow
async function unfollow(again = true){
	if(again){
		stop_unfollow = '';
	}
	var unfollow = document.querySelectorAll('._8A5w5');
	for(var i=0; i<unfollow.length; i++){
		if(stop_unfollow == 'break'){
			break;
		}
		unfollow[i].click();
		var un = document.querySelector('.-Cab_');
		un.click();
		await sleep(5000);
	}
	if(stop_unfollow == 'break'){
			console.warn('Bot Stopped (unfollowing)');
			return true;
	}
}
