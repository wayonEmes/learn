webpackJsonp([0xe04414a5563e],{4109:function(e,t){e.exports={data:{challengeNode:{title:"Override Class Declarations with Inline Styles",description:["我们刚刚证明了，id 选择器无论在<code>style</code>标签哪里声明，都会覆盖 class 声明的样式，","其实还有其他方法可以覆盖重写 CSS 样式。你还记得行内样式吗？","<hr>","使用行内样式尝试让<code>h1</code>的字体颜色变白。像下面这样使用：",'<code>&#60;h1 style="color: green"&#62;</code>',"你的<code>h1</code>元素需继续保留<code>blue-text</code>和<code>pink-text</code>class。"],challengeType:0,fields:{slug:"/responsive-web-design/basic-css/override-class-declarations-with-inline-styles",blockName:"Basic CSS",tests:[{text:"<code>h1</code>元素应该包含<code>pink-text</code> class。",testString:'assert($("h1").hasClass("pink-text"), \'<code>h1</code>元素应该包含<code>pink-text</code> class。\');'},{text:"<code>h1</code>元素应该包含<code>blue-text</code> class。",testString:'assert($("h1").hasClass("blue-text"), \'<code>h1</code>元素应该包含<code>blue-text</code> class。\');'},{text:"<code>h1</code>元素应该包含一个名为<code>orange-text</code>的id。",testString:'assert($("h1").attr("id") === "orange-text", \'<code>h1</code>元素应该包含一个名为<code>orange-text</code>的id。\');'},{text:"<code>h1</code>元素应该含有行内样式。",testString:"assert(document.querySelector('h1[style]'), '<code>h1</code>元素应该含有行内样式。');"},{text:"<code>h1</code>元素的字体颜色应该为白色。",testString:'assert($("h1").css("color") === "rgb(255, 255, 255)", \'<code>h1</code>元素的字体颜色应该为白色。\');'}]},required:[],files:{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:'<style>\n  body {\n    background-color: black;\n    font-family: monospace;\n    color: green;\n  }\n  #orange-text {\n    color: orange;\n  }\n  .pink-text {\n    color: pink;\n  }\n  .blue-text {\n    color: blue;\n  }\n</style>\n<h1 id="orange-text" class="pink-text blue-text">Hello World!</h1>',head:"",tail:""},indexjs:null,indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/responsive-web-design/basic-css/override-all-other-styles-by-using-important",id:"bad87fee1348bd9aedf06756"},slug:"/responsive-web-design/basic-css/override-class-declarations-with-inline-styles"}}}});
//# sourceMappingURL=path---responsive-web-design-basic-css-override-class-declarations-with-inline-styles-82cb892cea7261fb487c.js.map