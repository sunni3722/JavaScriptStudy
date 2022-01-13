const express = require('express')  // npm install express --save
const app = express()

app.listen(3000, ()=>{
    console.log('3000번에 듣기 시작했음.')
})

// 처리해주는 루틴들을 추가...
app.get('/', (req, res)=>{
    console.log('루트에 대한 요청이 들어옴.')
})

app.get('/about', (req, res)=>{
    console.log('about에 대한 요청이 들어옴.')
})