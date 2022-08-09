// console.log("hello js!");
/*console.error("hello JS!");
console.warn("hello JS!");*/

//! Переменные - именованное хранилище данных
// let, var, const

// console.log(birth);
// const birth = "03.04.1978";
// console.log(birth);
// console.log(birth);
// birth = "03.04.1979";

// console.log(lastname);
// let lastname = "Pavlova";
// console.log(lastname);

// lastname = "Pirogov";
// console.log(lastname);

// console.log(firstname);
// var firstname = "Anna";
// console.log(firstname);
// firstname = "Elena";
// console.log(firstname);

//!Названия переменных

// нельзя цифру в начал, зарезерв нельзя
// let 5block=""
// let let
//  let first name
// let first-name
// const RED = "asda";

// Работает
// let camelCase
// let color_orange
// const RED = "#qww1313";
// const $block = "";
// const_block = "";
// const number10 = 10;

//!типф данных
//1 string
// let str = "любой текст можно";
// console.log(str);
// const typeofStr = typeof str;
// console.log(typeofStr);
// console.log(typeof str);

// let str1 = "qwe";
// let str2 = "asd";
// let str = `zxc`;

//2number

// let num1 = 100;
// const PI = 3.14;
// console.log(typeof num1);

// let num2 = "1000";

// 3 boolean
// const bool1 = true;
// const bool2 = false;

// 4 null-специальная пустота
// let error = null;

// 5 undefined
// let hello;
// console.log(hello);

// 6 object (object, array)
// let user = {
//   name: "Diana Kim",
//   age: 20,
// };

// console.log(user.name);
// console.log(user.age);

// console.log(user["name"]);

//array
// let arr = [false, 100, true, {}, [], "hello"];
// console.log(arr.length);
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[5]);

// 7 symbol
// let id = Symbol("r567u");

//8 biglnt
// let int = 341212121n;

//Math operators
// console.log(1 + 5);
// console.log(5 - 2);
// console.log(10 / 2);
// console.log(10 * 10);
// console.log(2 ** 3);
// console.log(10 % 7);

//-,/,*
// console.log("10" / "2");
//NaN -> Not A Number
// console.log("hello" / 2);

// ! +
//! concat - слияния
// console.log("10" + "2");
// console.log(10 + "2");
// console.log("10" + 2);

//!true-false значение
// console.log(Boolean(0)); //false
// console.log(Boolean(-1)); //true
// console.log(Boolean(null)); //false
// console.log(Boolean(undefined)); //false
// console.log(Boolean("hello")); //true
// console.log(Boolean("")); //false

//!сравнение (тип данных и значение должны быть равны)
//!строгое===
// console.log(3 === 5); //false
// console.log(3 === 3);//true
// console.log(3 === "3");false
// console.log(3 !== 5); //true

//!нестрогое== (значение должны быть равны)
// console.log(3 == 3); //true
// console.log("3" == 3); //true
// console.log("3" != 3); //false

//! >,<,=
// console.log(3 < 5); //true
// console.log(5 < 3);
// console.log(4 >= 4);
// console.log(4 <= 4);

//!из string в number
//! +
// let elem = "100000";
// console.log(elem);
// console.log(+elem);

//! parseInt
// let elem2 = "1000000tfgifodjbkdnm";
// console.log(parseInt(elem2));

//!parseFloat
// let elem3 = "100.2000yuiol;kjhgvj,m";
// console.log(parseFloat(elem3));

//!Number
// let elem4 = "10000";
// console.log(Number(elem4));

//!из number в string
// let num = 8990;
// console.log(typeof num.toString());
// console.log(String(num));
// console.log(num);

//! alert, promt, confirm
// alert("Hello user");
// let firstname = prompt("Как вас зовут?");
// console.log(firstname);

//интерполяция - встроенное выражение
// alert(`${firstname}, welcom`);

// let value = confirm("Вам есть 18?");
// console.log(value);

let num1 = prompt("введите 1 число");
let operator = prompt("введите математические операторы");
let num2 = prompt("введите 2 число");
let result = eval(num1 + operator + num2); //"2 + 2"
alert(result);
