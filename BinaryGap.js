// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function toBinary(n, base) {
 
    if (n < 0) {
      n = 0xFFFFFFFF + n + 1;
     } 
return parseInt(n, 10).toString(2);
}

function solution(n) {
    // write your code in JavaScript (Node.js 8.9.4)
    
	var arr = toBinary(n,2).split("1")
	if(arr[0].toString().includes("0") || arr[0] === ""){
		arr.shift()
	}
	if(arr[arr.length-1].toString().includes("0") || arr[arr.length-1].toString().includes("")){
		arr.pop()
	}
	
	var temp = 0
	for(var i =0;i<arr.length;i++){
		if(arr[i].includes("0") && temp<arr[i].split("").length){
			
				temp=arr[i].split("").length
			
			
		}
	}
	return temp
}
