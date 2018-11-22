webpackJsonp([0x715e2ee7e3fa],{4009:function(e,h){e.exports={data:{challengeNode:{title:"Specify Upper and Lower Number of Matches",description:["回想一下，你使用加号<code>+</code>查找一个或多个字符，使用星号<code>*</code>查找零个或多个字符。这些都很方便，但有时你需要匹配一定范围的匹配模式。","你可以使用<code>数量说明符</code>指定匹配模式的上下限。数量说明符与花括号（<code>{</code>和<code>}</code>）一起使用。你可以在花括号之间放两个数字，这两个数字代表匹配模式的上限和下限。",'例如，要在字符串<code>"ah"</code>中匹配仅出现<code>3</code>到<code>5</code>次的字母<code>a</code>，你的正则表达式应为<code>/a{3,5}h/</code>。','<blockquote>let A4 = "aaaah";<br>let A2 = "aah";<br>let multipleA = /a{3,5}h/;<br>multipleA.test(A4); // Returns true<br>multipleA.test(A2); // Returns false</blockquote>',"<hr>",'修改正则表达式<code>ohRegex</code>以匹配在<code>"Oh no"</code>中仅出现<code>3</code>到<code>6</code>次的字母<code>h</code>。'],challengeType:1,fields:{slug:"/javascript-algorithms-and-data-structures/regular-expressions/specify-upper-and-lower-number-of-matches",blockName:"Regular Expressions",tests:[{text:"你的正则表达式应该使用花括号。",testString:"assert(ohRegex.source.match(/{.*?}/).length > 0, '你的正则表达式应该使用花括号。');"},{text:'你的正则表达式不应该匹配<code>"Ohh no"</code>。',testString:'assert(!ohRegex.test("Ohh no"), \'你的正则表达式不应该匹配<code>"Ohh no"</code>。\');'},{text:'你的正则表达式应该匹配<code>"Ohhh no"</code>。',testString:'assert(ohRegex.test("Ohhh no"), \'你的正则表达式应该匹配<code>"Ohhh no"</code>。\');'},{text:'你的正则表达式应该匹配<code>"Ohhhh no"</code>。',testString:'assert(ohRegex.test("Ohhhh no"), \'你的正则表达式应该匹配<code>"Ohhhh no"</code>。\');'},{text:'你的正则表达式应该匹配<code>"Ohhhhh no"</code>。',testString:'assert(ohRegex.test("Ohhhhh no"), \'你的正则表达式应该匹配<code>"Ohhhhh no"</code>。\');'},{text:'你的正则表达式应该匹配<code>"Ohhhhhh no"</code>。',testString:'assert(ohRegex.test("Ohhhhhh no"), \'你的正则表达式应该匹配<code>"Ohhhhhh no"</code>。\');'},{text:'你的正则表达式不应该匹配<code>"Ohhhhhhh no"</code>。',testString:'assert(!ohRegex.test("Ohhhhhhh no"), \'你的正则表达式不应该匹配<code>"Ohhhhhhh no"</code>。\');'}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:'let ohStr = "Ohhh no";\nlet ohRegex = /change/; // 修改这一行\nlet result = ohRegex.test(ohStr);',head:"",tail:""},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/javascript-algorithms-and-data-structures/regular-expressions/specify-only-the-lower-number-of-matches",id:"587d7db9367417b2b2512ba5"},slug:"/javascript-algorithms-and-data-structures/regular-expressions/specify-upper-and-lower-number-of-matches"}}}});
//# sourceMappingURL=path---javascript-algorithms-and-data-structures-regular-expressions-specify-upper-and-lower-number-of-matches-e747e356ad09e17a19c1.js.map