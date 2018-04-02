"use strict";
//从大到小排序
var arr=[1,2,3,4,5,99,77,44,33,55,11];
var temp=0;
var m=0;
var n=0;
//普通的 外循环11次 内循环10次 共110次
for (var i=0;i<arr.length;i++){
    for(var j=0;j<arr.length-1;j++){
        if(arr[j]<arr[j+1]){
           temp=arr[j];
           arr[j]=arr[j+1];
           arr[j+1]=temp;
        }
        m++;
    }
    n++;
}
console.log("m: "+m+", n: "+n);
//2.
var arr=[1,2,3,4,5,99,77,44,33,55,11];
var temp=0;
var m=0;
var n=0;
//改进 因为每次的最后一个都是最小的 所以内循环次数可以改进
for (var i=0;i<arr.length;i++){
    for(var j=0;j<arr.length-1-i;j++){
        if(arr[j]<arr[j+1]){
            temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
        m++;
    }
    n++;
}
console.log("m: "+m+", n: "+n);
//3.

var arr=[5,4,3,2,1];
var temp=0;
var m=0;
var n=0;


//最终版 外循环也可以改进 如果已经排好序了就不用交换了
for (var i=0;i<arr.length;i++){
    var bool=true;
    for(var j=0;j<arr.length-1-i;j++){
        if(arr[j]<arr[j+1]){
            temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
            bool=false;
        }
        m++;
    }
    n++;
    if(bool){
        break;
    }
}
console.log("m: "+m+", n: "+n);