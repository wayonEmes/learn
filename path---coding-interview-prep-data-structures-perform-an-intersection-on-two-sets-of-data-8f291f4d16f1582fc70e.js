webpackJsonp([0x92c6ba25f8a4],{2845:function(e,n){e.exports={data:{challengeNode:{title:"Perform an Intersection on Two Sets of Data",description:["在本次练习当中，我们需要在<code>Set</code>数据结构中写一个用于计算两集合交集的方法<code>intersection</code>。交集的意思是是两个或者多个集合共同拥有的元素组成的集合。该方法应该接收<code>Set</code>为参数并返回两个集合的交集。","举个例子，集合<code>setA = ['a','b','c']</code>和集合<code>setB = ['a','b','d','e']</code>的交集计算结果为：<code>setA.intersection(setB) = ['a', 'b']</code>。"],challengeType:1,fields:{slug:"/coding-interview-prep/data-structures/perform-an-intersection-on-two-sets-of-data",blockName:"Data Structures",tests:[{text:"<code>Set</code>应该有<code>intersection</code>方法。",testString:"assert(function(){var test = new Set(); return (typeof test.intersection === 'function')}, '<code>Set</code>应该有<code>intersection</code>方法。');"},{text:"<code>intersection</code>方法应返回正确的集合结果。",testString:"assert(function(){  var setA = new Set();  var setB = new Set();  setA.add('a');  setA.add('b');  setA.add('c');  setB.add('c');  setB.add('d');  var intersectionSetAB = setA.intersection(setB); return (intersectionSetAB.size() === 1 && intersectionSetAB.values()[0] === 'c')}, '<code>intersection</code>方法应返回正确的集合结果。');"}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:"function Set() {\n    // collection 变量用来存储集合中的元素\n    var collection = [];\n    // 当集合中存在 element 元素时返回 true 否则返回 false\n    this.has = function(element) {\n        return (collection.indexOf(element) !== -1);\n    };\n    // 该方法会返回集合内所有元素\n    this.values = function() {\n        return collection;\n    };\n    // 该方法会把 element 添加到集合中\n    this.add = function(element) {\n        if(!this.has(element)){\n            collection.push(element);\n            return true;\n        }\n        return false;\n    };\n    // 该方法用于从集合中移除 element 元素\n    this.remove = function(element) {\n        if(this.has(element)){\n           var index = collection.indexOf(element);\n            collection.splice(index,1);\n            return true;\n        }\n        return false;\n    };\n    // 该方法返回集合长度\n    this.size = function() {\n        return collection.length;\n    };\n    // 该方法返回两个集合的交集\n    this.union = function(otherSet) {\n        var unionSet = new Set();\n        var firstSet = this.values();\n        var secondSet = otherSet.values();\n        firstSet.forEach(function(e){\n            unionSet.add(e);\n        });\n        secondSet.forEach(function(e){\n            unionSet.add(e);\n        });\n        return unionSet;\n    };\n    // 请把你的代码写在这条注释以下\n    // 请把你的代码写在这条注释以上\n}",head:"",tail:""},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/coding-interview-prep/data-structures/perform-a-difference-on-two-sets-of-data",id:"587d8253367417b2b2512c6d"},slug:"/coding-interview-prep/data-structures/perform-an-intersection-on-two-sets-of-data"}}}});
//# sourceMappingURL=path---coding-interview-prep-data-structures-perform-an-intersection-on-two-sets-of-data-8f291f4d16f1582fc70e.js.map