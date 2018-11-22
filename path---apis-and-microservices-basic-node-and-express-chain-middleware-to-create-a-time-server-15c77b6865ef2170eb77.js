webpackJsonp([0x7db8cb5fb6bf],{2765:function(e,t){e.exports={data:{challengeNode:{title:"Chain Middleware to Create a Time Server",guideUrl:null,description:["使用<code>app.METHOD(path, middlewareFunction)</code>可以将中间件挂载到指定的路由。中间件也可以在路由定义中链接。","请看以下示例：","<blockquote>app.get('/user', function(req, res, next) {<br>  req.user = getTheUserSync();  // Hypothetical synchronous operation<br>  next();<br>}, function(req, res) {<br>  res.send(req.user);<br>})</blockquote>","此方法可用于将服务操作拆分为较小的单元。这样可以让应用拥有更好的结构，以便于在不同的位置上复用代码。此方法还可用于对数据执行某些验证。在每一个中间件堆栈中，你都可以阻止当前链的执行，并将控制权传递给专门设计用于处理错误的函数。或者你可以将控制权传递给下一个匹配的路径，以处理特殊情况。我们将在高级 Express 章节中看到。","在路由<code>app.get('/now', ...)</code>链中，在中间件函数中，你应该在<code>req.time</code>里将当前时间添加到请求对象中。你可以使用<code>new Date().toString()</code>。在处理函数中，使用<code>{time: req.time}</code>结构的 JSON 对象来响应。","提示: 如果不链接中间件，测试将不能通过。如果将中间件函数挂载在其他地方，即使输出结果正确，测试也会失败。"],challengeType:2,fields:{blockName:"Basic Node and Express",slug:"/apis-and-microservices/basic-node-and-express/chain-middleware-to-create-a-time-server",tests:[{text:"路由 /now 应该已经挂载了中间件",testString:"getUserInput => $.get(getUserInput('url') + '/_api/chain-middleware-time').then(data => { assert.equal(data.stackLength, 2, '路由 \"/now\" 没挂载中间件'); }, xhr => { throw new Error(xhr.responseText); })"},{text:"路由 /now 应该返回一个从现在开始 +/-20 秒的时间",testString:"getUserInput => $.get(getUserInput('url') + '/_api/chain-middleware-time').then(data => { var now = new Date(); assert.isAtMost(Math.abs(new Date(data.time) - now), 20000, '返回时间不在现在 的 +/-20 秒之间'); }, xhr => { throw new Error(xhr.responseText); })"}]}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/apis-and-microservices/basic-node-and-express/get-route-parameter-input-from-the-client",id:"587d7fb1367417b2b2512bf4"},slug:"/apis-and-microservices/basic-node-and-express/chain-middleware-to-create-a-time-server"}}}});
//# sourceMappingURL=path---apis-and-microservices-basic-node-and-express-chain-middleware-to-create-a-time-server-15c77b6865ef2170eb77.js.map