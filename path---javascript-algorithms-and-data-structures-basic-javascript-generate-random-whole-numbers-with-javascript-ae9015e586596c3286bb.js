webpackJsonp([0x7f1e57fefede],{3799:function(e,t){e.exports={data:{challengeNode:{title:"Generate Random Whole Numbers with JavaScript",description:["生成随机小数很棒，但随机数更有用的地方在于生成随机整数。","<ol><li>用<code>Math.random()</code>生成一个随机小数。</li><li>把这个随机小数乘以<code>20</code>。</li><li>用<code>Math.floor()</code>向下取整 获得它最近的整数。</li></ol>","记住<code>Math.random()</code>永远不会返回<code>1</code>。同时因为我们是在用<code>Math.floor()</code>向下取整，所以最终我们获得的结果不可能有<code>20</code>。这确保了我们获得了一个在0到19之间的整数。","把操作连缀起来，代码类似于下面：","<code>Math.floor(Math.random() * 20);</code>","我们先调用<code>Math.random()</code>，把它的结果乘以20，然后把上一步的结果传给<code>Math.floor()</code>，最终通过向下取整获得最近的整数。","<hr>","生成一个<code>0</code>到<code>9</code>之间的随机整数。"],challengeType:1,fields:{slug:"/javascript-algorithms-and-data-structures/basic-javascript/generate-random-whole-numbers-with-javascript",blockName:"Basic JavaScript",tests:[{text:"<code>myFunction</code>的结果应该是一个整数",testString:"assert(typeof randomWholeNum() === \"number\" && (function(){var r = randomWholeNum();return Math.floor(r) === r;})(), '<code>myFunction</code>的结果应该是一个整数');"},{text:"需要使用<code>Math.random</code>生成随机数字",testString:"assert(code.match(/Math.random/g).length > 1, '需要使用<code>Math.random</code>生成随机数字');"},{text:"你应该将<code>Math.random</code>的结果乘以 10 来生成 0 到 9 之间的随机数",testString:"assert(code.match(/\\s*?Math.random\\s*?\\(\\s*?\\)\\s*?\\*\\s*?10[\\D]\\s*?/g) || code.match(/\\s*?10\\s*?\\*\\s*?Math.random\\s*?\\(\\s*?\\)\\s*?/g), '你应该将<code>Math.random</code>的结果乘以 10 来生成 0 到 9 之间的随机数');"},{text:"你需要使用<code>Math.floor</code>移除数字中的小数部分",testString:"assert(code.match(/Math.floor/g).length > 1, '你需要使用<code>Math.floor</code>移除数字中的小数部分');"}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:"var randomNumberBetween0and19 = Math.floor(Math.random() * 20);\n\nfunction randomWholeNum() {\n\n  // 请把你的代码写在这条注释以下\n\n  return Math.random();\n}",head:"",tail:"(function(){return randomWholeNum();})();"},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/javascript-algorithms-and-data-structures/basic-javascript/generate-random-whole-numbers-within-a-range",id:"cf1111c1c12feddfaeb1bdef"},slug:"/javascript-algorithms-and-data-structures/basic-javascript/generate-random-whole-numbers-with-javascript"}}}});
//# sourceMappingURL=path---javascript-algorithms-and-data-structures-basic-javascript-generate-random-whole-numbers-with-javascript-ae9015e586596c3286bb.js.map