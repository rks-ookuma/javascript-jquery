"use strict";

// 演習２
console.log("=============演習2");
console.log("大熊隆寛");

// 演習３
console.log("=============演習3");
let lastName = "大熊";
let firstName = "隆寛";
console.log(lastName);
console.log(firstName);

// 演習４
console.log("=============演習4");
let age1 = 22;
if (age1 < 20) {
    console.log("未成年です")
}else{
    console.log("成人です")
}

// 演習4-2
console.log("=============演習4-2");
let age2 = 90;
if (0 <= age2 && age2 <= 4) {
    console.log("幼年期");
}else if (5 <= age2 && age2 <= 14) {
    console.log("少年期");
} else if(15 <= age2 && age2 <= 24){
    console.log("青年期");
}else if(25 <= age2 && age2 <= 44){
    console.log("壮年期");
}else if (45 <= age2 && age2 <= 64) {
    console.log("中年期");
}else if (65 <= age2) {
    console.log("高年期");
}

// 演習５
console.log("=============演習5");
let result = 0;
for (let i = 1; i <= 10; i++) {
    result += i;
}
console.log(result);

// 演習5－２
// process.stdout.write()は改行なしでコンソール表示させるメソッド。。。Node.jsだけっぽい
console.log("=============演習5-2");
let answer;
for (let i = 1; i <= 9; i++) {
    answer = "";
    for (let k = 1; k <= 9; k++) {
        if (i * k < 10) {
            answer = answer + " " + (i*k);
        }else{
            answer = answer + (i*k);
        }
        answer = answer + " ";
    }
    console.log(answer);
}

// 演習６
console.log("=============演習6");
let numbers = [];
for (let i = 1; i <= 10; i++) {
    numbers.push(i);
}
let sum1 = 0;
for (const number of numbers) {
    sum1 += number;
}
console.log(sum1);
let sum2 = 0;
for (let i = 0; i < numbers.length; i++) {
    sum2 += numbers[i];
}
console.log(sum2);

// 演習6－2
console.log("=============演習6-2");
let numbers2 = [];
for (let i = 1; i <= 10; i++) {
    numbers2.push(i);
}
let answer3 = "";
for (const number of numbers2) {
    if (number % 2 == 1) {
        answer3 = answer3 + number + " ";
    }
}
console.log(answer3);

// 演習7
console.log("=============演習7");
let countries = {
    "日本" : "東京",
    "スリランカ" : "スリジャヤワルダナプラコッテ",
    "タイ" : "クルンテープ・マハーナコーン・アモーンラッタナコーシン・マヒンタラーユッタヤー・マハーディロック・ポップ・ノッパラット・ラーチャタニーブリーロム・ウドムラーチャニウェートマハーサターン・アモーンピマーン・アワターンサティット・サッカタッティヤウィサヌカムプラシット"
};
console.log("日本：" + countries["日本"]);
console.log("タイ：" + countries["タイ"]);

countries["タイ"] = "バンコク";
console.log("タイ：" + countries["タイ"]);

// 演習８
console.log("=============演習8");
printName();
function printName() {
    console.log("大熊隆寛");
}

// 演習8－2
console.log("=============演習8-2");
console.log(add(5,3));
console.log(sub(5,3));
console.log(multi(5,3));
console.log(div(5,3));

function add(num1,num2) {
    return num1 + num2;
}
function sub(num1,num2) {
    return num1 - num2;
}
function multi(num1, num2){
    return num1 * num2;
}
function div(num1, num2) {
    return num1 / num2;   
}

// 演習９
console.log("=============演習9");
let printNameValue = function() {
    console.log("くまちゃん");
}
printNameValue();

// 演習９－２
console.log("=============演習9-2");
let addValue = function(num1,num2) {
    return num1 + num2;
}
let subValue = function(num1,num2) {
    return num1 - num2;
}
let multiValue = function(num1, num2){
    return num1 * num2;
}
let divValue = function(num1, num2) {
    return num1 / num2;   
}
console.log(addValue(5,3));
console.log(subValue(5,3));
console.log(multiValue(5,3));
console.log(divValue(5,3));

// 演習10
console.log("=============演習10");
var globalVal = 10; // グローバルスコープの変数
function func1() {
    var localVal = 20;
    console.log("globalVal:" + globalVal);
    console.log("localVal:" + localVal);
}
func1();
console.log("globalVal:" + globalVal);
//console.log("localVal:" + localVal); //エラー

// 演習11
console.log("=============演習11");
function func2() {
    let x = 6;
    if (true) {
        let x = 5;
    }
    console.log(x);
}
func2();
