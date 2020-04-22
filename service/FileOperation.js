const dataPath = 'C:\\Users\\1022923\\.npmrc';


var PropertiesReader = require("properties-reader");
const homeDir = require('os').homedir();
var properties = PropertiesReader(homeDir + "/.npmrc");

class FileOperation {
    /**
     * Method for data update
     * @param {*} key 
     * @param {*} value 
     */
    static updateData(key, value) {
        var properties = new PropertiesReader(homeDir + "/.npmrc");
        let jsonResult = {};
        return new Promise((resolve, reject) => {
            if (key != null && value != null) {
                properties.set(key, value);
                properties.save(homeDir + "/.npmrc");
                var allProps = properties.getAllProperties();
                jsonResult = allProps;
                resolve(jsonResult);
            } else {
                reject("Failed");
            }
        })
    }
    /**
     * Method for adding new data
     * @param {*} key 
     * @param {*} value 
     */
    static addNewData(key, value) {
        var properties = new PropertiesReader(homeDir + "/.npmrc");
        // var allProps = properties.getAllProperties();
        let jsonResult = {};
        return new Promise((resolve, reject) => {
            if (key != null && value != null) {
                properties.set(key, value);
                properties.save(homeDir + "/.npmrc");
                var allProps = properties.getAllProperties();
                jsonResult = allProps;
                resolve(jsonResult);
            } else {
                reject("Failed");
            }
        })
    }
    /**
     * method for getting data
     */
    static getTableData() {
        var properties = new PropertiesReader(homeDir + "/.npmrc");
        var allProps = properties.getAllProperties();
        let jsonResult = {};

        return new Promise((resolve, reject) => {
            if (allProps != null) {
                console.log("Length of the Properties inside getConfigurations() :" + properties.length);
                console.log("Values from the file :" + allProps);
                jsonResult = allProps;
                resolve(jsonResult);
            } else {
                reject("Failed");
            }
        })
    }
    /**
     * Method for update data
     * @param {*} key 
     * @param {*} value 
     */
    static updateData(key, value) {
        var properties = new PropertiesReader(homeDir + "/.npmrc");
        let jsonResult = {};
        return new Promise((resolve, reject) => {
            if (key != null && value != null) {
                properties.set(key, value);
                properties.save(homeDir + "/.npmrc");
                var allProps = properties.getAllProperties();
                jsonResult = allProps;
                resolve(jsonResult);
            } else {
                reject("Failed");
            }
        })
    }
    /**
     * Methode for delete the data
     * @param {*} key 
     */
    static deleteData(key) {

        console.log("New File Created !!!", properties)
        return new Promise((resolve, reject) => {
            var properties = new PropertiesReader(homeDir + "/.npmrc");
            if (key != null) {
                var fs = require('fs');
                var fileData;
                var result = properties.getAllProperties();
                let keys = Object.keys(result);
                let index = Object.keys(result).indexOf(key);
                delete result[keys[index]];
                fileData = result;
                for (var el in result) {
                    var buffer = new Buffer(el + " = " + result[el] + '\n');
                    console.log("buffer..", buffer)
                    fs.writeFile(dataPath, buffer, "utf-8", function (err, data) {
                        if (err) reject(err);
                        else resolve(data);
                    });
                }
            } else {
                reject("Failed");
            }
        })
    }

}

export default FileOperation;