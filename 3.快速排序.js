/*
 * author:sunflower
 * method :快速排序
 * thinking: 取数组的中间值作为基点，比他小的放在左边，比他大的放在右边
 */
Array.prototype.quickSort = function () {
    if (this.length <= 1) {
        return this;
    }
    var pointIndex = Math.floor(this.length / 2);
    var pointValue = this.splice(pointIndex, 1);
    var centerValue = pointValue[0];
    var left = [];
    var right = [];

    for (var i = 0; i < this.length; i++) {
        var cur = this[i];
        cur < centerValue ? left.push(cur) : right.push(cur);

    }

    return left.quickSort().concat(pointValue, right.quickSort());

}
var ary = [3, 2, 1, 10, 7, 8, 9];
console.log(ary.quickSort());
