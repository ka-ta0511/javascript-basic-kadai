// 変数の宣言
let num;

// 値の代入
num = 65995

// if条件
if (num % 3 === 0 && num % 5 === 0) {
  console.log('3と5の倍数です');
}
else if (num % 3 === 0) {
  console.log('3の倍数です');
  }
else if (num % 5 === 0) {
  console.log('5の倍数です');
}
else {
  console.log(num);
}
