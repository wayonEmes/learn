webpackJsonp([0xa9083df4ae8d],{3650:function(e,t){e.exports={data:{challengeNode:{title:"Create New Middleware",guideUrl:null,description:["注意，本项目在<a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/'>这个 Glitch 项目</a>的基础上进行开发，你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-advancednode/'>GitHub</a> 上克隆。","无论是否登录，或者哪怕用户试图访问其他页面，目前都会跳转到<code>/profile</code>。为了解决这个问题，我们需要在 profile 页面渲染之前进行用户验证，创建中间件就可以实现这个功能。","这个挑战的目标是创建<code>ensureAuthenticated(req, res, next)</code>中间件方法，通过在 <em>request</em> 上调用 passports 的<code>isAuthenticated</code>方法，我们可以检查 <em>req.user</em> 是否定义，从而确定用户是否通过认证。如果用户已通过验证，就会调用 <em>next()</em>，否则我们应重定向到主页并让用户登录。该中间件的实现是：","<pre>function ensureAuthenticated(req, res, next) {\n  if (req.isAuthenticated()) {\n      return next();\n  }\n  res.redirect('/');\n};</pre>","然后，我们需要把 <em>ensureAuthenticated</em> 中间件添加到处理请求的回调之前：","<pre>app.route('/profile')\n  .get(ensureAuthenticated, (req,res) => {\n       res.render(process.cwd() + '/views/pug/profile');\n  });</pre>","完成上述要求后，你就可以在左边提交你的页面链接。"],challengeType:2,fields:{blockName:"Advanced Node and Express",slug:"/information-security-and-quality-assurance/advanced-node-and-express/create-new-middleware",tests:[{text:"<code>ensureAuthenticated</code>中间件应添加到<code>/profile</code>路由中。",testString:"getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /ensureAuthenticated[^]*req.isAuthenticated/gi, '你应定义 ensureAuthenticated 中间件并调用 req.isAuthenticated 方法。'); assert.match(data, /profile[^]*get[^]*ensureAuthenticated/gi, 'ensureAuthenticated 中间件应在 /profile 路由中。'); }, xhr => { throw new Error(xhr.statusText); })"},{text:"如果没有通过验证，对 /profile 的 GET 请求应重定向到 /",testString:"getUserInput => $.get(getUserInput('url')+ '/profile') .then(data => { assert.match(data, /Home page/gi, '如果没有通过验证，尝试访问 profile 页面应重定向回主页。'); }, xhr => { throw new Error(xhr.statusText); })"}]}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/information-security-and-quality-assurance/advanced-node-and-express/how-to-put-a-profile-together",id:"5895f70df9fc0f352b528e6a"},slug:"/information-security-and-quality-assurance/advanced-node-and-express/create-new-middleware"}}}});
//# sourceMappingURL=path---information-security-and-quality-assurance-advanced-node-and-express-create-new-middleware-c0ff28738b72f028f814.js.map