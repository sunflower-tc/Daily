/**
 * Created by sunflower on 2016/9/1.
 */
/*
* author:sunflower
* method:插入排序
* thinking:首先拿出第一张牌放在左手
 依次将其他的牌拿出来跟左手的牌倒着比较,从左手的倒数第一张牌开始比较,
 如果左手的牌比当前拿的牌大,则一直往前比较....直到遇到左手的牌比当前这张牌大,
 如果一直比到头也没发现比当前这张牌小,则把当前这张牌放在首位置
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