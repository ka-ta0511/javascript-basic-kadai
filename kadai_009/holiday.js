// 配列の宣言と値の代入を行う
const holidays = ['正月','成人の日','建国記念日','天皇誕生日','春分の日','昭和の日','憲法記念日','みどりの日','こどもの日','海の日','山の日','敬老の日','秋分の日','スポーツの日','文化の日','勤労感謝の日']

let index = 0;

// while条件を設定する
while (index !== 15) {
  // 出力する
  console.log(holidays[index]);
  index++;
}

// for条件を設定する
for (let i = 0; i < holidays.length; i++) {
  // 出力する
  console.log(holidays[i]);  
}

