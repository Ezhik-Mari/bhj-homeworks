'use strict'
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = 'json';
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        let loader = document.getElementById('loader');
        loader.classList.remove('loader_active');
        const items = document.getElementById('items');
        let obj = xhr.response;
        let valutes = obj.response.Valute;
        for (let val in valutes) {
            const item = document.createElement('div');
            item.classList.add('item');
            let divCode = createDiv('item__code');
            divCode.innerText = valutes[val]['CharCode'];
            let divValue = createDiv('item__value');
            divValue.innerText = valutes[val]['Value'];
            let divCurency = createDiv('item__currency');
            divCurency.innerText = 'руб.';
            items.appendChild(item);
            item.appendChild(divCode);
            item.appendChild(divValue);
            item.appendChild(divCurency);
        }
    }
}