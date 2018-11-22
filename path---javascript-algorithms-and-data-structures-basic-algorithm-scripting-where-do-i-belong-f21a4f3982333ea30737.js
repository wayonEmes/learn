webpackJsonp([0xfc41492aa44d],{3730:function(e,t){e.exports={data:{challengeNode:{title:"Where do I Belong",description:["返回数组（第一个参数）被排序后，将一个值（第二个参数）插入到该数组中而使数组保持有序的最小的索引。返回的值应该是一个数字。","例如，<code>getIndexToIns([1,2,3,4], 1.5)</code> 应该返回 <code>1</code> 因为 1.5 大于 <code>1</code> （索引为 0），但小于 <code>2</code>（索引为 1）。","同样地，<code>getIndexToIns([20,3,5], 19)</code> 应该返回 <code>2</code> 因为数组被排序后会变成 <code>[3,5,20]</code>，而 <code>19</code> 小于 <code>20</code>（索引为 2）且大于 <code>5</code>（索引为 1）。",'如果你有任何疑问，可以访问 <a href="https://forum.freecodecamp.one/t/topic/157" target="_blank">Read-Search-Ask</a> 。请你独立解决挑战中的问题。'],challengeType:5,fields:{slug:"/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong",blockName:"Basic Algorithm Scripting",tests:[{text:"<code>getIndexToIns([10, 20, 30, 40, 50], 35)</code> 应该返回 <code>3</code>。",testString:"assert(getIndexToIns([10, 20, 30, 40, 50], 35) === 3, '<code>getIndexToIns([10, 20, 30, 40, 50], 35)</code> 应该返回 <code>3</code>。');"},{text:"<code>getIndexToIns([10, 20, 30, 40, 50], 35)</code> 应该返回一个数字。",testString:"assert(typeof(getIndexToIns([10, 20, 30, 40, 50], 35)) === \"number\", '<code>getIndexToIns([10, 20, 30, 40, 50], 35)</code> 应该返回一个数字。');"},{text:"<code>getIndexToIns([10, 20, 30, 40, 50], 30)</code> 应该返回 <code>2</code>。",testString:"assert(getIndexToIns([10, 20, 30, 40, 50], 30) === 2, '<code>getIndexToIns([10, 20, 30, 40, 50], 30)</code> 应该返回 <code>2</code>。');"},{text:"<code>getIndexToIns([10, 20, 30, 40, 50], 30)</code> 应该返回一个数字。",testString:"assert(typeof(getIndexToIns([10, 20, 30, 40, 50], 30)) === \"number\", '<code>getIndexToIns([10, 20, 30, 40, 50], 30)</code> 应该返回一个数字。');"},{text:"<code>getIndexToIns([40, 60], 50)</code> 应该返回 <code>1</code>。",testString:"assert(getIndexToIns([40, 60], 50) === 1, '<code>getIndexToIns([40, 60], 50)</code> 应该返回 <code>1</code>。');"},{text:"<code>getIndexToIns([40, 60], 50)</code> 应该返回一个数字。",testString:"assert(typeof(getIndexToIns([40, 60], 50)) === \"number\", '<code>getIndexToIns([40, 60], 50)</code> 应该返回一个数字。');"},{text:"<code>getIndexToIns([3, 10, 5], 3)</code> 应该返回 <code>0</code>。",testString:"assert(getIndexToIns([3, 10, 5], 3) === 0, '<code>getIndexToIns([3, 10, 5], 3)</code> 应该返回 <code>0</code>。');"},{text:"<code>getIndexToIns([3, 10, 5], 3)</code> 应该返回一个数字。",testString:"assert(typeof(getIndexToIns([3, 10, 5], 3)) === \"number\", '<code>getIndexToIns([3, 10, 5], 3)</code> 应该返回一个数字。');"},{text:"<code>getIndexToIns([5, 3, 20, 3], 5)</code> 应该返回 <code>2</code>。",testString:"assert(getIndexToIns([5, 3, 20, 3], 5) === 2, '<code>getIndexToIns([5, 3, 20, 3], 5)</code> 应该返回 <code>2</code>。');"},{text:"<code>getIndexToIns([5, 3, 20, 3], 5)</code> 应该返回一个数字。",testString:"assert(typeof(getIndexToIns([5, 3, 20, 3], 5)) === \"number\", '<code>getIndexToIns([5, 3, 20, 3], 5)</code> 应该返回一个数字。');"},{text:"<code>getIndexToIns([2, 20, 10], 19)</code> 应该返回 <code>2</code>。",testString:"assert(getIndexToIns([2, 20, 10], 19) === 2, '<code>getIndexToIns([2, 20, 10], 19)</code> 应该返回 <code>2</code>。');"},{text:"<code>getIndexToIns([2, 20, 10], 19)</code> 应该返回一个数字。",testString:"assert(typeof(getIndexToIns([2, 20, 10], 19)) === \"number\", '<code>getIndexToIns([2, 20, 10], 19)</code> 应该返回一个数字。');"},{text:"<code>getIndexToIns([2, 5, 10], 15)</code> 应该返回 <code>3</code>。",testString:"assert(getIndexToIns([2, 5, 10], 15) === 3, '<code>getIndexToIns([2, 5, 10], 15)</code> 应该返回 <code>3</code>。');"},{text:"<code>getIndexToIns([2, 5, 10], 15)</code> 应该返回一个数字。",testString:"assert(typeof(getIndexToIns([2, 5, 10], 15)) === \"number\", '<code>getIndexToIns([2, 5, 10], 15)</code> 应该返回一个数字。');"},{text:"<code>getIndexToIns([], 1)</code> 应该返回 <code>0</code>。",testString:"assert(getIndexToIns([], 1) === 0, '<code>getIndexToIns([], 1)</code> 应该返回 <code>0</code>。');"},{text:"<code>getIndexToIns([], 1)</code> 应该返回一个数字。",testString:"assert(typeof(getIndexToIns([], 1)) === \"number\", '<code>getIndexToIns([], 1)</code> 应该返回一个数字。');"}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:"function getIndexToIns(arr, num) {\n  // Find my place in this sorted array.\n  return num;\n}\n\ngetIndexToIns([40, 60], 50);",head:"",tail:""},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations",id:"a24c1a4622e3c05097f71d67"},slug:"/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong"}}}});
//# sourceMappingURL=path---javascript-algorithms-and-data-structures-basic-algorithm-scripting-where-do-i-belong-f21a4f3982333ea30737.js.map