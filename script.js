const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}
const change = document.getElementById('bgbut') ;
const body = document.getElementById('body') ; 
change.addEventListener('click' ,  ( ) => { 
  if (change.innerHTML == "DARK"){ 
    body.setAttribute("background" , "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2020/02/Usign-Gradients-Featured-Image.jpg") ;
    change.innerHTML = "LIGHT" ; 
  }
  
  
  else{ 
      
      body.setAttribute("background" , "https://cdn.theatlantic.com/thumbor/i9jH00gdQ3Lov_7DI2xDujaTwQQ=/845x470:2635x1477/1600x900/media/img/mt/2016/03/RTX283V4/original.jpg") ;
      change.innerHTML = "DARK" ;
    }
  
  
}) 
