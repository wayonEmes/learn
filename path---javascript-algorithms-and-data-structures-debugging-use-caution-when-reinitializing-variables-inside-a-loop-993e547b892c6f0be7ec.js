webpackJsonp([20662081363014],{3870:function(e,n){e.exports={data:{challengeNode:{title:"Use Caution When Reinitializing Variables Inside a Loop",description:["有时需要在循环中保存信息，增加计数器或重置变量。一个潜在的问题是变量什么时候该重新初始化，什么时候不该重新初始化，反之亦然。如果你不小心重置了用于终止条件的变量，导致无限循环，这将特别危险。","使用<code>console.log()</code>在每个循环中打印变量值可以发现与重置相关的错误行为，或者重置变量失败。","<hr>","以下函数应该创建一个具有<code>m</code>行和<code>n</code>列“零”的二维数组。不幸的是，它没有产生预期的输出，因为<code>row</code>变量没有在外部循环中重新初始化（设置回空数组）。修改代码，使其正确地返回包含 3 行 2 列“零”的二维数组，即<code>[[0, 0], [0, 0], [0, 0]]</code>。"],challengeType:1,fields:{slug:"/javascript-algorithms-and-data-structures/debugging/use-caution-when-reinitializing-variables-inside-a-loop",blockName:"Debugging",tests:[{text:"你应将变量<code>matrix</code>设置为 3 行 2 列“零”的二维数组。",testString:"assert(JSON.stringify(matrix) == \"[[0,0],[0,0],[0,0]]\", '你应将变量<code>matrix</code>设置为 3 行 2 列“零”的二维数组。');"},{text:"变量<code>matrix</code>应有 3 行。",testString:"assert(matrix.length == 3, '变量<code>matrix</code>应有 3 行。');"},{text:"变量<code>matrix</code>每行应有 2 列。",testString:"assert(matrix[0].length == 2 && matrix[1].length === 2 && matrix[2].length === 2, '变量<code>matrix</code>每行应有 2 列。');"}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:"function zeroArray(m, n) {\n  // 创建一个具有 m 行和 n 列“零”的二维数组\n  let newArray = [];\n  let row = [];\n  for (let i = 0; i < m; i++) {\n    // 添加 m 行到 newArray\n    \n    for (let j = 0; j < n; j++) {\n      // Pushes n 个“零”到当前行以创建列\n      row.push(0);\n    }\n    // Pushes 当前里面有 n 个“零”的行到 newArray\n    newArray.push(row);\n  }\n  return newArray;\n}\n\nlet matrix = zeroArray(3, 2);\nconsole.log(matrix);",head:"",tail:""},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/javascript-algorithms-and-data-structures/debugging/prevent-infinite-loops-with-a-valid-terminal-condition",id:"587d7b86367417b2b2512b3c"},slug:"/javascript-algorithms-and-data-structures/debugging/use-caution-when-reinitializing-variables-inside-a-loop"}}}});
//# sourceMappingURL=path---javascript-algorithms-and-data-structures-debugging-use-caution-when-reinitializing-variables-inside-a-loop-993e547b892c6f0be7ec.js.map