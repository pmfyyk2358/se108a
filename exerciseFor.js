function f(n){
    var array =[0,1]
    for(i=2;i<=n;i++){
        array[i] = array[i-1]*3 + array[i-2]*2
    }
    return array[n]
}

var startTime = Date.now()
console.log("f(1)=",f(1))
console.log("f(2)=",f(2))
console.log("f(3)=",f(3))
console.log("f(40)=",f(40))
var endTime = Date.now()
var milliSeconds = endTime - startTime
console.log('time:%dms', milliSeconds)