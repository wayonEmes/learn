webpackJsonp([0xe6b644385905],{4053:function(e,d){e.exports={data:{challengeNode:{title:"Create a Gradual CSS Linear Gradient",description:["HTML 元素的背景色并不局限于单色。CSS 还提供了颜色过渡，也就是渐变。可以通过<code>background</code>里面的<code>linear-gradient()</code>来实现线性渐变，下面是它的语法：","<code>background: linear-gradient(gradient_direction, 颜色 1, 颜色 2, 颜色 3, ...);</code>","第一个参数指定了颜色过渡的方向 - 它的值是角度，90deg 代表垂直渐变，45deg 的渐变角度和反斜杠方向差不多。剩下的参数指定了渐变颜色的顺序：","例子：","<code>background: linear-gradient(90deg, red, yellow, rgb(204, 204, 255));</code>","<hr>","使用<code>linear-gradient()</code>给<code>div</code>添加<code>background</code>渐变色，渐变角度 35deg，从<code>#CCFFFF</code>过渡到<code>#FFCCCC</code>。","<strong>注意</strong><br>有很多种方式指定颜色值，如<code>rgb()</code>或者<code>hsl()</code>。在本关里请使用 hex 颜色码。"],challengeType:0,fields:{slug:"/responsive-web-design/applied-visual-design/create-a-gradual-css-linear-gradient",blockName:"Applied Visual Design",tests:[{text:"<code>div</code>元素应该有一个指定方向和颜色的<code>linear-gradient</code><code>background</code>渐变色。",testString:"assert(code.match(/background:\\s*?linear-gradient\\(35deg,\\s*?(#CCFFFF|#CFF),\\s*?(#FFCCCC|#FCC)\\);/gi), '<code>div</code>元素应该有一个指定方向和颜色的<code>linear-gradient</code><code>background</code>渐变色。');"}]},required:[],files:{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:"<style>\n\n  div{ \n    border-radius: 20px;\n    width: 70%;\n    height: 400px;\n    margin: 50px auto;\n    \n  }\n\n</style>\n\n<div></div>",head:"",tail:""},indexjs:null,indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/responsive-web-design/applied-visual-design/use-a-css-linear-gradient-to-create-a-striped-element",id:"587d78a5367417b2b2512ad6"},slug:"/responsive-web-design/applied-visual-design/create-a-gradual-css-linear-gradient"}}}});
//# sourceMappingURL=path---responsive-web-design-applied-visual-design-create-a-gradual-css-linear-gradient-11659b7ea8c7a492f716.js.map