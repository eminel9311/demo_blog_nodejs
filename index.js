const express = require('express');
const app = express();
const path = require('path');
//regist public folder
app.use(express.static('public'));
app.listen(3000, () => {
  console.log('server start at port 3000');
})

app.get("/", (req, res)=>{
  res.sendFile(path.resolve(__dirname, 'pages/index.html'));
})
// app.get("/", (request, response)=> {
//   response.json({
//     name: 'quanbh',
//     descrition: 'Handsome max'
//   })
// })