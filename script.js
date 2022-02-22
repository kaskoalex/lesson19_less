//let date = new Date // date - конструктор

//let date = new Date('22 october 1987')
let date = new Date(1987, 9,22,03,10,02,200)


console.log(date)
console.dir(typeof date)
console.dir(date)  // через прототип узнаём функтии объекта

date.setFullYear(1988) // передача объекту года
date.setMonth(9,25)
date.setHours(3,34,34,20)


date.setDate(date.getDate() + 100) // дата сто дней от сегоднешнего дня



console.log('Year ' + date.getFullYear())
console.log('Month ' + (date.getMonth()+1))
console.log('Date ' + date.getDate())
console.log('Day ' + date.getDay())

console.log('Date ' + date.getUTCDate()) // среднее время

console.log(date)

//  ---let date = new Date(0)  --- times tamp

console.log(date.toDateString())
console.log(date.toTimeString())

console.log(date.toLocaleDateString('ru'))
console.log(date.toLocaleTimeString())

console.log(date.toISOString('ru'))

console.log(date.toISOString('en').substr(0,10))



