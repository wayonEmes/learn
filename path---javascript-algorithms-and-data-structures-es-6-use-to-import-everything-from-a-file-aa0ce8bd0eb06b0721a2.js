webpackJsonp([0x635f20c8b9ae],{3895:function(e,t){e.exports={data:{challengeNode:{title:"Use * to Import Everything from a File",description:["我们还可以用<code>import</code>语法从文件中导入所有的内容。",'下面是一个从同目录下的<code>"math_functions"</code>文件中导入所有内容的例子：','<blockquote>import * as myMathModule from "math_functions";<br>myMathModule.add(2,3);<br>myMathModule.subtract(5,3);</blockquote>',"让我们来分析一下这段代码：",'<blockquote>import * as object_with_name_of_your_choice from "file_path_goes_here"<br>object_with_name_of_your_choice.imported_function</blockquote>',"你可以在<code>import * as</code>之后添加任意的名称。这个方法接收到的值是一个对象，你可以使用点表示法来获取对象里具体的值。","<hr>",'下面的代码需要从同目录下的<code>"capitalize_strings"</code>文件中导入所有内容。使用提供的对象，在当前文件的顶部添加正确的<code>import *</code>语句'],challengeType:1,fields:{slug:"/javascript-algorithms-and-data-structures/es6/use--to-import-everything-from-a-file",blockName:"ES6",tests:[{text:"正确使用<code>import * as</code>语法。",testString:"assert(code.match(/import\\s+\\*\\s+as\\s+[a-zA-Z0-9_$]+\\s+from\\s*\"\\s*capitalize_strings\\s*\"\\s*;/gi), '正确使用<code>import * as</code>语法。');"}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:'"use strict";',head:"window.require = function(str) {\nif (str === 'capitalize_strings') {\nreturn {\ncapitalize: str => str.toUpperCase(),\nlowercase: str => str.toLowerCase()\n}}};",tail:""},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/javascript-algorithms-and-data-structures/es6/create-an-export-fallback-with-export-default",id:"587d7b8c367417b2b2512b57"},slug:"/javascript-algorithms-and-data-structures/es6/use--to-import-everything-from-a-file"}}}});
//# sourceMappingURL=path---javascript-algorithms-and-data-structures-es-6-use-to-import-everything-from-a-file-aa0ce8bd0eb06b0721a2.js.map