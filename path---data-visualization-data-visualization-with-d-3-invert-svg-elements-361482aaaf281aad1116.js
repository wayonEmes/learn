webpackJsonp([26209497434590],{3475:function(e,t){e.exports={data:{challengeNode:{title:"Invert SVG Elements",description:["你可能已经注意到了常见的条形图像是把这个翻转或者颠倒过来。这是因为 SVG 的 (x, y) 坐标有些特别。","在 SVG 中，坐标轴的原点在左上角。<code>x</code>坐标为 0 将图形放在 SVG 区域的左边缘，<code>y</code>坐标为 0 将图形放在 SVG 区域的上边缘。<code>x</code>值增大矩形将向右移动，<code>y</code>值增大矩形将向下移动。","为了使条形图向上，需要改变<code>y</code>坐标计算的方式。这需要计算组的高度和 SVG 区域的总高度。","SVG 区域的高度为 100。如果在集合中一个数据点的值为 0，这组将从 SVG 区域的最底端开始（而不是顶端）。为此，<code>y</code>坐标的值应为 100。如果数据点的值为 1，你将从<code>y</code>坐标为 100 开始来将这组设置在底端，然后需要考虑该组的高度为 1，所以最终的<code>y</code>坐标将是 99。","<code>y</code>坐标为<code>y = heightOfSVG - heightOfBar</code>会将条形图向上放置。","<hr>","改变<code>y</code>属性的回调函数，让条形图向上放置。<code>height</code>的值是 3 倍<code>d</code>的值。","<strong>提示</strong><br>通常，高度关系为<code>y = h - m * d</code>，其中<code>m</code>是对数据点进行缩放的比例。"],challengeType:0,fields:{slug:"/data-visualization/data-visualization-with-d3/invert-svg-elements",blockName:"Data Visualization with D3",tests:[{text:"第一个<code>rect</code>的<code>y</code>值应该为 64。",testString:"assert($('rect').eq(0).attr('y') == h - (dataset[0] * 3), '第一个<code>rect</code>的<code>y</code>值应该为 64。');"},{text:"第二个<code>rect</code>的<code>y</code>值应该为 7。",testString:"assert($('rect').eq(1).attr('y') == h - (dataset[1] * 3), '第二个<code>rect</code>的<code>y</code>值应该为 7。');"},{text:"第三个<code>rect</code>的<code>y</code>值应该为 34。",testString:"assert($('rect').eq(2).attr('y') == h - (dataset[2] * 3), '第三个<code>rect</code>的<code>y</code>值应该为 34。');"},{text:"第四个<code>rect</code>的<code>y</code>值应该为 49。",testString:"assert($('rect').eq(3).attr('y') == h - (dataset[3] * 3), '第四个<code>rect</code>的<code>y</code>值应该为 49。');"},{text:"第五个<code>rect</code>的<code>y</code>值应该为 25。",testString:"assert($('rect').eq(4).attr('y') == h - (dataset[4] * 3), '第五个<code>rect</code>的<code>y</code>值应该为 25。');"},{text:"第六个<code>rect</code>的<code>y</code>值应该为 46。",testString:"assert($('rect').eq(5).attr('y') == h - (dataset[5] * 3), '第六个<code>rect</code>的<code>y</code>值应该为 46。');"},{text:"第七个<code>rect</code>的<code>y</code>值应该为 13。",testString:"assert($('rect').eq(6).attr('y') == h - (dataset[6] * 3), '第七个<code>rect</code>的<code>y</code>值应该为 13。');"},{text:"第八个<code>rect</code>的<code>y</code>值应该为 58。",testString:"assert($('rect').eq(7).attr('y') == h - (dataset[7] * 3), '第八个<code>rect</code>的<code>y</code>值应该为 58。');"},{text:"第九个<code>rect</code>的<code>y</code>值应该为 73。",testString:"assert($('rect').eq(8).attr('y') == h - (dataset[8] * 3), '第九个<code>rect</code>的<code>y</code>值应该为 73。');"}]},required:[{link:null,raw:null,src:"https://cdnjs.cloudflare.com/ajax/libs/d3/4.3.0/d3.min.js"}],files:{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:'<body>\n  <script>\n    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];\n    \n    const w = 500;\n    const h = 100;\n    \n    const svg = d3.select("body")\n                  .append("svg")\n                  .attr("width", w)\n                  .attr("height", h);\n    \n    svg.selectAll("rect")\n       .data(dataset)\n       .enter()\n       .append("rect")\n       .attr("x", (d, i) => i * 30)\n       .attr("y", (d, i) => {\n         // 在下面添加你的代码\n         \n         \n         \n         // 在上面添加你的代码\n       })\n       .attr("width", 25)\n       .attr("height", (d, i) => 3 * d);\n  </script>\n</body>',head:"",tail:""},indexjs:null,indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[{link:null,raw:null,src:"https://cdnjs.cloudflare.com/ajax/libs/d3/4.3.0/d3.min.js"}],nextChallengePath:"/data-visualization/data-visualization-with-d3/change-the-color-of-an-svg-element",id:"587d7fa9367417b2b2512bd0"},slug:"/data-visualization/data-visualization-with-d3/invert-svg-elements"}}}});
//# sourceMappingURL=path---data-visualization-data-visualization-with-d-3-invert-svg-elements-361482aaaf281aad1116.js.map