const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const motorRouter = require('./routes/motoRouter')

const app = express();

//kết nối với mongoDb

mongoose.connect('mongodb://127.0.0.1:27017/PH40777_MD18306',{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=>{
  console.log('Kết nối thành công');
})
.catch((err)=>{
  console.log(err);
})
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
//sử dụng route
app.use('/',motorRouter);

//gọi đến file ejs
app.set('view engine','ejs');
// tạo url 
const port = process.env.PORT || 3000
app.listen(port,()=>{
  
  console.log('Server Run port 3000');

})
