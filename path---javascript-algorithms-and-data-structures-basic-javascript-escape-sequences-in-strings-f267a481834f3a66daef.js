webpackJsonp([62874830689587],{3794:function(e,t){e.exports={data:{challengeNode:{title:"Escape Sequences in Strings",description:["引号不是字符串中唯一可以被<dfn>转义</dfn>的字符。使用转义字符有两个原因：首先是可以让你使用无法输入的字符，例如退格。其次是可以让你在一个字符串中表示多个引号，而不会出错。我们在之前的挑战中学到了这个。",'<table class="table table-striped"><thead><tr><th>代码</th><th>输出</th></tr></thead><tbody><tr><td><code>\\\'</code></td><td>单引号</td></tr><tr><td><code>\\"</code></td><td>双引号</td></tr><tr><td><code>\\\\</code></td><td>反斜杠</td></tr><tr><td><code>\\n</code></td><td>换行符</td></tr><tr><td><code>\\r</code></td><td>回车符</td></tr><tr><td><code>\\t</code></td><td>制表符</td></tr><tr><td><code>\\b</code></td><td>退格</td></tr><tr><td><code>\\f</code></td><td>换页符</td></tr></tbody></table>',"<em>请注意，必须对反斜杠本身进行转义才能显示为反斜杠。</em>","<hr>","使用转义字符将下面三行文本字符串赋给变量<code>myStr</code>。","<blockquote>FirstLine<br/>&nbsp;&nbsp;&nbsp;&nbsp;\\SecondLine<br/>ThirdLine</blockquote>","你需要使用转义字符正确的插入特殊字符，确保间距与上面文本一致并且单词或转义字符之间没有空格。","像这样用转义字符写出来：","<q>FirstLine<code>换行符</code><code>制表符</code><code>反斜杠</code>SecondLine<code>换行符</code>ThirdLine</q>"],challengeType:1,fields:{slug:"/javascript-algorithms-and-data-structures/basic-javascript/escape-sequences-in-strings",blockName:"Basic JavaScript",tests:[{text:"<code>myStr</code>不能包含空格",testString:"assert(!/ /.test(myStr), '<code>myStr</code> should not contain any spaces');"},{text:"<code>myStr</code>应该包含字符串<code>FirstLine</code>, <code>SecondLine</code> and <code>ThirdLine</code> （记得区分大小写）",testString:"assert(/FirstLine/.test(myStr) && /SecondLine/.test(myStr) && /ThirdLine/.test(myStr), '<code>myStr</code>应该包含字符串<code>FirstLine</code>, <code>SecondLine</code> and <code>ThirdLine</code> （记得区分大小写）');"},{text:"<code>FirstLine</code>后面应该是一个新行<code>\\n</code>",testString:"assert(/FirstLine\\n/.test(myStr), '<code>FirstLine</code>后面应该是一个换行符<code>\\n</code>');"},{text:"<code>myStr</code>应该包含制表符<code>\\t</code>并且制表符要在换行符后面",testString:"assert(/\\n\\t/.test(myStr), '<code>myStr</code>应该包含制表符<code>\\t</code>并且制表符要在换行符后面');"},{text:"<code>SecondLine</code>前面应该是反斜杠<code>\\\\</code>",testString:"assert(/\\SecondLine/.test(myStr), '<code>SecondLine</code>前面应该是反斜杠<code>\\\\</code>');"},{text:"<code>SecondLine</code>和<code>ThirdLine</code>之间应该是换行符",testString:"assert(/SecondLine\\nThirdLine/.test(myStr), '<code>SecondLine</code>和<code>ThirdLine</code>之间该是换行符');"}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:"var myStr; // 请修改这一行\n\n",head:"",tail:"(function(){\nif (myStr !== undefined){\nconsole.log('myStr:\\n' + myStr);}})();"},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/javascript-algorithms-and-data-structures/basic-javascript/concatenating-strings-with-plus-operator",id:"56533eb9ac21ba0edf2244b6"},slug:"/javascript-algorithms-and-data-structures/basic-javascript/escape-sequences-in-strings"}}}});
//# sourceMappingURL=path---javascript-algorithms-and-data-structures-basic-javascript-escape-sequences-in-strings-f267a481834f3a66daef.js.map