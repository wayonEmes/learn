webpackJsonp([0xfc2eda47f361],{3756:function(e,s){e.exports={data:{challengeNode:{title:"Accessing Nested Objects",description:["通过串联起来的点操作符或中括号操作符来访问对象的嵌套属性。","下面是一个嵌套的对象：",'<blockquote>var ourStorage = {<br>&nbsp;&nbsp;"desk": {<br>&nbsp;&nbsp;&nbsp;&nbsp;"drawer": "stapler"<br>&nbsp;&nbsp;},<br>&nbsp;&nbsp;"cabinet": {<br>&nbsp;&nbsp;&nbsp;&nbsp;"top drawer": { <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"folder1": "a file",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"folder2": "secrets"<br>&nbsp;&nbsp;&nbsp;&nbsp;},<br>&nbsp;&nbsp;&nbsp;&nbsp;"bottom drawer": "soda"<br>&nbsp;&nbsp;}<br>};<br>ourStorage.cabinet["top drawer"].folder2;  // "secrets"<br>ourStorage.desk.drawer; // "stapler"</blockquote>',"<hr>","检索对象<code>myStorage</code>中嵌套属性<code>glove box</code>的值。因为属性的名字带有空格，请使用中括号操作符来访问属性的值。"],challengeType:1,fields:{slug:"/javascript-algorithms-and-data-structures/basic-javascript/accessing-nested-objects",blockName:"Basic JavaScript",tests:[{text:'<code>gloveBoxContents</code>应该等于"maps"',testString:'assert(gloveBoxContents === "maps", \'<code>gloveBoxContents</code>应该等于"maps"\');'},{text:"应使用点操作符和中括号操作符来访问<code>myStorage</code>",testString:"assert(/=\\s*myStorage\\.car\\.inside\\[\\s*(\"|')glove box\\1\\s*\\]/g.test(code), '应使用点操作符和中括号操作符来访问<code>myStorage</code>');"}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:'// 初始化变量\nvar myStorage = {\n  "car": {\n    "inside": {\n      "glove box": "maps",\n      "passenger seat": "crumbs"\n     },\n    "outside": {\n      "trunk": "jack"\n    }\n  }\n};\n\nvar gloveBoxContents = undefined; // 请修改这一行\n',head:"",tail:'(function(x) { \n  if(typeof x != \'undefined\') { \n    return "gloveBoxContents = " + x;\n  }\n  return "gloveBoxContents is undefined";\n})(gloveBoxContents);'},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/javascript-algorithms-and-data-structures/basic-javascript/accessing-nested-arrays",id:"56533eb9ac21ba0edf2244cc"},slug:"/javascript-algorithms-and-data-structures/basic-javascript/accessing-nested-objects"}}}});
//# sourceMappingURL=path---javascript-algorithms-and-data-structures-basic-javascript-accessing-nested-objects-1e2696ea04d1c4afa04a.js.map