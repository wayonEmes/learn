webpackJsonp([0xd843cdc85483],{2841:function(e,t){e.exports={data:{challengeNode:{title:"Learn how a Stack Works",description:["你肯定见过桌上摆着一摞书的场景；也应该使用过文本编辑器的撤销功能；同样，你肯定也点击过手机应用里面的返回键来回到上一个操作页面。","这些场景有什么共同之处呢？他们都以一种特定的方式存储数据，让我们可以通过一些操作返回到之前的状态。","最上层的书总是最后放上去的。如果我们拿走了最上面的书，我们看到的总是倒数第二本放上去的书。","我们会发现上述例子都遵循 <dfn>Last-In-First-Out</dfn>（后进先出）的原则。接下来我们会尝试着用代码去实现这一原则。","我们将这种类型的数据存储方式称为 <dfn>Stack</dfn>（栈）。需要特别注意的是我们通常使用<code>push()</code>方法将 JavaScript 对象压入栈中，同时使用<code>pop()</code>方法将 JavaScript 对象弹出栈。","<hr>",'现在我们有一个存储着作业信息的栈（以数组表示）：<code>"BIO12"</code>位于栈底，而<code>"PSY44"</code>则处于栈顶。','请使用上文提到的 JavaScript 方法来对这个数组做栈操作。你需要移除栈顶元素<code>"PSY44"</code>，然后再往栈顶添加<code>"CS50"</code>元素。'],challengeType:1,fields:{slug:"/coding-interview-prep/data-structures/learn-how-a-stack-works",blockName:"Data Structures",tests:[{text:"<code>homeworkStack</code>应该包含 4 个元素。",testString:"assert(homeworkStack.length === 4, '<code>homeworkStack</code>应该包含 4 个元素。');"},{text:'<code>homeworkStack</code>中最后一个元素应该是<code>"CS50"</code>。',testString:"assert(homeworkStack[3] === 'CS50', '<code>homeworkStack</code>中最后一个元素应该是<code>\"CS50\"</code>。');"},{text:'<code>homeworkStack</code>中不应存在<code>"PSY44"</code>元素。',testString:"assert(homeworkStack.indexOf('PSY44') === -1, '<code>homeworkStack</code>中不应存在<code>\"PSY44\"</code>元素。');"},{text:"不应更改<code>homeworkStack</code>的初始声明。",testString:'assert(code.match(/=/g).length === 1 && /homeworkStack\\s*=\\s*\\["BIO12"\\s*,\\s*"HIS80"\\s*,\\s*"MAT122"\\s*,\\s*"PSY44"\\]/.test(code), \'不应更改<code>homeworkStack</code>的初始声明。\');'}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:'var homeworkStack = ["BIO12","HIS80","MAT122","PSY44"];\n// 请把你的代码写在这条注释以下\n',head:"",tail:""},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/coding-interview-prep/data-structures/create-a-stack-class",id:"587d8250367417b2b2512c5e"},slug:"/coding-interview-prep/data-structures/learn-how-a-stack-works"}}}});
//# sourceMappingURL=path---coding-interview-prep-data-structures-learn-how-a-stack-works-52f643aeada7f85a53f5.js.map