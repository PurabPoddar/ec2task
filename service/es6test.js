const eg1 = ()=> {
    let a = 4;
    console.log('This is a' , a);
    return {a};
};


const eg2 = () => {
    //Template strings
    const name = 'Purab'
    const message = 'Hello ${name}'
    console.log(message)
    return {message};
};

const eg3 = () => {
    // spread operator
    const a = [ 1, 2 ]
    const b = [ 3, 4 ]

    const c = [ ...a, ...b ]
    return {c}
};

const eg4 = () => {
    // calculation
    const a = 4
    const b = 2
    const c = a*b
    return {c}
};

const eg5 = () => {
    // spread operator
    const a = {
        firstName: "Itachi",
        lastName: "Uchiha",
    }
    
    const b = {
        ...a,
        lastName: "Uzumaki",
        canSing: true,	
    }
    return{a,b}
};

const eg6 =() => {
    // generating  a random number
    const a = Math.random();
    return{a};
};

const eg7 = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})

eg7.then((message) => {
    return {message}
}).catch((message) => {
    return {message}
})

const eg8 = () => {
    let a = 30
    if (a > 20){
        a = a++;
    }else{
        console.log("Nothing here");
    }
    return{a}
};

const eg9 = () => {
    const obj1 = { a: 1 }
    const obj2 = { b: 2 }
    const obj3 = Object.assign({}, obj1, obj2)
    return{obj3};
};

const eg10 = () => {
    const a = 2
    const b = 5

    const obj = { a, b }

// Before es6:
// obj = { a: a, b: b }

    return{obj}
};










module.exports = {eg1,eg2,eg3,eg4,eg5,eg6,eg7,eg8,eg9,eg10};