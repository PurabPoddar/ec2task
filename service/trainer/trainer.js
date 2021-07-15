const find = require('../../core/v1/trainer/find');
const save = require('../../core/v1/trainer/save');

const {findAll} = new find.FindClass();
const {saveData} = new save.SaveClass();

const findStudent = async()=>{
    const result = await findAll();
    const usernames = result.map((item)=> {
        console.log('item', JSON.stringify(item));
        return {
            firstName: item.firstName,
            lastName: item.lastName
        }
        
    })
    return usernames;

};


const saveStudent = async(body) => {
    try{
        const data = await saveData(body);
        return data;
    }catch (error) {
        console.log('ERROR',error);
    }
    
};



module.exports = { findStudent, saveStudent }