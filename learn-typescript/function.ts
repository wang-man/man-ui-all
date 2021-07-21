                                  // 如果z是可选的，则这样写， z ?:number
function add(x: number, y: number, z: number = 10){   // z默认值为10
  return x + y + z
}

let result = add(3, 5);


const add2: (a: number, y: number, z?: number) =>number = add;