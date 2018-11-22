webpackJsonp([0xba37a6442b9e],{3932:function(e,t){e.exports={data:{challengeNode:{title:"Make a Person",description:["在这道题目中，我们需要写一个构造器（constructor）函数。它只接收一个字符串参数<code>firstAndLast</code>，这个参数代表一个英文名的全名（姓和名）。这个构造函数创建出的实例需要具有以下方法：","<blockquote>getFirstName()\ngetLastName()\ngetFullName()\nsetFirstName(first)\nsetLastName(last)\nsetFullName(firstAndLast)</blockquote>","这些方法应当可以通过构造函数创建出的实例调用。","你可以点击 “运行测试”，然后就可以在底下的控制台中看到每个测试用例执行的情况。","如果你遇到了问题，请点击<a href='https://forum.freecodecamp.one/t/topic/157' target='_blank'>帮助</a>。"],challengeType:5,fields:{slug:"/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person",blockName:"Intermediate Algorithm Scripting",tests:[{text:"<code>Object.keys(bob).length</code>应该返回 6。",testString:"assert.deepEqual(Object.keys(bob).length, 6, '<code>Object.keys(bob).length</code>应该返回 6。');"},{text:"<code>bob instanceof Person</code>应该返回<code>true</code>。",testString:"assert.deepEqual(bob instanceof Person, true, '<code>bob instanceof Person</code>应该返回<code>true</code>。');"},{text:"<code>bob.firstName</code>应该返回<code>undefined</code>。",testString:"assert.deepEqual(bob.firstName, undefined, '<code>bob.firstName</code>应该返回<code>undefined</code>。');"},{text:"<code>bob.lastName</code>应该返回<code>undefined</code>。",testString:"assert.deepEqual(bob.lastName, undefined, '<code>bob.lastName</code>应该返回<code>undefined</code>。');"},{text:'<code>bob.getFirstName()</code>应该返回 "Bob"。',testString:"assert.deepEqual(bob.getFirstName(), 'Bob', '<code>bob.getFirstName()</code>应该返回 \"Bob\"。');"},{text:'<code>bob.getLastName()</code>应该返回 "Ross"。',testString:"assert.deepEqual(bob.getLastName(), 'Ross', '<code>bob.getLastName()</code>应该返回 \"Ross\"。');"},{text:'<code>bob.getFullName()</code>应该返回 "Bob Ross"。',testString:"assert.deepEqual(bob.getFullName(), 'Bob Ross', '<code>bob.getFullName()</code>应该返回 \"Bob Ross\"。');"},{text:'调用<code>bob.setFirstName("Haskell")</code>之后，<code>bob.getFullName()</code>应该返回 "Haskell Ross"。',testString:'assert.strictEqual((function () { bob.setFirstName("Haskell"); return bob.getFullName(); })(), \'Haskell Ross\', \'调用<code>bob.setFirstName("Haskell")</code>之后，<code>bob.getFullName()</code>应该返回 "Haskell Ross"。\');'},{text:'调用<code>bob.setLastName("Curry")</code>之后，<code>bob.getFullName()</code>应该返回 "Haskell Curry"。',testString:"assert.strictEqual((function () { var _bob=new Person('Haskell Ross'); _bob.setLastName(\"Curry\"); return _bob.getFullName(); })(), 'Haskell Curry', '调用<code>bob.setLastName(\"Curry\")</code>之后，<code>bob.getFullName()</code>应该返回 \"Haskell Curry\"。');"},{text:'调用<code>bob.setFullName("Haskell Curry")</code>之后，<code>bob.getFullName()</code>应该返回 "Haskell Curry"。',testString:'assert.strictEqual((function () { bob.setFullName("Haskell Curry"); return bob.getFullName(); })(), \'Haskell Curry\', \'调用<code>bob.setFullName("Haskell Curry")</code>之后，<code>bob.getFullName()</code>应该返回 "Haskell Curry"。\');'},{text:'调用<code>bob.setFullName("Haskell Curry")</code>之后，<code>bob.getFirstName()</code>应该返回 "Haskell"。',testString:'assert.strictEqual((function () { bob.setFullName("Haskell Curry"); return bob.getFirstName(); })(), \'Haskell\', \'调用<code>bob.setFullName("Haskell Curry")</code>之后，<code>bob.getFirstName()</code>应该返回 "Haskell"。\');'},{text:'调用<code>bob.setFullName("Haskell Curry")</code>之后，<code>bob.getLastName()</code>应该返回 "Curry"。',testString:'assert.strictEqual((function () { bob.setFullName("Haskell Curry"); return bob.getLastName(); })(), \'Curry\', \'调用<code>bob.setFullName("Haskell Curry")</code>之后，<code>bob.getLastName()</code>应该返回 "Curry"。\');'}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:"var Person = function(firstAndLast) {\n  // 请先写出这个方法。其他方法的写法与这个类似\n  this.getFullName = function() {\n    return \"\";\n  };\n  return firstAndLast;\n};\n\nvar bob = new Person('Bob Ross');\nbob.getFullName();",head:"",tail:""},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris",id:"a2f1d72d9b908d0bd72bb9f6"},slug:"/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person"}}}});
//# sourceMappingURL=path---javascript-algorithms-and-data-structures-intermediate-algorithm-scripting-make-a-person-87a575113632889f2c68.js.map