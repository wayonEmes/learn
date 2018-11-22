webpackJsonp([0xae6cd140e73a],{3720:function(e,a){e.exports={data:{challengeNode:{title:"Falsy Bouncer",description:["从一个数组中移除所有假值（falsy values）。",'JavaScript 中的假值有 <code>false</code>、<code>null</code>、<code>0</code>、<code>""</code>、<code>undefined</code> 和 <code>NaN</code>。',"提示：请尝试将每一个值转换为一个布尔值（boolean）。",'如果你有任何疑问，可以访问 <a href="https://forum.freecodecamp.one/t/topic/157" target="_blank">Read-Search-Ask</a> 。请你独立解决挑战中的问题。'],challengeType:5,fields:{slug:"/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer",blockName:"Basic Algorithm Scripting",tests:[{text:'<code>bouncer([7, "ate", "", false, 9])</code> 应该返回 <code>[7, "ate", 9]</code>。',testString:'assert.deepEqual(bouncer([7, "ate", "", false, 9]), [7, "ate", 9], \'<code>bouncer([7, "ate", "", false, 9])</code> 应该返回 <code>[7, "ate", 9]</code>。\');'},{text:'<code>bouncer(["a", "b", "c"])</code> 应该返回 <code>["a", "b", "c"]</code>。',testString:'assert.deepEqual(bouncer(["a", "b", "c"]), ["a", "b", "c"], \'<code>bouncer(["a", "b", "c"])</code> 应该返回 <code>["a", "b", "c"]</code>。\');'},{text:'<code>bouncer([false, null, 0, NaN, undefined, ""])</code> 应该返回 <code>[]</code>。',testString:'assert.deepEqual(bouncer([false, null, 0, NaN, undefined, ""]), [], \'<code>bouncer([false, null, 0, NaN, undefined, ""])</code> 应该返回 <code>[]</code>。\');'},{text:"<code>bouncer([1, null, NaN, 2, undefined])</code> 应该返回 <code>[1, 2]</code>。",testString:"assert.deepEqual(bouncer([1, null, NaN, 2, undefined]), [1, 2], '<code>bouncer([1, null, NaN, 2, undefined])</code> 应该返回 <code>[1, 2]</code>。');"}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:'function bouncer(arr) {\n  // Don\'t show a false ID to this bouncer.\n  return arr;\n}\n\nbouncer([7, "ate", "", false, 9]);',head:"",tail:""},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong",id:"adf08ec01beb4f99fc7a68f2"},slug:"/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer"}}}});
//# sourceMappingURL=path---javascript-algorithms-and-data-structures-basic-algorithm-scripting-falsy-bouncer-89f0b5c56aea63d2ff9e.js.map