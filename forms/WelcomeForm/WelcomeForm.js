let names = ["Joe", "Sally"]

btnShowMessage.onclick=function(){
  console.log(`My best friend is ${names[0]}`)
  labMessage.textContent = "I really enjoy" + names[0]
}
