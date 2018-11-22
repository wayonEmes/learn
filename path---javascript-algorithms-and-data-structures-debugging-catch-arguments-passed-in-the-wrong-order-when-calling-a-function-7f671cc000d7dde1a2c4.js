webpackJsonp([0xbdef9c98d252],{3861:function(e,t){e.exports={data:{challengeNode:{title:"Catch Arguments Passed in the Wrong Order When Calling a Function",description:["继续讨论调用函数，需要注意的下一个 bug 是函数的参数传递顺序错误。 如果参数分别是不同的类型，例如接受数组和整数两个参数的函数，参数顺序传错就可能会引发运行时错误。对于接受相同类型参数的函数，传错参数也会导致逻辑错误或运行结果错误。确保以正确的顺序提供所有必需的参数以避免这些问题。","<hr>","函数<code>raiseToPower</code>返回基数 (base) 的指数 (exponent) 次幂。不幸的是，它没有被正确调用 ———— 修改代码，使<code>power</code>的值为 8。"],challengeType:1,fields:{slug:"/javascript-algorithms-and-data-structures/debugging/catch-arguments-passed-in-the-wrong-order-when-calling-a-function",blockName:"Debugging",tests:[{text:"你应修复变量<code>power</code>，使其等于 2 的 3 次方，而不是 3 的 2 次方。",testString:"assert(power == 8, '你应修复变量<code>power</code>，使其等于 2 的 3 次方，而不是 3 的 2 次方。');"},{text:"你调用<code>raiseToPower</code>函数时，传递参数的顺序应正确。",testString:"assert(code.match(/raiseToPower\\(\\s*?base\\s*?,\\s*?exp\\s*?\\);/g), '你调用<code>raiseToPower</code>函数时，传递参数的顺序应正确。');"}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:"function raiseToPower(b, e) {\n  return Math.pow(b, e);\n}\n\nlet base = 2;\nlet exp = 3;\nlet power = raiseToPower(exp, base);\nconsole.log(power);",head:"",tail:""},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/javascript-algorithms-and-data-structures/debugging/catch-off-by-one-errors-when-using-indexing",id:"587d7b85367417b2b2512b3a"},slug:"/javascript-algorithms-and-data-structures/debugging/catch-arguments-passed-in-the-wrong-order-when-calling-a-function"}}}});
//# sourceMappingURL=path---javascript-algorithms-and-data-structures-debugging-catch-arguments-passed-in-the-wrong-order-when-calling-a-function-7f671cc000d7dde1a2c4.js.map