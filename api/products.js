import express from "express";
import FileOperation     from "../domain/FileOperation";
const router = express.Router();
const dataPath = 'D:\\Work_Hari\\Node\\NodeApplication\\Data\\users.json';
var fs = require('fs');
readFileData();

// CREATE
router.post('/add', (req, res) => {  
    let fileoperation = new FileOperation(dataPath,fs);
    var promiseObj = fileoperation.readData(dataPath,fs);
    var promiseReturnData;
    promiseObj.then((promiseReturnData)=> {
      var  obj = JSON.parse(promiseReturnData);
        const newUserId = Object.keys(obj).length;
        obj[newUserId.toString()] = req.body;
        let fileoperation = new FileOperation(dataPath,fs);
        var fileWrite = fileoperation.addRowFile(dataPath,fs,JSON.stringify(obj));
        var fileData;
        fileWrite.then((fileData)=> {
            console.log("fileData.......",fileData)
        }).catch((err)=>{
            console.log("err.......",err)
        })
   
    }).catch((err)=>{
        console.log("err.......",err)
    })
 
});

router.post('/:id', (req, res) => {
       
    let fileoperation = new FileOperation(dataPath,fs);
    var promiseObj = fileoperation.readData(dataPath,fs);
    var promiseReturnData;
    promiseObj.then((promiseReturnData)=> {
        const userId =  req.body.id;
        const fileData= JSON.parse(promiseReturnData);
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
    var fileWrite = fileoperation.addRowFile(dataPath,fs,JSON.stringify(fileData));
     fileData;
     fileWrite.then((fileData)=> {
        console.log("fileData.......",fileData)
    }).catch((err)=>{
        console.log("err.......",err)
    })   
    }).catch((err)=>{
        console.log("err.......",err)
    })
});    

// DELETE
router.post('/delete/:id', (req, res) => {
    let fileoperation = new FileOperation(dataPath,fs);
    var promiseObj = fileoperation.readData(dataPath,fs);
    var promiseReturnData;
    promiseObj.then((promiseReturnData)=> {
        const fileDataTemp= JSON.parse(promiseReturnData);
         var index = fileDataTemp.findIndex(function(item, i){
        return item.id === req.body.id
        
    });
    delete fileDataTemp[index];
    let fileoperation = new FileOperation(dataPath,fs);
    var fileWrite = fileoperation.addRowFile(dataPath,fs,JSON.stringify(fileDataTemp));
    var promiseReturnFileData;
    fileWrite.then((promiseReturnFileData)=> {
        console.log("fileData.......",promiseReturnFileData)
    }).catch((err)=>{
        console.log("err.......",err)
    })   
    }).catch((err)=>{
        console.log("err.......",err)
    })
});



module.exports = router;
function readFileData() {
    router.get("/", (req, res) => {
        var p = getData(dataPath, "utf-8")
        var dat;
        p.then((dat)=> {
       //     console.log(".......",dat)
            res.send(dat);
        }).catch((err)=>{
            console.log("err.......",err)
        })
       
    });
}
    function getData(fileName, type) {
        return new Promise(function(resolve, reject){
          fs.readFile(fileName, type, (err, data) => {
         //     console.log("I am here...",data)
              err ? reject(err) : resolve(data);
          });
        });
      }


