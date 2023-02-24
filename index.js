
let inputNumber = document.getElementById('number')
let submit = document.getElementById('submit')
let message = document.getElementById('message')
let remain = document.getElementById('remain')
let num= Math.floor(Math.random() * 101);
let count= 3;
console.log(num)
submit.addEventListener('click', () =>{
    if(count != -1){
        if(count <= 3 && count >= 1){
            if(num == inputNumber.value){
                console.log("success");
                message.innerHTML = 'Well Done :)';
                count=-1;
            }
            else{
                message.innerHTML = 'Try Agine :]';
                remain.innerHTML=`Guesses Remaining : ${--count}`
                if(count == 0){
                    message.innerHTML = 'Game Over :(';
                    count=-1;
                }
            }
        }
    }
    if(count== -1){
        submit.style.cssText='background-color: #eee ; cursor:not-allowed ; border:none; color: white;'
    }
    message.style.opacity='1'
})