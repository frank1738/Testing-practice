const reverseString=(string)=>{
    const array=string.split("")
    const revArray=array.reverse()
    const reversedString=revArray.join("")
    return reversedString
}
module.exports=reverseString