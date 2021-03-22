function index(x,y){
	if(x.length===0){return -1};
  let i=0; let j=x.length-1;
  while(i<j){
  	let middle = Math.floor((i+j)/2)
    if(x[middle] < y) {
    	i=middle+1
    }
    else j=middle
  }
  return i
}

console.log(index([1,2,3,4,6,10,11,13,15,16], 6))
