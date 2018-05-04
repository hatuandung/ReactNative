const x = 6;//immutable
//Pure function
const y = 5;
const addY = x => x + y; //impure
const addFireToY = x =>{y = x +5;};//impure 
const pureAdd = (x, y) => x + y;
const randomDouble = x =>Math.random()*x;//impure //Diterministic

const addALot = x =>{
    const a = pureAdd(x, 6);
    const b = pureAdd(x, 2);
    const c = pureAdd(x, 1);
    const z = x > 6 ? pureAdd(x, 1) : pureAdd(x, 2);
    return a + b + c;
}

