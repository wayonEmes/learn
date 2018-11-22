webpackJsonp([0xdec04039903c],{3581:function(e,c){e.exports={data:{challengeNode:{title:"Define an HTML Class in JSX",description:["现在你已经习惯了编写 JSX，你可能想知道它与 HTML 有什么不同。","到目前为止，HTML 和 JSX 似乎完全相同。","JSX 的一个关键区别是你不能再使用<code>class</code>这个单词来定义 HTML 的 class 名。这是因为<code>class</code>是 JavaScript 中的关键字。JSX 使用<code>className</code>代替。","事实上，JSX 中所有 HTML 属性和事件引用的命名约定都变成了驼峰式。例如，JSX 中的单击事件是 <code>onClick</code>，而不是 <code>onclick</code>。同样，<code>onchange</code>变成了<code>onChange</code>。虽然这是一个微妙的差异，但请你一定要记住。","<hr>","将 class<code>myDiv</code> 应用于 JSX 提供的<code>div</code>上。"],challengeType:6,fields:{slug:"/front-end-libraries/react/define-an-html-class-in-jsx",blockName:"React",tests:[{text:"常量<code>JSX</code>应该返回一个<code>div</code>元素。",testString:"assert.strictEqual(JSX.type, 'div', '常量<code>JSX</code>应该返回一个<code>div</code>元素。');"},{text:"<code>div</code>有一个<code>myDiv</code>class。",testString:"assert.strictEqual(JSX.props.className, 'myDiv', '<code>div</code>有一个<code>myDiv</code>class。');"}]},required:[{link:null,raw:null,src:"https://unpkg.com/react@16.4.0/umd/react.production.min.js"},{link:null,raw:null,src:"https://unpkg.com/react-dom@16.4.0/umd/react-dom.production.min.js"}],files:{indexhtml:null,indexjs:null,indexjsx:{key:"indexjsx",ext:"jsx",name:"index",contents:"const JSX = (\n  <div>\n    <h1>Add a class to this div</h1>\n  </div>\n);",head:"",tail:"ReactDOM.render(JSX, document.getElementById('root'))"}}}},pathContext:{challengeMeta:{introPath:"",template:"<body><div id='root'></div><div id='challenge-node'></div>${ source || '' }</body>",required:[{link:null,raw:null,src:"https://unpkg.com/react@16.4.0/umd/react.production.min.js"},{link:null,raw:null,src:"https://unpkg.com/react-dom@16.4.0/umd/react-dom.production.min.js"}],nextChallengePath:"/front-end-libraries/react/learn-about-self-closing-jsx-tags",id:"5a24c314108439a4d4036160"},slug:"/front-end-libraries/react/define-an-html-class-in-jsx"}}}});
//# sourceMappingURL=path---front-end-libraries-react-define-an-html-class-in-jsx-da622842d8e1b7c51359.js.map