
// Module. logger.js --> showLogMessage

// logger.js 모듈을 불러온다.
const logger = require('./logger.js')

logger.showLogMessage('첫번째 로그메시지')
logger.secondshowLogMessage('두번째 로그메시지')
console.log('Logger 모듈에 들어있는 소중한 값은: '+logger.pvalue)


// 3초에 한 번씩 주기적으로
// setInterval(() => {
//     console.log('Node js 연습중입니다...')
// }, 3000);

// setTimeout(() => {
//     console.log('타임아웃, 한 번만 실행')
// }, 3000);


// 함수
// function sayHello(name) {
//     console.log('Hello '+name)
// }

// sayHello('John')
// sayHello('Alice')

// const v = 10

// if (v > 5) {
//     console.log('It is a big number')
// }
// else {
//     console.log('It is a small number')
// }


// console.log('hello, node js')   // crtl + `