webpackJsonp([0xe5dced3d36bf],{3844:function(e,t){e.exports={data:{challengeNode:{title:"Understanding Case Sensitivity in Variables",description:["在 JavaScript 中所有的变量和函数名都是大小写敏感的。要区别对待大写字母和小写字母。","<code>MYVAR</code>与<code>MyVar</code>和<code>myvar</code>是截然不同的变量。这有可能导致出现多个相似名字的的变量。所以强烈地建议你，为了保持代码清晰不要使用这一特性。","<h4>最佳实践</h4>","使用<dfn>驼峰命名法</dfn>来书写一个 Javascript 变量，在<dfn>驼峰命名法</dfn>中，变量名的第一个单词的首写字母小写，后面的单词的第一个字母大写。","<strong>示例：</strong>","<blockquote>var someVariable;<br>var anotherVariableName;<br>var thisVariableNameIsTooLong;</blockquote>","<hr>","修改已声明的变量，让它们的命名符合<dfn>驼峰命名法</dfn>的规范。"],challengeType:1,fields:{slug:"/javascript-algorithms-and-data-structures/basic-javascript/understanding-case-sensitivity-in-variables",blockName:"Basic JavaScript",tests:[{text:"<code>studlyCapVar</code>应该被定义并且值为<code>10</code>",testString:"assert(typeof studlyCapVar !== 'undefined' && studlyCapVar === 10, '<code>studlyCapVar</code>应该被定义并且值为<code>10</code>');"},{text:'<code>properCamelCase</code>应该被定义并且值为<code>"A String"</code>',testString:"assert(typeof properCamelCase !== 'undefined' && properCamelCase === \"A String\", '<code>properCamelCase</code>应该被定义并且值为<code>\"A String\"</code>');"},{text:"<code>titleCaseOver</code>应该被定义并且值为<code>9000</code>",testString:"assert(typeof titleCaseOver !== 'undefined' && titleCaseOver === 9000, '<code>titleCaseOver</code>应该被定义并且值为<code>9000</code>');"},{text:"<code>studlyCapVar</code>在声明和赋值时都应该使用驼峰命名法。",testString:"assert(code.match(/studlyCapVar/g).length === 2, '<code>studlyCapVar</code>在声明和赋值时都应该使用驼峰命名法。');"},{text:"<code>properCamelCase</code> 在声明和赋值时都应该使用驼峰命名法。",testString:"assert(code.match(/properCamelCase/g).length === 2, '<code>properCamelCase</code>在声明和赋值时都应该使用驼峰命名法。');"},{text:"<code>titleCaseOver</code> 在声明和赋值时都应该使用驼峰命名法。",testString:"assert(code.match(/titleCaseOver/g).length === 2, '<code>titleCaseOver</code>在声明和赋值时都应该使用驼峰命名法。');"}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:'// 初始化变量\nvar StUdLyCapVaR;\nvar properCamelCase;\nvar TitleCaseOver;\n\n// 给变量赋值\nSTUDLYCAPVAR = 10;\nPRoperCAmelCAse = "A String";\ntITLEcASEoVER = 9000;',head:"",tail:""},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/javascript-algorithms-and-data-structures/basic-javascript/add-two-numbers-with-javascript",id:"56533eb9ac21ba0edf2244ab"},slug:"/javascript-algorithms-and-data-structures/basic-javascript/understanding-case-sensitivity-in-variables"}}}});
//# sourceMappingURL=path---javascript-algorithms-and-data-structures-basic-javascript-understanding-case-sensitivity-in-variables-6adda8e6c63466cba520.js.map