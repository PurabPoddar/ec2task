const STUDENTS = require('../../../models').students

class Find {
    
    async findAll (){
        try {
            const result = await STUDENTS.findAll();
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
    FindClass: Find,
};