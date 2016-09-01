/*
 * author:sunflower
 * method :��������
 * thinking: ȡ������м�ֵ��Ϊ���㣬����С�ķ�����ߣ�������ķ����ұ�
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
