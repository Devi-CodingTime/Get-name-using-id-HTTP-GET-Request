const fs = require('fs');
const express = require('express');
const app = express();

// Importing productNames from names.json file
const productNames = JSON.parse(
    fs.readFileSync(`${__dirname}/data/names.json`)
);
// console.log(productNames);

//Middlewares
app.use(express.json())

// GET endpoint for sending the products to client by id
//Endpoint - /api/v1/names/:id
// app.use('/api/v1/names/:id',(req,res)=>{
//     const {id} = req.params;
//     // console.log(id);
//     const userData = productNames.find(product => id == product.id)
//     if(!userData){
//         return res.status(404).send({
//             status: 'failed',
//             message: "Not found!" 
//         })
//     }
//     return res.status(200).send({
//         status:'success',
//         message:'Product name fetched successfully',
//         data:{userData}
//     });
// })

app.get("/api/v1/names/:id", (req, res) => {

    const { id } = req.params;

    const productName = productNames.find((entry) => entry.id == id);

    if (!productName) {

        return res.status(404).send({ status: "failed", message: "Not found!" })

    }

    return res.status(200).send({

        status: "success",

        message: "Product name fetched successfully",

        data: {

            productName

        }

    })

})


module.exports = app;
