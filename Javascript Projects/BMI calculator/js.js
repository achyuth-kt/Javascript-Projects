const form=document.querySelector('form')
form.addEventListener('submit',function(e){
  e.preventDefault()
      let height=parseInt(document.getElementById('height').value)
      let weight=parseInt(document.getElementById('weight').value)
      if(height<=0 || isNaN(height) || height===''){
        document.getElementById('results').innerText="Enter a valid height";
      }else if(weight<=0 && isNaN(weight) || weight===''){
        document.getElementById('results').innerText="Enter valid weight";
        
      }else{
        document.getElementById('results').innerText=(10000*weight/(height*height)).toFixed(2)
      }
      
})