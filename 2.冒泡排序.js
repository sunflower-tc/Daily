/**
 * Created by sunflower on 2016/9/1.
 */
/*
 * 数组的排序
 * author:sunflower
 * Method：冒泡排序
 * thinking：前一项和后一项比较，如果前一项比后一项大的话就交换俩者位置
 * 如何交换：思想我们有俩杯水，交换两杯水的内容；可以引入一个空杯子
 */
Array.prototype.bubbleSort = function () {
    for (var i = 0; i < this.length - 1; i++) {
        var temp = null;//空杯子
        for (var j = 0; j < this.length - 1 - i; j++) {
            if (this[j] > this[j + 1]) {
                temp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = temp;
            }
        }
    }
    return this;
};
ary = [3, 2, 1];
console.log(ary.bubbleSort());





