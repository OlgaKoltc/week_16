let numbers = [];
let input = document.querySelector('input');
let button = document.querySelector('#more');
let finish = document.querySelector('#finish');

input.addEventListener('mouseover', addNumber);
button.addEventListener('click', sumInput);
finish.addEventListener('click', editArr);

function addNumber (){
   alert('Введите числа');
   input.removeEventListener('mouseover', addNumber)
}
addNumber ()

 function sumInput(){
 let num = input.value;
 if (!isNaN(num) && num !== ' '){
 numbers.push(num);
 input.value = '';
} else {
    editArr()
}  
}
function editArr(){
    let count = 0
    const filter = numbers.sort((a, b) => a - b)
    numbers.forEach(item => {
        count += +item
    })
    const getSum = document.querySelector('#sum');
    getSum.innerHTML = count
    const massiv = document.querySelector('#massiv');
    massiv.innerHTML = filter
}
