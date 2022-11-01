const numberCount = document.getElementById('number-count');
const btns = document.querySelectorAll('button');

// set initial count
let number = 0;

console.log(btns)

btns.forEach(el=>{
    el.addEventListener('click',(e)=>{
        const pickedBtn = e.target.classList;
        if(pickedBtn.contains('decrease')){
            number--;
        }else if(pickedBtn.contains('increase')){
            number++;
        }else{
            number = 0;
        }
        if(number < 0)numberCount.style.color = 'red';
        if(number >= 0)numberCount.style.color = 'yellowgreen'
        numberCount.textContent = number;
    })
})
