webpackJsonp([0xc54f2a09193c],{3867:function(e,t){e.exports={data:{challengeNode:{title:"Catch Use of Assignment Operator Instead of Equality Operator",description:["分支程序，即在满足某些条件时执行不同操作的程序，依赖于 JavaScript 中的<code>if</code>，<code>else if</code>、<code>else</code>语句。条件有时采取测试一个结果是否等于一个值的形式。","这种逻辑可以表述为“如果 x 等于 y ，则......”，听起来像是可以使用<code>=</code>（即赋值运算符）。然而，这会导致程序中流程出问题。","如前面的挑战所述，JavaScript 中的赋值运算符 (<code>=</code>) 是用来为变量名赋值的。并且<code>==</code>和<code>===</code>运算符检查相等性（三等号<code>===</code>是用来测试是否严格相等的，严格相等的意思是值和类型都必须相同）。",'下面的代码将<code>x</code>赋值为 2，表达式<code>x = y</code>会在执行后得到<code>true</code>。JavaScript 会把大部分的值都视为<code>true</code>，除了所谓的 "falsy" 值，即：<code>false</code>，<code>0</code>，<code>""</code>（空字符串），<code>NaN</code>，<code>undefined</code>和<code>null</code>。','<blockquote>let x = 1;<br>let y = 2;<br>if (x = y) {<br>&nbsp;&nbsp;// 除了 "falsy" 值以外 y 为任意值时这个代码块都将执行<br>} else {<br>&nbsp;&nbsp;// 按本例用意这个代码块应该执行（但其实不会）。<br>}</blockquote>',"<hr>","修复条件语句，以便程序运行正确的分支，并给<code>result</code>赋上正确的值。"],challengeType:1,fields:{slug:"/javascript-algorithms-and-data-structures/debugging/catch-use-of-assignment-operator-instead-of-equality-operator",blockName:"Debugging",tests:[{text:"你应该修复条件语句，使其判断是否相等,而不是赋值。",testString:"assert(result == \"Not equal!\", '你应该修复条件语句，使其判断是否相等,而不是赋值。');"},{text:"条件语句可以使用<code>==</code>或<code>===</code>来测试是否相等。",testString:"assert(code.match(/x\\s*?===?\\s*?y/g), '条件语句可以使用<code>==</code>或<code>===</code>来测试是否相等。');"}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:'let x = 7;\nlet y = 9;\nlet result = "to come";\n\nif(x = y) {\n  result = "Equal!";\n} else {\n  result = "Not equal!";\n}\n\nconsole.log(result);',head:"",tail:""},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/javascript-algorithms-and-data-structures/debugging/catch-missing-open-and-closing-parenthesis-after-a-function-call",id:"587d7b85367417b2b2512b38"},slug:"/javascript-algorithms-and-data-structures/debugging/catch-use-of-assignment-operator-instead-of-equality-operator"}}}});
//# sourceMappingURL=path---javascript-algorithms-and-data-structures-debugging-catch-use-of-assignment-operator-instead-of-equality-operator-45412f6b666012d91f6a.js.map