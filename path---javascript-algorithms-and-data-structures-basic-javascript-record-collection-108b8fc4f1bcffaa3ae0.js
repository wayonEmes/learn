webpackJsonp([56031532844454],{3830:function(e,c){e.exports={data:{challengeNode:{title:"Record Collection",description:["你将获得一个 JSON 对象，用来表示你的部分音乐专辑收藏。每张专辑都有几个属性和一个唯一的 id 号作为键值。并非所有专辑都有完整的信息。",'写一个函数，根据传入的<code>id</code>（如<code>2548</code>）、<code>prop</code>（属性，如<code>"artist"</code>或<code>"tracks"</code>）以及<code>value</code>（值，如<code>"Addicted to Love"</code>）来修改音乐专辑收藏的数据。','如果属性<code>prop</code>不是<code>"tracks"</code>且值<code>value</code>不为空（<code>""</code>），则更新或设置该专辑属性的值<code>value</code>。',"你的函数必须始终返回整个音乐专辑集合对象。","处理不完整数据有几条规则：",'如果属性<code>prop</code>是<code>"tracks"</code>，但是专辑没有<code>"tracks"</code>属性，则在添加值之前先给<code>"tracks"</code>创建一个空数组。','如果<code>prop</code>是<code>"tracks"</code>，并且值<code>value</code>不为空（<code>""</code>）， 把值<code>value</code>添加到<code>tracks</code>数组中。','如果值<code>value</code>为空（<code>""</code>），则删除专辑的这一属性<code>prop</code>','<strong>提示：</strong><br>当<a href="javascript-algorithms-and-data-structures/basic-javascript/accessing-object-properties-with-variables" target="_blank">通过变量访问对象的属性</a>时，应使用<code>中括号</code>。','Push 是一个数组方法，详情请查看<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push" target="_blank">Mozilla Developer Network</a>.','你可以参考这一节的内容<a href="javascript-algorithms-and-data-structures/basic-javascript/manipulating-complex-objects" target="_blank">Manipulating Complex Objects</a>复习相关知识。'],challengeType:1,fields:{slug:"/javascript-algorithms-and-data-structures/basic-javascript/record-collection",blockName:"Basic JavaScript",tests:[{text:'执行<code>updateRecords(5439, "artist", "ABBA")</code>后，<code>artist</code>属性值应该是<code>"ABBA"</code>',testString:'collection = collectionCopy; assert(updateRecords(5439, "artist", "ABBA")[5439]["artist"] === "ABBA", \'执行<code>updateRecords(5439, "artist", "ABBA")</code>，后<code>artist</code>属性值应该是<code>"ABBA"</code>\');'},{text:'执行<code>updateRecords(5439, "tracks", "Take a Chance on Me")</code>后，<code>tracks</code>最后的元素应该是<code>"Take a Chance on Me"</code>',testString:'assert(updateRecords(5439, "tracks", "Take a Chance on Me")[5439]["tracks"].pop() === "Take a Chance on Me", \'执行<code>updateRecords(5439, "tracks", "Take a Chance on Me")</code>，后<code>tracks</code>最后的元素应该是<code>"Take a Chance on Me"</code>\');'},{text:'执行<code>updateRecords(2548, "artist", "")</code>后，<code>artist</code>不应被创建',testString:'updateRecords(2548, "artist", ""); assert(!collection[2548].hasOwnProperty("artist"), \'执行<code>updateRecords(2548, "artist", "")</code>，后<code>artist</code>不应被创建\');'},{text:'执行<code>updateRecords(1245, "tracks", "Addicted to Love")</code>后，<code>tracks</code>最后的元素应该是<code>"Addicted to Love"</code>',testString:'assert(updateRecords(1245, "tracks", "Addicted to Love")[1245]["tracks"].pop() === "Addicted to Love", \'执行<code>updateRecords(1245, "tracks", "Addicted to Love")</code>，后<code>tracks</code>最后的元素应该是<code>"Addicted to Love"</code>\');'},{text:'执行<code>updateRecords(2468, "tracks", "Free")</code>后，<code>tracks</code>第一个元素应该是<code>"1999"</code>',testString:'assert(updateRecords(2468, "tracks", "Free")[2468]["tracks"][0] === "1999", \'执行<code>updateRecords(2468, "tracks", "Free")</code>，后<code>tracks</code>第一个元素应该是<code>"1999"</code>\');'},{text:'执行<code>updateRecords(2548, "tracks", "")</code>后，<code>tracks</code>不应被创建',testString:'updateRecords(2548, "tracks", ""); assert(!collection[2548].hasOwnProperty("tracks"), \'执行<code>updateRecords(2548, "tracks", "")</code>，后<code>tracks</code>应该被创建\');'},{text:'执行<code>updateRecords(1245, "album", "Riptide")</code>后，<code>album</code>应该是<code>"Riptide"</code>',testString:'assert(updateRecords(1245, "album", "Riptide")[1245]["album"] === "Riptide", \'After <code>updateRecords(1245, "album", "Riptide")</code>，后<code>album</code>应该是<code>"Riptide"</code>\');'}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:'// 初始化变量\nvar collection = {\n    "2548": {\n      "album": "Slippery When Wet",\n      "artist": "Bon Jovi",\n      "tracks": [ \n        "Let It Rock", \n        "You Give Love a Bad Name" \n      ]\n    },\n    "2468": {\n      "album": "1999",\n      "artist": "Prince",\n      "tracks": [ \n        "1999", \n        "Little Red Corvette" \n      ]\n    },\n    "1245": {\n      "artist": "Robert Palmer",\n      "tracks": [ ]\n    },\n    "5439": {\n      "album": "ABBA Gold"\n    }\n};\n// 复制 collection 以便测试\nvar collectionCopy = JSON.parse(JSON.stringify(collection));\n\n// 请把你的代码写在这条注释以下\nfunction updateRecords(id, prop, value) {\n  \n  \n  return collection;\n}\n\n// 你可以修改这一行来测试你的代码\nupdateRecords(5439, "artist", "ABBA");\n',head:"",tail:";(function(x) { return \"collection = \\n\" + JSON.stringify(x, '\\n', 2); })(collection);"},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/javascript-algorithms-and-data-structures/basic-javascript/iterate-with-javascript-while-loops",id:"56533eb9ac21ba0edf2244cf"},slug:"/javascript-algorithms-and-data-structures/basic-javascript/record-collection"}}}});
//# sourceMappingURL=path---javascript-algorithms-and-data-structures-basic-javascript-record-collection-108b8fc4f1bcffaa3ae0.js.map