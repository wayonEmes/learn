webpackJsonp([55938999206844],{3970:function(e,o){e.exports={data:{challengeNode:{title:"Understand Where an Object’s Prototype Comes From",description:["就像人们从父母那里继承基因一样，对象也可直接从创建它的构造函数那里继承其<code>原型</code>。请看下面的例子：<code>Bird</code>构造函数创建了一个<code>duck</code>对象：",'<blockquote>function Bird(name) {<br>&nbsp;&nbsp;this.name = name;<br>}<br><br>let duck = new Bird("Donald");</blockquote>',"<code>duck</code>从<code>Bird</code>构造函数那里继承了它的<code>原型</code>，你可以使用<code>isPrototypeOf</code>方法来验证他们之间的关系：","<blockquote>Bird.prototype.isPrototypeOf(duck);<br>// 返回 true</blockquote>","<hr>","使用<code>isPrototypeOf</code>方法验证<code>beagle</code>是否继承了<code>Dog</code>构造函数的<code>原型</code>。"],challengeType:1,fields:{slug:"/javascript-algorithms-and-data-structures/object-oriented-programming/understand-where-an-objects-prototype-comes-from",blockName:"Object Oriented Programming",tests:[{text:"<code>Dog.prototype</code>应该是<code>beagle</code>的<code>原型</code>。",testString:"assert(/Dog\\.prototype\\.isPrototypeOf\\(beagle\\)/.test(code), '<code>Dog.prototype</code>应该是<code>beagle</code>的<code>原型</code>。');"}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:'function Dog(name) {\n  this.name = name;\n}\n\nlet beagle = new Dog("Snoopy");\n\n// 请把你的代码写在这条注释以下\n\n',head:"",tail:""},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/javascript-algorithms-and-data-structures/object-oriented-programming/understand-the-prototype-chain",id:"587d7db0367417b2b2512b81"},slug:"/javascript-algorithms-and-data-structures/object-oriented-programming/understand-where-an-objects-prototype-comes-from"}}}});
//# sourceMappingURL=path---javascript-algorithms-and-data-structures-object-oriented-programming-understand-where-an-objects-prototype-comes-from-bc377196dd115057b113.js.map