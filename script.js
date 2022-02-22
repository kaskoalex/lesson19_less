/*

console.log(window);


//  setTimeout    - задержка выполнения функции в ms
window.setTimeout(function(){
  console.log('Hi, ich bin hier.');
},2000)

setTimeout( () =>{
  console.log('Hi, ich bin hier.'); // упрощённо стрелочная функция, если глобально виндов можно упустить.
}, 2000)




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

 
let active = false
let idTim

document.addEventListener('click', () => {
  //if(active) {
    active = false
  } else {
    active = true
  //}
  
  active = !active


  logger('Alex')

})


const logger = (str) => {


  if (active) {
    console.log(`Hi, ich bin ${str}`);
    idTim = setTimeout(() => {
      logger('Alex')
    }, 500)
  } else {
    clearTimeout(idTim)
  }
}



const air = document.querySelector('.air')
const man = document.querySelector('.man')

let count = 0
let idInterval

const flayAnimate =()=> {
  count++

  man.style.top=count + 'px'
  air.style.left =count*2 + 'px'


  if (count<200) setTimeout(flayAnimate,10)

}

flayAnimate()

//-----------------------------------------------

const flayAnimate = () => {
  count++

  man.style.top = count + 'px'
  air.style.left = count * 2 + 'px'


  if (count < 200) {
    man.style.top = count + 'px'
    air.style.left = count * 2 + 'px'
  } else if (count<500) {
    air.style.left = count * 2 + 'px'
  } else {
    clearInterval(idInterval)
  }

}

idInterval = setInterval(flayAnimate,10)

  */
const air = document.querySelector('.air')
const man = document.querySelector('.man')

let count = 0
let idInterval
let active=true



//-----------------------------------------------

const flayAnimate = () => {
  count++
  idInterval=requestAnimationFrame(flayAnimate)

  


  if (count < 200) {
    man.style.height = count + 'px'
    air.style.width = count * 2 + 'px'
  } else if (count < 500) {
    air.style.width = count * 2 + 'px'
  } else {
    cancelAnimationFrame(idInterval)
  }

}

document.addEventListener('click', () => {
  if (active) {
    cancelAnimationFrame(idInterval)
    active=false
  } else {
    idInterval = requestAnimationFrame(flayAnimate)
    active= true
  }
})



