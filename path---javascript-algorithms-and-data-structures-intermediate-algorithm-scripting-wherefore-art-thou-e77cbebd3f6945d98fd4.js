webpackJsonp([0xf11ae69a553d],{3945:function(e,a){e.exports={data:{challengeNode:{title:"Wherefore art thou",description:["在这道题目中，我们要写一个函数，它接收两个参数：第一个参数是对象数组，第二个参数是一个对象。我们需要从对象数组中找出与第二个参数相等或包含第二个参数的所有对象，并以对象数组的形式返回。其中，相等的意思是原数组中的对象与第二个参数中对象的所有键值对完全相等；包含的意思是只要第二个参数中对象的所有键存在于原数组对象中，且它们对应的值相同即可。",'比如，如果第一个参数是<code>[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]</code>，第二个参数是<code>{ last: "Capulet" }</code>。那么你需要以对象数组的形式返回第一个参数中的第三个元素，因为它包含第二个参数中定义的键<code>last</code>，且对应的值<code>"Capulet"</code>相同',"如果你遇到了问题，请点击<a href='https://forum.freecodecamp.one/t/topic/157' target='_blank'>帮助</a>。"],challengeType:5,fields:{slug:"/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou",blockName:"Intermediate Algorithm Scripting",tests:[{text:'<code>whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })</code>应该返回<code>[{ first: "Tybalt", last: "Capulet" }]</code>。',testString:'assert.deepEqual(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }), [{ first: "Tybalt", last: "Capulet" }], \'<code>whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })</code>应该返回<code>[{ first: "Tybalt", last: "Capulet" }]</code>。\');'},{text:'<code>whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })</code>应该返回<code>[{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]</code>。',testString:'assert.deepEqual(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }), [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], \'<code>whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })</code>应该返回<code>[{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]</code>。\');'},{text:'<code>whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })</code>应该返回<code>[{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]</code>。',testString:'assert.deepEqual(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }), [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], \'<code>whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })</code>应该返回<code>[{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]</code>。\');'},{text:'<code>whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })</code>应该返回<code>[{ "apple": 1, "bat": 2, "cookie": 2 }]</code>。',testString:'assert.deepEqual(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }), [{ "apple": 1, "bat": 2, "cookie": 2 }], \'<code>whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })</code>应该返回<code>[{ "apple": 1, "bat": 2, "cookie": 2 }]</code>。\');'},{text:'<code>whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })</code>应该返回<code>[{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]</code>。',testString:'assert.deepEqual(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, {"bat":2}], { "apple": 1, "bat": 2 }), [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }], \'<code>whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })</code>应该返回<code>[{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]</code>。\');'},{text:'<code>whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})</code>应该返回<code>[]</code>。',testString:'assert.deepEqual(whatIsInAName([{ "a": 1, "b": 2, "c": 3 }], { "a": 1, "b": 9999, "c": 3 }), [], \'<code>whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})</code>应该返回<code>[]</code>。\');'}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:'function whatIsInAName(collection, source) {\n  // What\'s in a name?\n  var arr = [];\n  // 请把你的代码写在这条注释以下\n  \n  \n  // 请把你的代码写在这条注释以上\n  return arr;\n}\n\nwhatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });',head:"",tail:""},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case",id:"a8e512fbe388ac2f9198f0fa"},slug:"/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou"}}}});
//# sourceMappingURL=path---javascript-algorithms-and-data-structures-intermediate-algorithm-scripting-wherefore-art-thou-e77cbebd3f6945d98fd4.js.map