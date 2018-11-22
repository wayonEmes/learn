webpackJsonp([0x6b60bcfa3afe],{3469:function(e,t){e.exports={data:{challengeNode:{title:"Create a Bar for Each Data Point in the Set",description:["上个挑战仅仅在<code>svg</code>中添加了一个矩形来表示一组。接下来你将结合到目前为止所学的关于<code>data()</code>、<code>enter()</code>、SVG 图形的知识，为<code>dataset</code>中的每一个数据点创建并且添加一个矩形。","之前的挑战展示了如何为<code>dataset</code>中的每个对象创建并添加一个<code>div</code>：",'<blockquote>d3.select("body").selectAll("div")<br>&nbsp;&nbsp;.data(dataset)<br>&nbsp;&nbsp;.enter()<br>&nbsp;&nbsp;.append("div")</blockquote>',"<code>rect</code>元素和<code>div</code>有一些不同，<code>rect</code>必须添加在<code>svg</code>元素内，而不能直接添加在<code>body</code>内。同时，你需要告诉 D3 将<code>rect</code>放在<code>svg</code>区域的哪个位置。组的放置会在下一个挑战中讲到。","<hr>","用<code>data()</code>、<code>enter()</code>、<code>append()</code>方法为<code>dataset</code>中的每一个对象创建并添加一个<code>rect</code>。每一组都将直接显示在上一组的上面，将上一组覆盖，这将会在下一个挑战中得到修改。"],challengeType:0,fields:{slug:"/data-visualization/data-visualization-with-d3/create-a-bar-for-each-data-point-in-the-set",blockName:"Data Visualization with D3",tests:[{text:"你的文档应该有 9 个<code>rect</code>元素。",testString:"assert($('rect').length == 9, '你的文档应该有 9 个<code>rect</code>元素。');"},{text:"你应该使用<code>data()</code>方法。",testString:"assert(code.match(/\\.data/g), '你应该使用<code>data()</code>方法。');"},{text:"你应该使用<code>enter()</code>方法。",testString:"assert(code.match(/\\.enter/g), '你应该使用<code>enter()</code>方法。');"},{text:"你应该使用<code>append()</code>方法。",testString:"assert(code.match(/\\.append/g), '你应该使用<code>append()</code>方法。');"}]},required:[{link:null,raw:null,src:"https://cdnjs.cloudflare.com/ajax/libs/d3/4.3.0/d3.min.js"}],files:{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:'<body>\n  <script>\n    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];\n    \n    const w = 500;\n    const h = 100;\n    \n    const svg = d3.select("body")\n                  .append("svg")\n                  .attr("width", w)\n                  .attr("height", h);\n    \n    svg.selectAll("rect")\n       // 在下面添加你的代码\n       \n       \n       \n       // 在上面添加你的代码\n       .attr("x", 0)\n       .attr("y", 0)\n       .attr("width", 25)\n       .attr("height", 100);\n  </script>\n</body>',head:"",tail:""},indexjs:null,indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[{link:null,raw:null,src:"https://cdnjs.cloudflare.com/ajax/libs/d3/4.3.0/d3.min.js"}],nextChallengePath:"/data-visualization/data-visualization-with-d3/dynamically-set-the-coordinates-for-each-bar",id:"587d7fa8367417b2b2512bcd"},slug:"/data-visualization/data-visualization-with-d3/create-a-bar-for-each-data-point-in-the-set"}}}});
//# sourceMappingURL=path---data-visualization-data-visualization-with-d-3-create-a-bar-for-each-data-point-in-the-set-daaa59dc68e2e1c49113.js.map