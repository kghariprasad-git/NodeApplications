import fileoperation from "../service/FileOperation";

class applicationController {
    /**
     * Method for read file and send output to response
     * @param {*} req 
     * @param {*} res 
     */
    static getTableData(req, res) {
        var promiseObj = fileoperation.readData()
        var promiseReturnData;
        promiseObj.then((promiseReturnData) => {
            res.send(promiseReturnData);
        }).catch((err) => {
            console.log("err.......", err)
        })
    }
    /**
     * Method for add new data to file system
     * @param {*} req 
     * @param {*} res 
     */
    static addNewTableData(req, res) {
        var promiseObj = fileoperation.readData();
        var promiseReturnData;
        promiseObj.then((promiseReturnData) => {
            var obj = JSON.parse(promiseReturnData);
            const newUserId = Object.keys(obj).length;
            obj[newUserId.toString()] = req.body;
            console.log("obj", obj)
            fileoperation.addRowFile(JSON.stringify(obj));

        }).catch((err) => {
            console.log("err.......", err)
        })
    }
    /**
     * Method for edit data in the file
     * @param {*} req 
     * @param {*} res 
     */
    static editTableData(req, res) {
        var promiseObj = fileoperation.readData();
        var promiseReturnData;
        promiseObj.then((promiseReturnData) => {
            const userId = req.body.id;
            const fileData = JSON.parse(promiseReturnData);
            fileData.forEach(function (x) {
                if (x.id === userId) {
                    x.name = req.body.name;
                }
                if (x.name === req.body.name) {
                    x.id = userId;
                }
            });
            fileoperation.addRowFile(JSON.stringify(fileData));
        }).catch((err) => {
            console.log("err.......", err)
        })
    }
    /**
     * Methode for delete data from file
     * @param {*} req 
     * @param {*} res 
     */
    static deleteTableData(req, res) {
        var promiseObj = fileoperation.readData();
        var promiseReturnData;
        promiseObj.then((promiseReturnData) => {
            const fileDataTemp = JSON.parse(promiseReturnData);
            var index = fileDataTemp.findIndex(function (item, i) {
                return item.id === req.body.id
            });
            delete fileDataTemp[index];
            var fileWrite = fileoperation.addRowFile(JSON.stringify(fileDataTemp));
            var promiseReturnFileData;

        }).catch((err) => {
            console.log("err.......", err)
        })
    }
}
export default applicationController;