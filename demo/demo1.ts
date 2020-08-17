let a : number = 1;
interface Xiaojiejie {
  uname: string,
  age: number
}
// 对象类型
const xiaohong:Xiaojiejie = {
  uname:'小红',
  age:18,
}
console.log(xiaohong.age)

const Xiaojiejie:{
  uname : string ,
  age:number
} = {
  uname:'tang',
  age:18
}
// 数组类型
const xiaojiejies:string []=['123','3434','12312'];
// 对象类型
class Person{};
const  dajiao : Person = new Person();

const jianxiao :()=>string = ()=>{return '213123'}
console.log('修改');