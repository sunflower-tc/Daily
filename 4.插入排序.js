/**
 * Created by sunflower on 2016/9/1.
 */
/*
* author:sunflower
* method:��������
* thinking:�����ó���һ���Ʒ�������
 ���ν����������ó��������ֵ��Ƶ��űȽ�,�����ֵĵ�����һ���ƿ�ʼ�Ƚ�,
 ������ֵ��Ʊȵ�ǰ�õ��ƴ�,��һֱ��ǰ�Ƚ�....ֱ���������ֵ��Ʊȵ�ǰ�����ƴ�,
 ���һֱ�ȵ�ͷҲû���ֱȵ�ǰ������С,��ѵ�ǰ�����Ʒ�����λ��
* */
Array.prototype.insertSort=function(){
       var left=[];
      var res=this.splice(0,1)[0];
    left.push(res);
    for(var i=0;i<this.length;i++){
          var cur=this[i];
        for(var j=left.length-1;j>=0;){
             if(left[j]>cur){
                 j--;
                 if(j==-1){
                     left.unshift(cur);
                 }
             }else{
                   left.splice(j+1,0,cur);
                 break;
             }
        }
    }
    return left;
}
var ary=[3,2,1];
console.log(ary.insertSort());