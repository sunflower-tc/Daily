/*
 *�����ҳ������ƽ���
 *tips�������е�ĳһ���������������ȵĻ���
 *˼·1��ȡ��left����right �Ƚ�
 * right��ֵͨ��sum-left-ary[i];
 * left��ֵ��left+=ary[i] ����ѭ����ÿһ��
 * */
var ary = [1, 7, 7, 2, 1];
Array.prototype.sum = function () {
    var total = null;
    for (var i = 0; i < this.length; i++) {
        var cur = this[i];
        if (!isNaN(cur)) {//1.����Ч�� (false) 2.!false ->true 3.if�����ж�
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
* ˼·2�����赱ǰ��ƽ�����i
* ��ߵ�ֵ��������Χ0-i
* ����� i-ary.length
* */