// 泛型：将某类型作为一个变量
// 比如一个需求：一个函数可以传递任意类型参数，然后这个函数返回值也是这个参数。这个时候如果我们要来事先定义参数和函数返回的类型就比较难办了。因为这个类型是可变的。这个时候怎么办呢，我们可以将类型作为一个变量处处使用，将他作为参数，又将他作为函数返回值，那么就可以统一参数和返回值

function id<T>(idNo: T): T {
  return idNo
}

console.log(id('hello'))