webpackJsonp([0x85161e3d6b7c],{3402:function(e,t){e.exports={data:{challengeNode:{title:"Hash from two arrays",description:["Task:","<p>Using two Arrays of equal length, create a Hash object where the elements from one array (the keys) are linked to the elements of the other (the values)</p>","Related task:",' <a href="http://rosettacode.org/wiki/Associative arrays/Creation" title="Associative arrays/Creation">Associative arrays/Creation</a>'],challengeType:5,fields:{slug:"/coding-interview-prep/rosetta-code/hash-from-two-arrays",blockName:"Rosetta Code",tests:[{text:"<code>arrToObj</code> is a function.",testString:"assert(typeof arrToObj === 'function', '<code>arrToObj</code> is a function.');"},{text:'<code>arrToObj([1, 2, 3, 4, 5], ["a", "b", "c", "d", "e"])</code> should return <code>{ 1: "a", 2: "b", 3: "c", 4: "d", 5: "e" }</code>',testString:'assert.deepEqual(arrToObj(...testCases[0]), res[0], \'<code>arrToObj([1, 2, 3, 4, 5], ["a", "b", "c", "d", "e"])</code> should return <code>{ 1: "a", 2: "b", 3: "c", 4: "d", 5: "e" }</code>\');'},{text:'<code>arrToObj([1, 2, 3, 4, 5], ["a", "b", "c", "d"])</code> should return <code>{ 1: "a", 2: "b", 3: "c", 4: "d", 5: undefined }</code>',testString:'assert.deepEqual(arrToObj(...testCases[1]), res[1], \'<code>arrToObj([1, 2, 3, 4, 5], ["a", "b", "c", "d"])</code> should return <code>{ 1: "a", 2: "b", 3: "c", 4: "d", 5: undefined }</code>\');'},{text:'<code>arrToObj([1, 2, 3], ["a", "b", "c", "d", "e"])</code> should return <code>{ 1: "a", 2: "b", 3: "c" }</code>',testString:'assert.deepEqual(arrToObj(...testCases[2]), res[2], \'<code>arrToObj([1, 2, 3], ["a", "b", "c", "d", "e"])</code> should return <code>{ 1: "a", 2: "b", 3: "c" }</code>\');'},{text:'<code>arrToObj(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5])</code> should return <code>{ "a": 1, "b": 2, "c": 3 , "d": 4, "e": 5 }</code>',testString:'assert.deepEqual(arrToObj(...testCases[3]), res[3], \'<code>arrToObj(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5])</code> should return <code>{ "a": 1, "b": 2, "c": 3 , "d": 4, "e": 5 }</code>\');'},{text:'<code>arrToObj(["a", "b", "c", "d", "e"], [1, 2, 3, 4])</code> should return <code>{ "a": 1, "b": 2, "c": 3 , "d": 4, "e": undefined }</code>',testString:'assert.deepEqual(arrToObj(...testCases[4]), res[4], \'<code>arrToObj(["a", "b", "c", "d", "e"], [1, 2, 3, 4])</code> should return <code>{ "a": 1, "b": 2, "c": 3 , "d": 4, "e": undefined }</code>\');'},{text:'<code>arrToObj(["a", "b", "c"], [1, 2, 3, 4, 5])</code> should return <code>{ "a": 1, "b": 2, "c": 3  }</code>',testString:'assert.deepEqual(arrToObj(...testCases[5]), res[5], \'<code>arrToObj(["a", "b", "c"], [1, 2, 3, 4, 5])</code> should return <code>{ "a": 1, "b": 2, "c": 3  }</code>\');'}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:"function arrToObj (keys, vals) {\n  // Good luck!\n  return true;\n}",head:"",tail:"const testCases = [\n  [[1, 2, 3, 4, 5], ['a', 'b', 'c', 'd', 'e']],\n  [[1, 2, 3, 4, 5], ['a', 'b', 'c', 'd']],\n  [[1, 2, 3], ['a', 'b', 'c', 'd', 'e']],\n  [['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]],\n  [['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4]],\n  [['a', 'b', 'c'], [1, 2, 3, 4, 5]]\n];\n\nconst res = [\n  { 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e' },\n  { 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: undefined },\n  { 1: 'a', 2: 'b', 3: 'c' },\n  { a: 1, b: 2, c: 3, d: 4, e: 5 },\n  { a: 1, b: 2, c: 3, d: 4, e: undefined },\n  { a: 1, b: 2, c: 3 }\n];"},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/coding-interview-prep/rosetta-code/hash-join",id:"595671d4d2cdc305f0d5b36f"},slug:"/coding-interview-prep/rosetta-code/hash-from-two-arrays"}}}});
//# sourceMappingURL=path---coding-interview-prep-rosetta-code-hash-from-two-arrays-0eb8241c3e2fc9d19983.js.map