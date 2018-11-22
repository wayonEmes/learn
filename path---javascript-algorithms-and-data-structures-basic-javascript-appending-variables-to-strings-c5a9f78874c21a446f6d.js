webpackJsonp([0xfa9fc4f8918],{3763:function(e,t){e.exports={data:{challengeNode:{title:"Appending Variables to Strings",description:["我们不仅可以创建出多行的字符串，还可以使用加等号(<code>+=</code>)运算符来追加变量到字符串上。","<hr>","设置变量<code>someAdjective</code>的值，并使用<code>+=</code>运算符把它追加到变量<code>myStr</code>上。"],challengeType:1,fields:{slug:"/javascript-algorithms-and-data-structures/basic-javascript/appending-variables-to-strings",blockName:"Basic JavaScript",tests:[{text:"<code>someAdjective</code>应该是一个至少包含三个字符的字符串",testString:"assert(typeof someAdjective !== 'undefined' && someAdjective.length > 2, '<code>someAdjective</code>应该是一个至少包含三个字符的字符串');"},{text:"使用<code>+=</code>操作符把<code>someAdjective</code>追加到<code>myStr</code>的后面",testString:"assert(code.match(/myStr\\s*\\+=\\s*someAdjective\\s*/).length > 0, '使用<code>+=</code>操作符把<code>someAdjective</code>追加到<code>myStr</code>的后面');"}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:'// 示例\nvar anAdjective = "awesome!";\nvar ourStr = "freeCodeCamp is ";\nourStr += anAdjective;\n\n// 请把你的代码写在这条注释以下\n\nvar someAdjective;\nvar myStr = "Learning to code is ";\n',head:"",tail:"(function(){\n  var output = [];\n  if(typeof someAdjective === 'string') {\n    output.push('someAdjective = \"' + someAdjective + '\"');\n  } else {\n    output.push('someAdjective is not a string');\n  }\n  if(typeof myStr === 'string') {\n    output.push('myStr = \"' + myStr + '\"');\n  } else {\n    output.push('myStr is not a string');\n  }\n  return output.join('\\n');\n})();"},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/javascript-algorithms-and-data-structures/basic-javascript/find-the-length-of-a-string",id:"56533eb9ac21ba0edf2244ed"},slug:"/javascript-algorithms-and-data-structures/basic-javascript/appending-variables-to-strings"}}}});
//# sourceMappingURL=path---javascript-algorithms-and-data-structures-basic-javascript-appending-variables-to-strings-c5a9f78874c21a446f6d.js.map