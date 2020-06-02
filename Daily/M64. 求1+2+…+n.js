/**
 *【题目】 求 1+2+...+n ，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。
 * @param {*} n 
 */


var sumNums = function(n) {
    
    if(n <= 0) return 0;
    let sum = sumNums(n-1) + n;
    return sum;
};


var sumNums = function(n) {
    let sum = n;
    (n > 0) &&(sum = sumNums(n-1) + n);
    return sum;
};