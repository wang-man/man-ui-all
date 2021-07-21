class Animal {
  constructor(name: string) {
    this.name = name;
  }
  name: string = '';

  run(){
    return `${this.name} is running`
  }
}


class Dog extends Animal {
  legs: number = 4;
  // constructor(name) {
  //   super(name);
  // }

  run(){
    return `汪汪，${super.run()}`     // 子类的super有两种作用，1是代表父类的构造函数，2是将父类当作对象，因此可以引用父类的方法
  }
}

const xiaohei = new Dog('小黑');
console.log(xiaohei.run())


interface radio {
  switchRadio(): void;
}

interface mattery {
  getMattery(): void;
}

class Car implements radio {
  switchRadio(){}
}

class Cellphone implements radio, mattery {
  switchRadio(){}
  getMattery(){}
}