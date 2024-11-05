import generateElement from './generateElement.js';

const container = generateElement('div', {class: 'container'})

function generateCart(name, age) {

    const cart = generateElement(
        'div',
        {class: 'cart'},
        generateElement('span', null, `name: ${name}`),
        generateElement('span', null, `age: ${age}`)
    )

    return cart;
}

const userDate = [
    {name: 'Poriya', age: 39},
    {name: 'Milad', age: 24},
    {name: 'Amir', age: 20},
    {name: 'Mohsen', age: 35},
    {name: 'Ali', age: 50}
]

userDate.forEach(data => {
    container.appendChild(generateCart(data.name, data.age));
})

export default container;