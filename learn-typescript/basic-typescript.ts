let done: boolean = false;

let age: number = 22;

let myName: string = 'man';

let undefine: undefined = undefined;
let none: null = null;

// undefined和null为各数据类型的子类型，也就是任何已经定义了类型的变量其实都可以默认的赋值为undefined或是null。就像普通js写法一样给初声明的变量赋值为null。
let num: number = undefined;
let message: string = null;




let notSure: any = 123
notSure = true
notSure = 'hello'
notSure.firstName
notSure.getFirstName()


let numberOrString: number | string = 123
numberOrString = 'hello'


let arrOfNumber: number[] = [1, 2, 3]



let users: [string, number] = ['man', 22]