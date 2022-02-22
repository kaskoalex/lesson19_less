/*

console.log(window);


//  setTimeout    - задержка выполнения функции в ms
window.setTimeout(function(){
  console.log('Hi, ich bin hier.');
},2000)

setTimeout( () =>{
  console.log('Hi, ich bin hier.'); // упрощённо стрелочная функция, если глобально виндов можно упустить.
}, 2000)

*/


const logger =(str) => {
  console.log(`Hi, ich bin ${str}`);
}

setTimeout(logger('Alex'),2000)  // срабатывает сразу , не ждя 2000мс, нужна функция обёртка



setTimeout(()=>{
  logger('Alex')
}, 2000)


let idTim = setTimeout(() => {
  logger('Alex')
}, 2000)

clearTimeout(idTim) // чистка Timeout по индефикатору через задачу переменной





//---------------- Setinterval --------------- ----
//   отрабатывает/ повторяет с интервалом в мс 
//    первая отработка после истечения первого интервала

setInterval(() => {
  logger('Alex')
}, 2000)


let idInt = setInterval(() => {
  logger('Alex')
}, 2000)

clearInterval(idInt)


