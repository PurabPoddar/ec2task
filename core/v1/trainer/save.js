const STUDENTS = require('../../../models').students

class Save {
    
    async saveData (body){
        try {
            const result = await STUDENTS.create(body);
            return result;
        } catch (error) {
            console.error(' *** error **** ', error);
        }
    }
}
    // findAll() {
    //     return new Promise((resolve, reject) => {
    //         TRAINEETBL.findAll().then((data) => {
    //             resolve(data)
    //         }).catch((err) => {
    //             reject(err)
    //         });
    //     });
    // }
    


module.exports = {
    SaveClass: Save,
};