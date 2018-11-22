webpackJsonp([0x83309e3255b1],{2773:function(e,s){e.exports={data:{challengeNode:{title:"Serve Static Assets",guideUrl:null,description:["HTML 服务器通常有一个或多个用户可以访问的目录。你可以将应用程序所需的静态资源 (样式表、脚本、图片) 放在那里。在 Express 中你可以使用中间件<code>express.static(path)</code>来设置此功能，它的参数就是静态资源文件的绝对路径。如果你不知道什么是中间件，也不用担心。我们稍后将详细讨论此事。一个最基本的中间件可以看做是一个函数，它拦截路由处理方法，并在里面添加了一点别的信息。使用<code>app.use(path, middlewareFunction)</code>方法来加载一个中间件。它的第一个参数是可选的，如果没设置第一个参数，那么应用的所有请求都会经过这个中间件处理。","使用<code>app.use()</code>来加载<code>express.static()</code>中间件，让所有的请求都能访问我们的静态资源目录。静态资源的绝对路径是<code>__dirname + /public</code>。","现在 app 就能正常返回一个样式文件了，访问 app 根路径时，静态资源目录的文件就会被加载进来，现在你的首页看起来应该好些了！"],challengeType:2,fields:{blockName:"Basic Node and Express",slug:"/apis-and-microservices/basic-node-and-express/serve-static-assets",tests:[{text:"应用的静态资源文件应该来自<code>/public</code>目录",testString:"getUserInput => $.get(getUserInput('url') + '/style.css').then(data => { assert.match(data, /body\\s*\\{[^\\}]*\\}/, 'app 无法输出静态资源文件'); }, xhr => { throw new Error(xhr.responseText); })"}]}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/apis-and-microservices/basic-node-and-express/serve-json-on-a-specific-route",id:"587d7fb0367417b2b2512bf0"},slug:"/apis-and-microservices/basic-node-and-express/serve-static-assets"}}}});
//# sourceMappingURL=path---apis-and-microservices-basic-node-and-express-serve-static-assets-00785b0e1d06497648b8.js.map