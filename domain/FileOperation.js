class FileOperation {
    
    constructor(dataPath,fs) {
        this.dataPath=dataPath;
        this.fs=fs;
       
    }

    addRow(dataPath, fs) {
        return (fileData, Promise) => {
            var encoding = 'utf8'
            fs.writeFile(this.dataPath, fileData, this.encoding, (err) => {
                if (err) {
                    throw err;
                }
                Promise();
            });
        };
    }

    addRowFile(dataPath, fs,fileData) {
        return new Promise(function(resolve, reject) {
            var fs = require('fs');
            var encoding = 'utf8'
            fs.writeFile(dataPath, fileData,encoding, function(err,data) {
               if (err) reject(err);
               else resolve(data);
            });
        });
    }
 
 
    readData(dataPath,fs) {
     
       
        return new Promise(function(resolve, reject){
            var fs = require('fs');
            fs.readFile(dataPath, "utf-8", (err, data) => {
        //        console.log("I am here...",data)
                err ? reject(err) : resolve(data);
            });
          });
    }

   
}

export default FileOperation;