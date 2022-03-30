const express = require('express');
 const cors = require('cors');
const mysql = require('mysql');

const app = express();



//connecting to database & checking for errors

    var con = mysql.createConnection({
        host: "localhost",
        user:"root",
        password:"password",
        database:"ecom_products"
    });




    // con.connect(function(err){
    //     if (err) throw err;
    //     console.log("Connected!");
    //     // var val = "Bottoms";
    //     // var query = "SELECT * FROM products where prod_type=" + mysql.escape(val);
    //     // con.query(query, function(err,result) {
    //     //     if (err) throw err;
    //     //     console.log(result);
    //     // });
    // });

    

         // "/api/products/:username/:password


    app.use(cors());
    app.use(express.json());

app.get ("/api/products", (req, res) => {
    con.connect(function(err){
        if (err) throw err;
        console.log("Connected!");
        // var val = "Bottoms";
        // var query = "SELECT * FROM products where prod_type=" + mysql.escape(val);
        // con.query(query, function(err,result) {
        //     if (err) throw err;
        //     console.log(result);
        // });
    });
    con.query('SELECT * FROM products ', (err, result) => {
        if (err) {
            console.log(err)
        }else {
            res.send(result);
        }
    }
    )
}
)

    app.listen(4000, () => {
        console.log(`console server listening on port 4000`)
    })