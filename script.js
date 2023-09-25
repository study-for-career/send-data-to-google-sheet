const userInput = document.querySelector('#input');
const display = document.querySelector('#list-data');
const singleData = document.querySelector('#finalData')

let allData = [];
let myData = '';
let listData = [];
function getData(){
   const data = userInput.value;
   
   const slicedData = data.split('\n');
    allData.push(slicedData);
    let dataArr = allData.flat();
   
    function answeredData(item){
        const singleQuiz = `<li onclick=getAnswer(this)>${item}</li>`;
        return singleQuiz
    }

    let listData = dataArr.map(answeredData);
    console.log(listData);
    display.innerHTML = listData.join('');
    
    userInput.value = '';
}

const question = document.querySelector('[name="question"]');
const op1 = document.querySelector('[name="op1"]');
const op2 = document.querySelector('[name="op2"]');
const op3 = document.querySelector('[name="op3"]');
const op4 = document.querySelector('[name="op4"]');
const answer = document.querySelector('[name="answer"]');

let finalData = [];
function getAnswer(item){
    item.style.background = 'aqua';
    myData = display.innerText + '\n' + item.innerText;
    let finalData = myData.split('\n');
    question.value = finalData[0];
    op1.value = finalData[1];
    op2.value = finalData[2];
    op3.value = finalData[3];
    op4.value = finalData[4];
    answer.value = finalData[5];
}


const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
e.preventDefault();

document.querySelector('#submitting').innerHTML = 'Submitting...';

const data = new FormData(form);
fetch('https://script.google.com/macros/s/AKfycbyfYx3_-eOaNrji-6dz9zCNjNBZX39MS39io5J1nI33tKHLLJexeTmzFXycQFdzIEQM/exec', {
    method: "POST",
    body: data
})

.then(res => res.text())
.then(data => {
    document.querySelector('#submitting').innerHTML = data;
    display.innerHTML = '';
    question.value = '';
    op1.value = '';
    op2.value = '';
    op3.value = '';
    op4.value = '';
    answer.value = '';
    allData = [];
})
})