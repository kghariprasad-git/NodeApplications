const dataPath = 'D:\\Work_Hari\\Node\\NodeApplication\\Data\\users.json';
class FileOperation {

    /**
     * Methode for adding new data to file
     * @param {*} fileData 
     */
    static addRowFile(fileData) {
        return new Promise(function (resolve, reject) {
            var fs = require('fs');
            var encoding = 'utf8'
            fs.writeFile(dataPath, fileData, encoding, function (err, data) {
                if (err) reject(err);
                else resolve(data);
            });
        });
    }

    /**
     * Method for reading data from file.
     */
    static readData() {
        return new Promise(function (resolve, reject) {
            var fs = require('fs');
            fs.readFile(dataPath, "utf-8", (err, data) => {
                // console.log("I am here...",data)
                err ? reject(err) : resolve(data);
            });
        });
    }


}

export default FileOperation;