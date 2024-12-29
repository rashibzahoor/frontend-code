setTimeout(()=>{

    document.getElementById("change").addEventListener("click",function(){

        let change= document.getElementById("hello");
        change.textContent="how are you!!!!"
        change.style.color="blue"
     })
},5000)



