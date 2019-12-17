document.addEventListener('DOMContentLoaded',function(){
    var input=document.getElementById('itemName');

    input.value=sessionStorage.getItem('draft')

    input.addEventListener('change',function(){
        sessionStorage.setItem('draft',input.value);
    })
})
