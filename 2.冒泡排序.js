/**
 * Created by sunflower on 2016/9/1.
 */
/*
 * ���������
 * author:sunflower
 * Method��ð������
 * thinking��ǰһ��ͺ�һ��Ƚϣ����ǰһ��Ⱥ�һ���Ļ��ͽ�������λ��
 * ��ν�����˼������������ˮ����������ˮ�����ݣ���������һ���ձ���
 */
Array.prototype.bubbleSort = function () {
    for (var i = 0; i < this.length - 1; i++) {
        var temp = null;//�ձ���
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





