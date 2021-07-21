// 枚举，用来定义一些常量，默认这些常量从0开始，当然也可以赋其他值
// 使用枚举就是使用枚举中定义的这些常量。

enum Colors {
  Red,    // 0
  Blue,   // 1
  Green   // 2
}

let c: Colors = Colors.Blue;

console.log(`c is ${c}`)



enum Resp {
  No = 1,
  Yes = 0
}

function respond(recipient: string, result: Resp) {
  console.log(`${recipient} ${result}`)
}

respond('返回结果是', Resp.Yes);