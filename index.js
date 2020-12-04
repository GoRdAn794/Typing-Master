



const tarea=document.querySelector('#txt1');
const tarea2=document.querySelector('#txt2');
var str=["This is your first text","This is your first text","This is your second text","This is your third text","This is your fourth text"];
var str2,interv=0,t=0,time=0,count1=0,interv;
 var count=str[Math.floor(Math.random()*5)];
  		console.log(count);
 		document.getElementById("txt1").innerHTML=count;
 		document.getElementById("txt2").innerHTML
// // str.length();
// // console()
// // var str2=document.getElementById();
// // if(str==str2)
// // {
// // 	console.log("equal");
// // }

// function start()
// {
// 	var tlen=tarea.value.length;
// 	console.log(tlen);

// }
// tarea.addEventListener("onkeypress",start,false);
function check()
{
	
	str1=document.getElementById("txt1").value;
str2=document.getElementById("txt2").value;
var z,wpm;
z=str2.length;
console.log(z);
wpm=(z/5)/(time/60);
wpm=parseInt(wpm);
console.log("wpm=",parseInt(wpm));
Length = str2.length-1;

if(str1[Length]!=str2[Length]){
	count1 += 1;
	document.getElementById("p4").innerHTML="CURRENT ERRORS : "+count1;
}
// console.log(str2);
else if(str1.length == str2.length){
	// console.log('clear')
	clearInterval(interv);
	document.getElementById('cl').innerHTML = '';
	document.getElementById('cl2').innerHTML='';
	document.querySelector('.second').style.display='block';
	document.getElementById('p5').innerHTML="YOUR SPEED IS(WPS) :"+wpm;
	document.getElementById('p6').innerHTML="TIME CONSUMED :"+time;

	// document.getElementById().innerHTML="WPM :"
	


}

for(i=0;i<str1.length;i++)
{

	if(str1[i]===str2[i])
	{
		// stop();
		// console.log("same");
	}
	else
	{
		console.log(str2[i]);
		count+=1;

	}

	// if(str1==str2)
	// {

	// }
}


}

function timer()
{
		 document.getElementById("p2").innerHTML="TIME:"+time;
		if(str2.length>=0 && interv==0)
		{
			interv=  setInterval(() => {time+=1; document.getElementById("p2").innerHTML="TIME:"+time;
			console.log(time);},1000);	
	
			
	 
		}
}
// document.getElementById('result').innerHTML += "<span style='background-color:red'>"+paraValue+"</span>";




 // if(str1==str2)
 // {
 // 	console.log("same");

 // }
 // else
 // {
 // 	console.log("not");

 // }
