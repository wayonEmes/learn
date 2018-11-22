webpackJsonp([0xf00c67919622],{4024:function(e,t){e.exports={data:{challengeNode:{title:"Know When Alt Text Should be Left Blank",description:["在上一个挑战中，我们了解到<code>img</code>标签必须有一个<code>alt</code>属性。在图片已经有了文字说明，或者仅仅为了美化页面的情况下，<code>alt</code>属性似乎有些多余。","即便如此，我们仍然需要为<code>img</code>标签添加<code>alt</code>属性，这时可以把它设为空，例如：","<code>&lt;img src=&quot;visualDecoration.jpeg&quot; alt=&quot;&quot;&gt;</code>","对于背景图片，它们通常起装饰作用，而且含有 CSS 类，所以背景图片不会被屏幕阅读器处理。","<strong>注意：</strong><br>对于有标题的图片，我们依然需要添加<code>alt</code>属性，因为这样有助于搜索引擎记录图片内容。","<hr>","Camper Cat 已经大体写好了博客页面。他打算使用忍者刀图片作为两篇文章之间的分割线，并为图片添加一个空的<code>alt</code>属性（注意：这里<code>img</code>标签的<code>src</code>属性提供的链接是无效的，因此页面上可能不会显示图片，不用担心）。"],challengeType:0,fields:{slug:"/responsive-web-design/applied-accessibility/know-when-alt-text-should-be-left-blank",blockName:"Applied Accessibility",tests:[{text:"你的<code>img</code>标签应该包含<code>alt</code>属性。",testString:"assert(!($('img').attr('alt') == undefined), '你的<code>img</code>标签应该包含<code>alt</code>属性。');"},{text:"<code>alt</code>属性对应的值应该为空。",testString:"assert($('img').attr('alt') == '', '<code>alt</code>属性对应的值应该为空。');"}]},required:[],files:{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:'<h1>Deep Thoughts with Master Camper Cat</h1>\n<article>\n  <h2>Defeating your Foe: the Red Dot is Ours!</h2>\n  <p>To Come...</p>\n</article>\n\n<img src="samuraiSwords.jpeg">\n\n<article>\n  <h2>Is Chuck Norris a Cat Person?</h2>\n  <p>To Come...</p>\n</article>',head:"",tail:""},indexjs:null,indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/responsive-web-design/applied-accessibility/use-headings-to-show-hierarchical-relationships-of-content",id:"587d774c367417b2b2512a9d"},slug:"/responsive-web-design/applied-accessibility/know-when-alt-text-should-be-left-blank"}}}});
//# sourceMappingURL=path---responsive-web-design-applied-accessibility-know-when-alt-text-should-be-left-blank-45d9ada60ed6dcf70c5d.js.map