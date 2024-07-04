
 const getAllProductsStatic =  (req,res)=>{
    //! for throwing error   throw new Error('the error from async products')
       res.status(200).json({img:'product testing route'})
 }

 const getAllProducts =  (req,res)=>{
       res.status(200).json({img:'product route'})
 }

 module.exports = {  getAllProductsStatic,
                    getAllProducts,
 }