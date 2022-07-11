let power = document.querySelector('.power');
let toggle = 1;

power.addEventListener('click', ()=>{
    if(toggle==1){
        toggle = 0;
        console.log('off');
    }else{
        toggle = 1;
        console.log('on');
    }
}) 