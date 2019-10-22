var array = [0,1]
function f(n)
{
    if(array[n]!=null)
    return array[n]
    array[n] = 3*f(n-1) + 2*f(n-2)
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