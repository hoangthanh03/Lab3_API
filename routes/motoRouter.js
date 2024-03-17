const express = require('express');
const router = express.Router();
const moto = require('../Model/motoModel')


//get select

// router.get('/',async(req, res)=>{
//     try {
//         const motos = await moto.find(); // lấy về tất cả dữ liệu có trong bảng
//         res.render('motos',{motos: motos})    
//         console.log(motos);    
//     } catch (error) {
//         console.log(error);
//         res.json('err:'+error)
        
//     }
// })

router.get('/', async (req, res) => {
    try {
        const motos = await moto.find();
        if (motos.length === 0) {
            // Nếu không có dữ liệu, bạn có thể hiển thị một thông báo hoặc xử lý theo cách khác
            // Ví dụ:
            return res.render('motos', { motos: [], message: 'Không có dữ liệu.' });
           
        }
        res.render('motos', { motos: motos });
        res.json(motos);
    } catch (error) {
        console.log(error);
        res.json('err:' + error);
    }
});


//post (new motos)
router.post('/moto', async(req,res)=>{
    try {
        const {motoName,date,theFirm,price} = req.body; // lấy dữ liệu người dùng nhập từ input
        const moto1 = new moto({motoName,date,theFirm,price}); //tạo đối tượng mới  
        await moto1.save(); //lưu vào data
        res.json(moto1)
        console.log(moto1);
        alert('Add thành công')
        
    } catch (error) {
        console.log(error);
        res.json('err:'+error)
    }
})

//update
router.put('/:_id', async(req,res)=>{
    try {
        const {motoName,date,theFirm,price} = req.body
        const updateMotor = await moto.findByIdAndUpdate(_id,{motoName,date,theFirm,price},{new :true});
        res.json(updateMotor)
        console.log(updateMotor);
        alert("Update thành công")
        
    } catch (error) {
        console.log(error);
        res.json('err:'+error)
    }
})
// delete 
router.delete('/:_id', async(req,res)=>{
    try {
        const deleteMotor = await moto.findByIdAndDelete(_id)
        res.json(deleteMotor)
        console.log(deleteMotor);
        alert('Delete Thành công')
        
    } catch (error) {
        console.log(error);
        res.json('err:'+error)
    }
})



module.exports = router;

