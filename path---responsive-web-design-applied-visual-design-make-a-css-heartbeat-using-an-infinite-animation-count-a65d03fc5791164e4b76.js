webpackJsonp([0xcb6614b26d51],{4068:function(n,e){n.exports={data:{challengeNode:{title:"Make a CSS Heartbeat using an Infinite Animation Count",description:["这也是一个用<code>animation-iteration-count</code>属性创造持续动画的例子，它基于前面关卡创建的心形。","心跳动画的每一秒包含两个部分。<code>heart</code>元素（包括<code>:before</code>和<code>:after</code>）使用<code>transform</code>属性改变其大小，背景<code>div</code>使用<code>background</code>属性改变其颜色。","<hr>","给<code>back</code>class和<code>heart</code>class添加值为 infinite 的<code>animation-iteration-count</code>属性，使心脏持续跳动。<code>heart:before</code>和<code>heart:after</code>选择器不需要添加动画属性。"],challengeType:0,fields:{slug:"/responsive-web-design/applied-visual-design/make-a-css-heartbeat-using-an-infinite-animation-count",blockName:"Applied Visual Design",tests:[{text:"<code>heart</code>class 的<code>animation-iteration-count</code>属性应该赋值 infinte。",testString:"assert($('.heart').css('animation-iteration-count') == 'infinite', '<code>heart</code>class 的<code>animation-iteration-count</code>属性应该赋值 infinite。');"},{text:"<code>back</code>class 的<code>animation-iteration-count</code>属性应该赋值 infinite。",testString:"assert($('.back').css('animation-iteration-count') == 'infinite', '<code>back</code>class 的<code>animation-iteration-count</code>属性应该赋值 infinite。');"}]},required:[],files:{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:'<style>\n  .back {\n    position: fixed;\n    padding: 0;\n    margin: 0;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: white;\n    animation-name: backdiv;\n    animation-duration: 1s; \n    \n  }\n\n  .heart {\n    position: absolute;\n    margin: auto;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: pink;\n    height: 50px;\n    width: 50px;\n    transform: rotate(-45deg);\n    animation-name: beat;\n    animation-duration: 1s;\n    \n  }\n  .heart:after {\n    background-color: pink;\n    content: "";\n    border-radius: 50%;\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    top: 0px;\n    left: 25px;\n  }\n  .heart:before {\n    background-color: pink;\n    content: "";\n    border-radius: 50%;\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    top: -25px;\n    left: 0px;\n  }\n\n  @keyframes backdiv {\n    50% {\n      background: #ffe6f2;\n    }\n  }\n\n  @keyframes beat {\n    0% {\n      transform: scale(1) rotate(-45deg);\n    }\n    50% {\n      transform: scale(0.6) rotate(-45deg);\n    }\n  }\n\n</style>\n<div class="back"></div>\n<div class="heart"></div>',head:"",tail:""},indexjs:null,indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/responsive-web-design/applied-visual-design/animate-elements-at-variable-rates",id:"587d78a8367417b2b2512ae4"},slug:"/responsive-web-design/applied-visual-design/make-a-css-heartbeat-using-an-infinite-animation-count"}}}});
//# sourceMappingURL=path---responsive-web-design-applied-visual-design-make-a-css-heartbeat-using-an-infinite-animation-count-a65d03fc5791164e4b76.js.map