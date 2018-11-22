webpackJsonp([0x65e474593adf],{3968:function(e,t){e.exports={data:{challengeNode:{title:"Understand the Immediately Invoked Function Expression (IIFE)",description:["JavaScript 中的一个常见模式就是，函数在声明后立刻执行：",'<blockquote>(function () {<br>&nbsp;&nbsp;console.log("Chirp, chirp!");<br>})(); // 这是一个立即执行的匿名函数表达式<br>// 立即输出 "Chirp, chirp!"</blockquote>',"请注意，函数没有名称，也不存储在变量中。函数表达式末尾的两个括号（）导致它被立即执行或调用。这种模式被叫做<code>自执行函数表达式</code>或者<code>IIFE</code>。","<hr>","重写函数<code>makeNest</code>，并删除它的调用，取而代之是一个匿名的<code>自执行函数表达式</code>（<code>IIFE</code>）。"],challengeType:1,fields:{slug:"/javascript-algorithms-and-data-structures/object-oriented-programming/understand-the-immediately-invoked-function-expression-iife",blockName:"Object Oriented Programming",tests:[{text:"该函数应该是匿名的。",testString:"assert(/\\(\\s*?function\\s*?\\(\\s*?\\)\\s*?{/.test(code), '该函数应该是匿名的。');"},{text:"函数应该在表达式的末尾有括号，以便立即调用它。",testString:"assert(/}\\s*?\\)\\s*?\\(\\s*?\\)/.test(code), '函数应该在表达式的末尾有括号，以便立即调用它。');"}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:'function makeNest() {\n  console.log("A cozy nest is ready");\n}\n\nmakeNest(); ',head:"",tail:""},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/javascript-algorithms-and-data-structures/object-oriented-programming/use-an-iife-to-create-a-module",id:"587d7db2367417b2b2512b8b"},slug:"/javascript-algorithms-and-data-structures/object-oriented-programming/understand-the-immediately-invoked-function-expression-iife"}}}});
//# sourceMappingURL=path---javascript-algorithms-and-data-structures-object-oriented-programming-understand-the-immediately-invoked-function-expression-iife-712cacd391f658dbe3a8.js.map