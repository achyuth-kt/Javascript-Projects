const changBG=function(){
  hex="0123456789ABCDEF"
  color="#"
  for (let i = 0; i < 6; i++) {
    color+=hex[Math.floor(Math.random()*16)]
  }
  return color
}
let intervalVal=null
document.querySelector('#start').addEventListener('click',function(e){
  e.preventDefault
  if(intervalVal==null){
    intervalVal=setInterval(function(){
      document.body.style.backgroundColor=changBG()
 },1000)
  }
})
document.querySelector('#stop').addEventListener('click',function(e){
  e.preventDefault
  clearInterval(intervalVal)
  intervalVal=null
})
