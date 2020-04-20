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
}

export default FileOperation;