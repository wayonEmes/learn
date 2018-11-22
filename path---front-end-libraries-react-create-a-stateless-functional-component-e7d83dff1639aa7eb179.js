webpackJsonp([0x8851649a69ec],{3580:function(e,n){e.exports={data:{challengeNode:{title:"Create a Stateless Functional Component",description:["组件是 React 的核心。React 中的所有内容都是一个组件，在这里你将学习如何创建一个组件。","有两种方法可以创建 React 组件。第一种方法是使用 JavaScript 函数。以这种方式定义组件会创建<em>无状态功能组件</em>。应用程序中的状态概念将在以后的挑战中介绍。目前，可以将无状态组件视为可以接收数据并对其进行渲染的组件，但是它不管理或跟踪对数据的更改，我们将在下一次挑战中介绍创建 React 组件的第二种方法。","要用函数创建组件，只需编写一个返回 JSX 或<code>null</code>的 JavaScript 函数。需要注意的一点是，React 要求你的函数名以大写字母开头。下面是一个无状态功能组件的示例，该组件在 JSX 中分配一个 HTML 的 class：","<blockquote>// After being transpiled, the &lt;div&gt; will have a CSS class of 'customClass'<br>const DemoComponent = function() {<br>&nbsp;&nbsp;return (<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className='customClass' /&gt;<br>&nbsp;&nbsp;);<br>};</blockquote>","因为 JSX 组件代表 HTML，所以你可以将几个组件放在一起以创建更复杂的 HTML 页面，这是 React 提供的组件架构的关键优势之一，它允许你用许多独立的组件组成 UI。这使得构建和维护复杂的用户界面变得更加容易。","<hr>","代码编辑器中有一个名为<code>MyComponent</code>的函数。完成此函数，使其返回包含一些文本字符串的单个<code>div</code>元素。","<strong>注意：</strong>&nbsp;文本被视为是<code>div</code>的子元素，因此你将不能使用自闭合标签。"],challengeType:6,fields:{slug:"/front-end-libraries/react/create-a-stateless-functional-component",blockName:"React",tests:[{text:"<code>MyComponent</code>应该返回 JSX。",testString:"assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.length === 1; })(), '<code>MyComponent</code>应该返回 JSX。');"},{text:"<code>MyComponent</code>应该返回一个<code>div</code>元素。",testString:"assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.children().type() === 'div' })(), '<code>MyComponent</code>应该返回一个<code>div</code>元素。');"},{text:"<code>div</code>元素应该包含一个文本字符串。",testString:"assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.find('div').text() !== ''; })(), '<code>div</code>元素应该包含一个文本字符串。');"}]},required:[{link:null,raw:null,src:"https://unpkg.com/react@16.4.0/umd/react.production.min.js"},{link:null,raw:null,src:"https://unpkg.com/react-dom@16.4.0/umd/react-dom.production.min.js"}],files:{indexhtml:null,indexjs:null,indexjsx:{key:"indexjsx",ext:"jsx",name:"index",contents:"const MyComponent = function() {\n  // change code below this line\n\n\n\n  // change code above this line\n}",head:"",tail:"ReactDOM.render(<MyComponent />, document.getElementById('root'))"}}}},pathContext:{challengeMeta:{introPath:"",template:"<body><div id='root'></div><div id='challenge-node'></div>${ source || '' }</body>",required:[{link:null,raw:null,src:"https://unpkg.com/react@16.4.0/umd/react.production.min.js"},{link:null,raw:null,src:"https://unpkg.com/react-dom@16.4.0/umd/react-dom.production.min.js"}],nextChallengePath:"/front-end-libraries/react/create-a-react-component",id:"5a24c314108439a4d4036162"},slug:"/front-end-libraries/react/create-a-stateless-functional-component"}}}});
//# sourceMappingURL=path---front-end-libraries-react-create-a-stateless-functional-component-e7d83dff1639aa7eb179.js.map