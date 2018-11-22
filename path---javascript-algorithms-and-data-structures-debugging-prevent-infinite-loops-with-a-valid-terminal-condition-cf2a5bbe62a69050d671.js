webpackJsonp([72219307062235],{3868:function(e,t){e.exports={data:{challengeNode:{title:"Prevent Infinite Loops with a Valid Terminal Condition",description:["最后一个话题是可怕的无限循环。当你需要程序运行代码块一定次数或满足条件时，循环是很好的工具，但是它们需要终止条件来结束循环。无限循环可能会使浏览器冻结或崩溃，并导致程序执行混乱，没有人想要这样的结果。","在本节的介绍中有一个无限循环的例子——它没有终止条件来摆脱<code>loopy()</code>内的<code>while</code>循环。不要调用这个函数！",'<blockquote>function loopy() {<br>&nbsp;&nbsp;while(true) {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log("Hello, world!");<br>&nbsp;&nbsp;}<br>}</blockquote>',"程序员的工作是确保最终达到终止条件，该条件告诉程序何时跳出循环。有一种错误是从终端条件向错误方向递增或递减计数器变量。另一种是在循环代码中意外重置计数器或索引变量，而不是递增或递减它。","<hr>","<code>myFunc()</code>函数包含一个无限循环，因为终止条件<code>i != 4</code>永远不会为<code>false</code>(并中断循环) -<code>i</code>将每次递增 2，然后跳过 4，因为<code>i</code>是从奇数开始递增。在终端条件中输入比较运算符，使循环仅在<code>i</code>小于或等于 4 的情况下运行。"],challengeType:1,fields:{slug:"/javascript-algorithms-and-data-structures/debugging/prevent-infinite-loops-with-a-valid-terminal-condition",blockName:"Debugging",tests:[{text:"你应该在<code>for</code>循环的终止条件（中间部分）中更改比较运算符。",testString:"assert(code.match(/i\\s*?<=\\s*?4;/g).length == 1, '你应该在<code>for</code>循环的终止条件（中间部分）中更改比较运算符。');"},{text:"你应该修改比较运算符来避免出现死循环。",testString:"assert(!code.match(/i\\s*?!=\\s*?4;/g), '你应该修改比较运算符来避免出现死循环。');"}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:'function myFunc() {\n  for (let i = 1; i != 4; i += 2) {\n    console.log("Still going!");\n  }\n}',head:"",tail:""},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"/javascript-algorithms-and-data-structures/basic-data-structures",template:null,required:[],nextChallengePath:"/javascript-algorithms-and-data-structures/basic-data-structures/use-an-array-to-store-a-collection-of-data",id:"587d7b86367417b2b2512b3d"},slug:"/javascript-algorithms-and-data-structures/debugging/prevent-infinite-loops-with-a-valid-terminal-condition"}}}});
//# sourceMappingURL=path---javascript-algorithms-and-data-structures-debugging-prevent-infinite-loops-with-a-valid-terminal-condition-cf2a5bbe62a69050d671.js.map