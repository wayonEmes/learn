webpackJsonp([0xa698b667bb8e],{3976:function(e,o){e.exports={data:{challengeNode:{title:"Use Inheritance So You Don't Repeat Yourself",description:["有一条原则叫做：<code>Don't Repeat Yourself</code>，常以缩写形式<code>DRY</code>出现，意思是“不要自己重复”。编写重复代码会产生的问题是：任何改变都需要去多个地方修复所有重复的代码。这通常意味着我们需要做更多的工作，会产生更高的出错率。","请观察下面的示例，<code>Bird</code>和<code>Dog</code>共享<code>describe</code>方法：",'<blockquote>Bird.prototype = {<br>&nbsp;&nbsp;constructor: Bird,<br>&nbsp;&nbsp;describe: function() {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log("My name is " + this.name);<br>&nbsp;&nbsp;}<br>};<br><br>Dog.prototype = {<br>&nbsp;&nbsp;constructor: Dog,<br>&nbsp;&nbsp;describe: function() {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log("My name is " + this.name);<br>&nbsp;&nbsp;}<br>};</blockquote>',"我们可以看到<code>describe</code>方法在两个地方重复定义了。根据以上所说的<code>DRY</code>原则，我们可以通过创建一个<code>Animal 超类（或者父类）</code>来重写这段代码：",'<blockquote>function Animal() { };<br><br>Animal.prototype = {<br>&nbsp;&nbsp;constructor: Animal, <br>&nbsp;&nbsp;describe: function() {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log("My name is " + this.name);<br>&nbsp;&nbsp;}<br>};</blockquote>',"<code>Animal</code>构造函数中定义了<code>describe</code>方法，可将<code>Bird</code>和<code>Dog</code>这两个构造函数的方法删除掉：","<blockquote>Bird.prototype = {<br>&nbsp;&nbsp;constructor: Bird<br>};<br><br>Dog.prototype = {<br>&nbsp;&nbsp;constructor: Dog<br>};</blockquote>","<hr>","<code>Cat</code>和<code>Bear</code>重复定义了<code>eat</code>方法。本着<code>DRY</code>的原则，通过将<code>eat</code>方法移动到<code>Animal 超类</code>中来重写你的代码。"],challengeType:1,fields:{slug:"/javascript-algorithms-and-data-structures/object-oriented-programming/use-inheritance-so-you-dont-repeat-yourself",blockName:"Object Oriented Programming",tests:[{text:"<code>Animal.prototype</code>应该有<code>eat</code>属性。",testString:"assert(Animal.prototype.hasOwnProperty('eat'), '<code>Animal.prototype</code>应该有<code>eat</code>属性。');"},{text:"<code>Bear.prototype</code>不应该有<code>eat</code>属性。",testString:"assert(!(Bear.prototype.hasOwnProperty('eat')), '<code>Bear.prototype</code>不应该有<code>eat</code>属性。');"},{text:"<code>Cat.prototype</code>不应该有<code>eat</code>属性。",testString:"assert(!(Cat.prototype.hasOwnProperty('eat')), '<code>Cat.prototype</code>不应该有<code>eat</code>属性。');"}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:'function Cat(name) {\n  this.name = name; \n}\n\nCat.prototype = {\n  constructor: Cat, \n  eat: function() {\n    console.log("nom nom nom");\n  }\n};\n\nfunction Bear(name) {\n  this.name = name; \n}\n\nBear.prototype = {\n  constructor: Bear, \n  eat: function() {\n    console.log("nom nom nom");\n  }\n};\n\nfunction Animal() { }\n\nAnimal.prototype = {\n  constructor: Animal,\n  \n};',head:"",tail:""},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/javascript-algorithms-and-data-structures/object-oriented-programming/inherit-behaviors-from-a-supertype",id:"587d7db0367417b2b2512b83"},slug:"/javascript-algorithms-and-data-structures/object-oriented-programming/use-inheritance-so-you-dont-repeat-yourself"}}}});
//# sourceMappingURL=path---javascript-algorithms-and-data-structures-object-oriented-programming-use-inheritance-so-you-dont-repeat-yourself-051c0d31eca62b92af75.js.map