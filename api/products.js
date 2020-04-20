import express from "express";
import FileOperation     from "../domain/FileOperation";


const router = express.Router();
const dataPath = 'D:\\Work_Hari\\Node\\NodeApplication\\Data\\users.json';
var fs = require('fs');
readFileData();

// CREATE
router.post('/add', (req, res) => {  
    let fileoperation = new FileOperation(dataPath,fs);
   fileoperation.readData(dataPath, fs)(data => {
        const newUserId = Object.keys(data).length;
        data[newUserId.toString()] = req.body;
        let fileoperation = new FileOperation(dataPath,fs);
        fileoperation.addRow(dataPath, fs)(JSON.stringify(data), () => {
            res.status(200).send('new user added');
        });
    },
        true);
});

router.post('/:id', (req, res) => {
       
    let fileoperation = new FileOperation(dataPath,fs);
   fileoperation.readData(dataPath, fs)(data => {
        const userId =  req.body.id;
        const fileData= data;
        // Treat every reader
        fileData.forEach(function(x) {
            // If the bookID is the one we are looking for, set it as null
            if (x.id === userId) {
                x.name =req.body.name;
            }
            if (x.name === req.body.name) {
                x.id =userId;
            }
        });
    let fileoperation = new FileOperation(dataPath,fs);
    fileoperation.addRow(dataPath, fs)(JSON.stringify(fileData), () => {
            res.status(200).send(`users id:${userId} updated`);
        });
    },
        true);
});

// DELETE
router.post('/delete/:id', (req, res) => {

   let fileoperation = new FileOperation(dataPath,fs);
   fileoperation.readData(dataPath, fs)(data => {
        var index = data.findIndex(function(item, i){
            return item.id === req.body.id
          });
          
        delete data[index];
        let fileoperation = new FileOperation(dataPath,fs);
       fileoperation.addRow(dataPath, fs)(JSON.stringify(data), () => {
            res.status(200).send(`users id:${req.body.id} removed`);
        });
    },
        true);
});



module.exports = router;
function readFileData() {
    router.get("/", (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            res.send(JSON.parse(data));
        });
    });
}

