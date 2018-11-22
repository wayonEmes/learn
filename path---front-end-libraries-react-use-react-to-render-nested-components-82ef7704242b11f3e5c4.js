webpackJsonp([23072749152455],{3608:function(e,t){e.exports={data:{challengeNode:{title:"Use React to Render Nested Components",description:["上一个挑战显示了组合两个组件的简单方法，但是有许多不同的方法可以把 React 组件组合在一起。","组件组合是 React 的强大功能之一。当你使用 React 时，应当先用组件的思路考虑清楚用户界面的结构（如上一个挑战中的 App 示例）。可以将 UI 分解为基本的构建块，这些构建块就是组件。这样做有助于将负责 UI 的代码与负责处理应用程序逻辑的代码分开，并可以大大简化复杂项目的开发和维护。","<hr>","代码编辑器中定义了两个功能组件，分别是<code>TypesOfFruit</code>和<code>Fruits</code>。请把<code>TypesOfFruit</code>组件放到<code>Fruits</code>组件中，然后把<code>Fruits</code>组件放到<code>TypesOfFood</code>组件中。结果应该是子组件嵌套在父组件中，父组件嵌套在它本身的父组件中！"],challengeType:6,fields:{slug:"/front-end-libraries/react/use-react-to-render-nested-components",blockName:"React",tests:[{text:"<code>TypesOfFood</code>组件应该返回单个<code>div</code>元素。",testString:"assert(Enzyme.shallow(React.createElement(TypesOfFood)).type() === 'div', '<code>TypesOfFood</code>组件应该返回单个<code>div</code>元素。');"},{text:"<code>TypesOfFood</code>组件应该返回<code>Fruits</code>组件。",testString:"assert(Enzyme.shallow(React.createElement(TypesOfFood)).props().children[1].type.name === 'Fruits', '<code>TypesOfFood</code>组件应该返回<code>Fruits</code>组件。');"},{text:"<code>Fruits</code>组件应该返回<code>TypesOfFruit</code>组件。",testString:"assert(Enzyme.mount(React.createElement(TypesOfFood)).find('h2').html() === '<h2>Fruits:</h2>', '<code>Fruits</code>组件应该返回<code>TypesOfFruit</code>组件。');"},{text:"<code>TypesOfFruit</code>组件应该返回<code>h2</code>和<code>ul</code>元素。",testString:"assert(Enzyme.mount(React.createElement(TypesOfFood)).find('ul').text() === 'ApplesBlueberriesStrawberriesBananas', '<code>TypesOfFruit</code>组件应该返回<code>h2</code>和<code>ul</code>元素。');"}]},required:[{link:null,raw:null,src:"https://unpkg.com/react@16.4.0/umd/react.production.min.js"},{link:null,raw:null,src:"https://unpkg.com/react-dom@16.4.0/umd/react-dom.production.min.js"}],files:{indexhtml:null,indexjs:null,indexjsx:{key:"indexjsx",ext:"jsx",name:"index",contents:"const TypesOfFruit = () => {\n  return (\n    <div>\n      <h2>Fruits:</h2>\n      <ul>\n        <li>Apples</li>\n        <li>Blueberries</li>\n        <li>Strawberries</li>\n        <li>Bananas</li>\n      </ul>\n    </div>\n  );\n};\n\nconst Fruits = () => {\n  return (\n    <div>\n      { /* change code below this line */ }\n\n      { /* change code above this line */ }\n    </div>\n  );\n};\n\nclass TypesOfFood extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    return (\n      <div>\n        <h1>Types of Food:</h1>\n        { /* change code below this line */ }\n\n        { /* change code above this line */ }\n      </div>\n    );\n  }\n};",head:"",tail:"ReactDOM.render(<TypesOfFood />, document.getElementById('root'))"}}}},pathContext:{challengeMeta:{introPath:"",template:"<body><div id='root'></div><div id='challenge-node'></div>${ source || '' }</body>",required:[{link:null,raw:null,src:"https://unpkg.com/react@16.4.0/umd/react.production.min.js"},{link:null,raw:null,src:"https://unpkg.com/react-dom@16.4.0/umd/react-dom.production.min.js"}],nextChallengePath:"/front-end-libraries/react/compose-react-components",id:"5a24c314108439a4d4036165"},slug:"/front-end-libraries/react/use-react-to-render-nested-components"}}}});
//# sourceMappingURL=path---front-end-libraries-react-use-react-to-render-nested-components-82ef7704242b11f3e5c4.js.map