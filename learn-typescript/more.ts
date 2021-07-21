// 类型别名
type funNumberType = (x: number, y: number) => number

function sum(x: number, y: number): number {
  return x + y;
}

const sum2: funNumberType = sum;


type funStringType = () => string

type composeType = string | funStringType

function getName(n: composeType) {
  if (typeof n === 'string') {
    return n
  }else{
    return n()
  }
}


// 类型断言
function getlength(p: number | string): number {
  // return p.length    // 错误，因为无法确认参数是否为字符串

  if ((<string>p).length) {
    return (<string>p).length
  }else{
    return (<number>p).toString().length
  }

}

const len = getlength(1234)

console.log(len)