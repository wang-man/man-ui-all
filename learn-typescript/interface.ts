// 看过了基本类型的约束，对象是怎么使用typescript来约束成员类型的呢，这个时候就用到了接口interface
// interface 用来给对象约束类型


interface studentType {
  readonly id: number;    // readonly表示只读，不可再被赋值
  name: string;
  age: number;
  mark ?: number;       // ？表示此成员可选
}

// 我将创建一个变量，他各成员类型都按照接口studentType的约束，这个时候就这样使用：
let studentMan: studentType = {
  name: 'man',
  age: 22,
  id: 1,
  mark: 99
}

// studentMan.id = 2;   // 给id赋值则不允许