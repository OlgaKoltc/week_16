let arr = []
const none = document.querySelector('.form__none');
const brand = document.querySelector('#brand');
const btn = document.querySelector('button');

brand.addEventListener('change', getModel);
btn.addEventListener('click',btnResult);

function getModel() {
    none.classList.remove('none');
    const arrSelect = none.querySelectorAll('select');
    arrSelect.forEach(item => {
        item.classList.add('none')
    })
    switch (brand.value) {
        case 'audi':
            const audiModel = document.querySelector('.audi');
            audiModel.classList.remove('none');
            audiModel.classList.add('active');
            arr[0] = 1000000 
            break;
            case 'bmw':
                const bmwModel = document.querySelector('.bmw');
                bmwModel.classList.remove('none');
                bmwModel.classList.add('active');
                arr[0] = 2000000 
                break;
                case 'kia':
                const kiaModel = document.querySelector('.kia');
                kiaModel.classList.remove('none');
                kiaModel.classList.add('active');
                arr[0] = 400000 
                break;
                case 'opel':
                    const opelModel = document.querySelector('.opel');
                    opelModel.classList.remove('none');
                    opelModel.classList.add('active');
                    arr[0] = 500000 
                    break;
                    case 'null':
                        brand.classList.add('none')
                        break
    }
}
function btnResult() {
    const actionSelect = none.querySelector('.active');
    const arrRadio = document.querySelectorAll('#radio');
    arr[1] = +actionSelect.value;
    getCheckbox(arrRadio);
    sumArr(arr)
}
function getCheckbox(arrInput) {
    const arrCheckbox = document.querySelectorAll('#specification');
    arrInput.forEach(item => {
        if (item.checked){
            arr[2] = +item.value
        }
    })
    getSpecification(arrCheckbox)
}
function getSpecification(arrInput2) {
let count = 0
    arrInput2.forEach(item => {
        if (item.checked){
            count += +item.value
        }
    })
   arr[3] = +count;
}
function sumArr(array) {
    const sumPage = document.querySelector('.price');
    let count2 = 0;
    array.forEach(item => {
        count2 += item
    })
    sumPage.innerHTML = count2
}