function missingElement(A)
{
var n=A.length
	
	var total=(n+1)*(n+2)/2
	
	for(var i = 0;i<n;i++){
		total-=A[i]
	}
	return total
}
