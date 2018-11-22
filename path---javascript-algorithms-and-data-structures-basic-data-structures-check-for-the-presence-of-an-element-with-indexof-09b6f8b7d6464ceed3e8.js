webpackJsonp([38166049682068],{3737:function(e,s){e.exports={data:{challengeNode:{title:"Check For The Presence of an Element With indexOf()",description:["由于数组可以在任意时间被修改或者说<em>被改变（mutated）</em>，我们不能保证某个数据在一个给定数组中的位置，甚至不能保证该元素还存在于该数组中。幸运的是，JavaScript 给我们提供了另一个内置方法<code>indexOf()</code>。这个方法让我们可以便捷地检查某个元素是否存在于一个数组中。<code>indexOf()</code>方法接受一个元素作为输入参数，并返回该元素在数组中的位置（索引）；若该元素不存在于数组中则返回<code>-1</code>。","例如：","<blockquote>let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];<br><br>fruits.indexOf('dates') // 返回 -1<br>fruits.indexOf('oranges') // 返回 2<br>fruits.indexOf('pears') // 返回 1，即第一个出现的 'pears' 元素在数组中的索引为 1</blockquote>","<hr>","<code>indexOf()</code>在快速检查一个数组中是否有某个元素时非常有用。我们已经定义了一个<code>quickCheck</code>函数，它接受一个数组和一个元素作为输入参数。请修改这个函数，利用<code>indexOf()</code>方法，使得当输入的数组中含有输入的元素时，函数返回<code>true</code>；不含有输入的元素时，函数返回<code>false</code>。"],challengeType:1,fields:{slug:"/javascript-algorithms-and-data-structures/basic-data-structures/check-for-the-presence-of-an-element-with-indexof",blockName:"Basic Data Structures",tests:[{text:'<code>quickCheck(["squash", "onions", "shallots"], "mushrooms")</code>应该返回<code>false</code>。',testString:"assert.strictEqual(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'), false, '<code>quickCheck([\"squash\", \"onions\", \"shallots\"], \"mushrooms\")</code>应该返回<code>false</code>。');"},{text:'<code>quickCheck(["squash", "onions", "shallots"], "onions")</code>应该返回<code>true</code>。',testString:"assert.strictEqual(quickCheck(['squash', 'onions', 'shallots'], 'onions'), true, '<code>quickCheck([\"squash\", \"onions\", \"shallots\"], \"onions\")</code>应该返回<code>true</code>。');"},{text:"<code>quickCheck([3, 5, 9, 125, 45, 2], 125)</code>应该返回<code>true</code>。",testString:"assert.strictEqual(quickCheck([3, 5, 9, 125, 45, 2], 125), true, '<code>quickCheck([3, 5, 9, 125, 45, 2], 125)</code>应该返回<code>true</code>。');"},{text:"<code>quickCheck([true, false, false], undefined)</code>应该返回<code>false</code>。",testString:"assert.strictEqual(quickCheck([true, false, false], undefined), false, '<code>quickCheck([true, false, false], undefined)</code>应该返回<code>false</code>。');"},{text:"<code>quickCheck</code>函数中应该用到<code>indexOf()</code>方法。",testString:"assert.notStrictEqual(quickCheck.toString().search(/\\.indexOf\\(/), -1, '<code>quickCheck</code>函数中应该用到<code>indexOf()</code>方法。');"}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:"function quickCheck(arr, elem) {\n  // 请把你的代码写在这条注释以下\n\n  // 请把你的代码写在这条注释以上\n}\n\n// 你可以修改这行代码来测试不同的输入：\nconsole.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));",head:"",tail:""},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/javascript-algorithms-and-data-structures/basic-data-structures/iterate-through-all-an-arrays-items-using-for-loops",id:"587d7b7b367417b2b2512b14"},slug:"/javascript-algorithms-and-data-structures/basic-data-structures/check-for-the-presence-of-an-element-with-indexof"}}}});
//# sourceMappingURL=path---javascript-algorithms-and-data-structures-basic-data-structures-check-for-the-presence-of-an-element-with-indexof-09b6f8b7d6464ceed3e8.js.map