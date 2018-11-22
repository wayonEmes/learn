webpackJsonp([0xcbc20de3d6aa],{3859:function(e,n){e.exports={data:{challengeNode:{title:"Write Reusable JavaScript with Functions",description:["在 JavaScript 中，我们可以把代码的重复部分抽取出来，放到一个<dfn>函数</dfn>中。","举个例子：",'<blockquote>function functionName() {<br>&nbsp;&nbsp;console.log("Hello World");<br>}</blockquote>',"你可以通过函数名<code>functionName</code>加上后面的小括号来调用这个函数，就像这样：","<code>functionName();</code>",'每次调用函数时，它都会在控制台上打印消息<code>"Hello World"</code>。每次调用函数时，大括号之间的所有代码都将被执行。',"<hr>",'<ol><li>先创建一个名为<code>reusableFunction</code>的函数，这个函数可以打印<code>"Hi World"</code>到控制台上。</li><li>然后调用这个函数。</li></ol>'],challengeType:1,fields:{slug:"/javascript-algorithms-and-data-structures/basic-javascript/write-reusable-javascript-with-functions",blockName:"Basic JavaScript",tests:[{text:"<code>reusableFunction</code>应该是一个函数",testString:"assert(typeof reusableFunction === 'function', '<code>reusableFunction</code>应该是一个函数');"},{text:'<code>reusableFunction</code>应该在控制台中输出 "Hi World"',testString:'assert("Hi World" === logOutput, \'<code>reusableFunction</code>应该在控制台中输出 "Hi World"\');'},{text:"在你定义<code>reusableFunction</code>之后记得调用它",testString:"assert(/^\\s*reusableFunction\\(\\)\\s*;/m.test(code), '在你定义<code>reusableFunction</code>之后记得调用它');"}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:'// 示例\nfunction ourReusableFunction() {\n  console.log("Heyya, World");\n}\n\nourReusableFunction();\n\n// 请把你的代码写在这条注释以下\n',head:"var logOutput = \"\";\nvar originalConsole = console\nfunction capture() {\n    var nativeLog = console.log;\n    console.log = function (message) {\n        if(message && message.trim) logOutput = message.trim();\n        if(nativeLog.apply) {\n          nativeLog.apply(originalConsole, arguments);\n        } else {\n          var nativeMsg = Array.prototype.slice.apply(arguments).join(' ');\n          nativeLog(nativeMsg);\n        }\n    };\n}\n\nfunction uncapture() {\n  console.log = originalConsole.log;\n}\n\ncapture();",tail:'uncapture();\n\nif (typeof reusableFunction !== "function") { \n  (function() { return "reusableFunction is not defined"; })();\n} else {\n  (function() { return logOutput || "console.log never called"; })();\n}'},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/javascript-algorithms-and-data-structures/basic-javascript/passing-values-to-functions-with-arguments",id:"56bbb991ad1ed5201cd392cf"},slug:"/javascript-algorithms-and-data-structures/basic-javascript/write-reusable-javascript-with-functions"}}}});
//# sourceMappingURL=path---javascript-algorithms-and-data-structures-basic-javascript-write-reusable-javascript-with-functions-8892edd17001d6a19b63.js.map