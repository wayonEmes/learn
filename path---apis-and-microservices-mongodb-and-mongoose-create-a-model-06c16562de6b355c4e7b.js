webpackJsonp([46328503699235],{2790:function(e,o){e.exports={data:{challengeNode:{title:"Create a Model",guideUrl:null,description:["首先，我们需要一个 Schema，每一个 Schema 对应一个 MongoDB collection，并且在那个 collection 里面定义 documents 的模型。","Schemas 是 Models 的构建块。它们可以嵌套来创建复杂的模型，但是这里，我们只学习简单的用法。","Model 可以被实例化，实例化后的对象称为 documents。","创建一个拥有以下 Prototype 的 Person 对象：","<code>- Person Prototype -</code>","<code>--------------------</code>","<code>name : string [required]</code>","<code>age :  number</code>","<code>favoriteFoods : array of strings (*) </code>","你可以使用基础的 SchemaTypes 去添加更多的字段，比如使用 required 或者 unique 这样的简单验证去设置默认值。参考 <a href='http://mongoosejs.com/docs/guide.html'>Mongoose 文档</a>。","[C]RUD Part I - CREATE","注意： Glitch 是一个真实的服务，并且通过 handler 函数和 db 进行交互。 这些函数通过一些事件去触发（例如：有人从终端调用了你的 API），我们在这些练习中遵循同样的方法。 比如，我们在完成 nserting、searching、updating 或者 deleting 这样的异步操作后接着回调<code>done()</code>函数。它遵循 Node 的惯例，需要在 success 时回调<code>done(null, data)</code>，在 error 时回调<code>done(err)</code>。","Warning - 当与远程服务器交互时可能发生错误！","<code>/* 示例 */</code>","<code>var someFunc = function(done) {</code>","<code>  // 执行一些可能产生错误的代码</code>","<code>  if(error) return done(error);</code>","<code>  done(null, result);</code>","<code>};</code>"],challengeType:2,fields:{blockName:"MongoDB and Mongoose",slug:"/apis-and-microservices/mongodb-and-mongoose/create-a-model",tests:[{text:"成功创建一个 Schema 实例。",testString:"getUserInput => $.post(getUserInput('url') + '/_api/mongoose-model', {name: 'Mike', age: 28, favoriteFoods: ['pizza', 'cheese']}).then(data => { assert.equal(data.name, 'Mike', '\"model.name\" is not what expected'); assert.equal(data.age, '28', '\"model.age\" is not what expected'); assert.isArray(data.favoriteFoods, '\"model.favoriteFoods\" is not an Array'); assert.include(data.favoriteFoods, 'pizza', '\"model.favoriteFoods\" does not include the expected items'); assert.include(data.favoriteFoods, 'cheese', '\"model.favoriteFoods\" does not include the expected items'); }, xhr => { throw new Error(xhr.responseText); })"}]}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/apis-and-microservices/mongodb-and-mongoose/create-and-save-a-record-of-a-model",id:"587d7fb6367417b2b2512c07"},slug:"/apis-and-microservices/mongodb-and-mongoose/create-a-model"}}}});
//# sourceMappingURL=path---apis-and-microservices-mongodb-and-mongoose-create-a-model-06c16562de6b355c4e7b.js.map