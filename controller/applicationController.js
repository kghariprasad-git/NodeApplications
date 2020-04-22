import fileoperation from "../service/FileOperation";

class applicationController {
    /**
     * Method for read file and send output to response
     * @param {*} req 
     * @param {*} res 
     */
    static getTableData(req, res) {
        var promiseObj = fileoperation.getTableData()
        var promiseReturnData;
        promiseObj.then((promiseReturnData) => {
         //  console.log(Object.entries(promiseReturnData),"kkkk")
            res.send((Object.entries(promiseReturnData)));
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
        var key = req.body.key;
        var value = req.body.value;
        var promiseObj = fileoperation.addNewData(key,value);
        var promiseReturnData;
        promiseObj.then((promiseReturnData) => {
            console.log("Values are saved !");
            res.status(200).send(promiseReturnData);
           // fileoperation.addRowFile(JSON.stringify(obj));

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
        var key = req.body.key;
        var value = req.body.value;
        var promiseObj = fileoperation.updateData(key,value);
        promiseObj.then((promiseReturnData) => {
            
            res.status(200).send(jsonsResult);
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
        var key = req.query.key;
        console.log("key",key)
        var promiseObj = fileoperation.deleteData(key);
        var promiseReturnData;
        promiseObj.then((promiseReturnData) => {
            res.status(200).send(promiseReturnData);

        }).catch((err) => {
            console.log("err.......", err)
        })
    }
}
export default applicationController;