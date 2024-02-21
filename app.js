console.log('Test');

let name = 'Иван Иванов'
let birthday = '31.12.1980'
let age = 43
let isChild = false
let works = ['Магазин', 'Завод']

let person = {
    'surname': 'Шариков',
    'name': 'Полиграф',
    'middleName': 'Полиграфович',
    'photo': 'm1000x1000.png',
    'birthday': '31.12.1980',
    'education': 'СПб ГУ, 2003 г.',
    'academicDegree': false,
    'works': [
        {
            'placeOfWork': 'магазин "Пятерочка"',
            'position' : 'грузчик',
            'period': '2003-2008 г.'
        },
        {
            'placeOfWork': 'ресторан "Фрегат"',
            'position' : 'официант',
            'period': '2008-2022 г.'
        },
        {
            'placeOfWork': 'ПАО "Газпром"',
            'position' : 'член совета директоров',
            'period': 'с 2022 г.'
        }
    ]
}

let loadButtonElement = document.getElementById('loadButton')
loadButtonElement.onclick = function () {
    console.log('load');

    let imgElement = document.getElementById('photo')
    imgElement.src = person.photo

    let surnameElement = document.getElementById('surname')
    surnameElement.innerText = person.surname

    let nameElement = document.getElementById('name')
    nameElement.innerText = person.name

    let middleNameElement = document.getElementById('middleName')
    middleNameElement.innerText = person.middleName

    let birthdayElement = document.getElementById('birthday')
    birthdayElement.innerText = String(person.birthday) + ' г.р.'

    let educationElement = document.getElementById('education')
    educationElement.innerText = person.education

    let careerElement = document.getElementById('career')
    careerElement.classList.toggle('display-none')

    let worksElement = document.getElementById('works')
    let worksString = ''
    
    for (const work of person.works) {
        worksString += 
        `<div>Место работы: ${work.placeOfWork}</div>
        <div>Должность: ${work.position}</div>
        <div>Период: ${work.period}</div>
        <div>-----</div>`    
    }
    worksElement.innerHTML = worksString
}