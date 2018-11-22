webpackJsonp([0x7052fdbf2480],{3833:function(e,t){e.exports={data:{challengeNode:{title:"Return Early Pattern for Functions",description:["当代码执行到 return 语句时，函数返回一个结果就结束运行了，return 后面的语句不会执行。","<strong>示例</strong>",'<blockquote>function myFun() {<br>&nbsp;&nbsp;console.log("Hello");<br>&nbsp;&nbsp;return "World";<br>&nbsp;&nbsp;console.log("byebye")<br>}<br>myFun();</blockquote>','上面的代码输出"Hello"到控制台、返回 "World"，但没有输出<code>"byebye"</code>，因为函数遇到 return 语句就退出了。',"<hr>","修改函数<code>abTest</code>当<code>a</code>或<code>b</code>小于0时，函数立即返回一个<code>undefined</code>并退出。","<strong>提示</strong><br>记住<a href='http://www.freecodecamp.one/challenges/understanding-uninitialized-variables' target='_blank'><code>undefined</code>，是一个关键字，而不是一个字符串。"],challengeType:1,fields:{slug:"/javascript-algorithms-and-data-structures/basic-javascript/return-early-pattern-for-functions",blockName:"Basic JavaScript",tests:[{text:"<code>abTest(2,2)</code>应该返回 a number",testString:"assert(typeof abTest(2,2) === 'number' , '<code>abTest(2,2)</code>应该返回 a number');"},{text:"<code>abTest(2,2)</code>应该返回 <code>8</code>",testString:"assert(abTest(2,2) === 8 , '<code>abTest(2,2)</code>应该返回 <code>8</code>');"},{text:"<code>abTest(-2,2)</code>应该返回 <code>undefined</code>",testString:"assert(abTest(-2,2) === undefined , '<code>abTest(-2,2)</code>应该返回 <code>undefined</code>');"},{text:"<code>abTest(2,-2)</code>应该返回 <code>undefined</code>",testString:"assert(abTest(2,-2) === undefined , '<code>abTest(2,-2)</code>应该返回 <code>undefined</code>');"},{text:"<code>abTest(2,8)</code>应该返回 <code>18</code>",testString:"assert(abTest(2,8) === 18 , '<code>abTest(2,8)</code>应该返回 <code>18</code>');"},{text:"<code>abTest(3,3)</code>应该返回 <code>12</code>",testString:"assert(abTest(3,3) === 12 , '<code>abTest(3,3)</code>应该返回 <code>12</code>');"}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:"// 初始化变量\nfunction abTest(a, b) {\n  // 请把你的代码写在这条注释以下\n  \n  \n  \n  // 请把你的代码写在这条注释以上\n\n  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));\n}\n\n// 你可以修改这一行来测试你的代码\nabTest(2,2);",head:"",tail:""},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/javascript-algorithms-and-data-structures/basic-javascript/counting-cards",id:"56533eb9ac21ba0edf2244c4"},slug:"/javascript-algorithms-and-data-structures/basic-javascript/return-early-pattern-for-functions"}}}});
//# sourceMappingURL=path---javascript-algorithms-and-data-structures-basic-javascript-return-early-pattern-for-functions-d2e62e2cd83e27874854.js.map