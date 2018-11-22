webpackJsonp([0x6c77c3eb1ef4],{4104:function(e,o){e.exports={data:{challengeNode:{title:"Import a Google Font",description:["除了大多数系统提供的默认字体以外，我们也可以使用自定义字体。网络上有各种各样的字体，不过在这个例子中，我们将会尝试使用<code>Google</code>字体库。","<a href='https://fonts.google.com/' target='_blank'>Google 字体</a>是一个免费的字体库，可以通过在 CSS 里面设置字体的 URL 来引用。","因此，下一步，我们将引入和使用<code>Google</code>字体。","引入<code>Google</code>字体，你需要复制<code>Google</code>字体的 URL，并粘贴到你的 HTML 里面。在这个挑战中，我们需要引入<code>Lobster</code>字体。因此，请复制以下代码段，并粘贴到代码编辑器顶部，即放到<code>style</code>标签之前。",'<code>&#60;link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css"&#62;</code>',"现在你可以设置<code>font-family</code>属性为<code>Lobster</code>，来使用<code>Lobster</code>字体。例子如下：<br><code>font-family: FAMILY_NAME, GENERIC_NAME;</code>.","<code>GENERIC_NAME</code>是可选的，其他字体不可用时便作为后备字体，在下一个挑战中可以得到体现。",'字体名区分大小写，并且如果字体名含有空格，需要用引号括起来。例如，使用<code>"Open Sans"</code>字体需要添加引号，而<code>Lobster</code>字体则不需要。',"<hr>","创建一个 CSS 规则，<code>font-family</code>属性里设置为<code>Lobster</code>字体，并把这个字体应用到所有的<code>h2</code>元素。"],challengeType:0,fields:{slug:"/responsive-web-design/basic-css/import-a-google-font",blockName:"Basic CSS",tests:[{text:"引入<code>Lobster</code>字体。",testString:'assert(new RegExp("gdgdocs|googleapis", "gi").test(code), \'引入<code>Lobster</code>字体。\');'},{text:"<code>h2</code>元素必须使用<code>Lobster</code>字体。",testString:'assert($("h2").css("font-family").match(/lobster/i), \'<code>h2</code>元素必须使用<code>Lobster</code>字体。\');'},{text:"使用<code>h2</code>选择器去改变字体样式。",testString:"assert(/\\s*h2\\s*\\{\\s*font-family\\:\\s*(\\'|\")?Lobster(\\'|\")?\\s*;\\s*\\}/gi.test(code), '使用<code>h2</code>选择器去改变字体样式。');"},{text:"<code>p</code>元素应该保持使用<code>monospace</code>字体。",testString:'assert($("p").css("font-family").match(/monospace/i), \'<code>p</code>元素应该保持使用<code>monospace</code>字体。\');'}]},required:[],files:{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:'<style>\n  .red-text {\n    color: red;\n  }\n\n  p {\n    font-size: 16px;\n    font-family: monospace;\n  }\n</style>\n\n<h2 class="red-text">CatPhotoApp</h2>\n<main>\n  \n  <a href="#"><img src="http://cdn.freecodecamp.cn/relaxing-cat.jpg" alt="一只仰卧着的萌猫"></a>\n  \n  <p>猫咪最喜欢的三件东西：</p>\n  <ul>\n    <li>猫薄荷</li>\n    <li>激光笔</li>\n    <li>千层饼</li>\n  </ul>\n  <p>猫咪最讨厌的三件东西：</p>\n  <ol>\n    <li>跳蚤</li>\n    <li>打雷</li>\n    <li>同类</li>\n  </ol>\n  \n  <form action="/submit-cat-photo">\n    <label><input type="radio" name="indoor-outdoor">室内</label>\n    <label><input type="radio" name="indoor-outdoor">室外</label><br>\n    <label><input type="checkbox" name="personality">忠诚</label>\n    <label><input type="checkbox" name="personality">懒惰</label>\n    <label><input type="checkbox" name="personality">积极</label><br>\n    <input type="text" placeholder="猫咪图片地址" required>\n    <button type="submit">提交</button>\n  </form>\n</main>',head:"",tail:""},indexjs:null,indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/responsive-web-design/basic-css/specify-how-fonts-should-degrade",id:"bad87fee1348bd9aedf08807"},slug:"/responsive-web-design/basic-css/import-a-google-font"}}}});
//# sourceMappingURL=path---responsive-web-design-basic-css-import-a-google-font-6339e4678dcb1d77b4d0.js.map