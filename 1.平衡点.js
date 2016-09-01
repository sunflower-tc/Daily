/*
 *需求找出数组的平衡点
 *tips：数组中的某一项让数组的两边相等的基点
 *思路1：取出left，和right 比较
 * right的值通过sum-left-ary[i];
 * left的值是left+=ary[i] 加上循环的每一项
 * */
var ary = [1, 7, 7, 2, 1];
Array.prototype.sum = function () {
    var total = null;
    for (var i = 0; i < this.length; i++) {
        var cur = this[i];
        if (!isNaN(cur)) {//1.是有效数 (false) 2.!false ->true 3.if条件判断
            total += Number(cur);
        }
    }
    return total;
}
var cout = ary.sum();
Array.prototype.balanceDot = function () {
    console.log(cout);
    if (this.length <= 2){
        return;
    }
    var left = null;
    var right = null;
    for (var i = 0; i < this.length; i++) {
        right = cout - left - this[i];
        console.log(i, right, left);
        if (left == right) {
            return this[i];
        }
        left += this[i];
    }
    return -1;
}
var pow = ary.balanceDot();
console.log(pow);
/*
* 思路2：假设当前的平衡点是i
* 左边的值的索引范围0-i
* 后边是 i-ary.length
* */