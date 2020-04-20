
'use strict';
module.exports =  class FileOperation {
   // variables
    dataPath = 'D:\\Work_Hari\\Node\\Work\\Data\\users.json';
    returnJson =false;
  
     
     constructor(dataPath,fs){
        this.dataPath= dataPath;
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

    
 readData(dataPath, fs) {
    return (Promise, returnJson = false, filePath = dataPath, encoding = 'utf8') => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                throw err;
            }
            Promise(returnJson ? JSON.parse(data) : data);
        });
    };
}

readFileTest(filename,fs, enc){
    return new Promise(function (fulfill, reject){
      fs.readFile(filename, enc, function (err, res){
        if (err) reject(err);
        else {
        
            fulfill(JSON.parse(res));
        }
      });
    });
  }
}