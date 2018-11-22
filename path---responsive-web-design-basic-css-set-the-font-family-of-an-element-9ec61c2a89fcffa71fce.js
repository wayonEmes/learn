webpackJsonp([0x5e715e3dcdcb],{4112:function(e,n){e.exports={data:{challengeNode:{title:"Set the Font Family of an Element",description:["通过<code>font-family</code>属性，可以设置元素里面的字体样式。","如果你想设置<code>h2</code>元素的字体为<code>sans-serif</code>，你可以用以下的 CSS 规则：","<blockquote>h2 {<br>&nbsp;&nbsp;font-family: sans-serif;<br>}</blockquote>","<hr>","确保<code>p</code>元素使用<code>monospace</code>字体。"],challengeType:0,fields:{slug:"/responsive-web-design/basic-css/set-the-font-family-of-an-element",blockName:"Basic CSS",tests:[{text:"<code>p</code>元素应该使用<code>monospace</code>字体。",testString:'assert($("p").not(".red-text").css("font-family").match(/monospace/i), \'<code>p</code>元素应该使用<code>monospace</code>字体。\');'}]},required:[],files:{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:'<style>\n  .red-text {\n    color: red;\n  }\n\n  p {\n    font-size: 16px;\n  }\n</style>\n\n<h2 class="red-text">CatPhotoApp</h2>\n<main>\n  \n  <a href="#"><img src="http://cdn.freecodecamp.cn/relaxing-cat.jpg" alt="一只仰卧着的萌猫"></a>\n  \n  <p>猫咪最喜欢的三件东西：</p>\n  <ul>\n    <li>猫薄荷</li>\n    <li>激光笔</li>\n    <li>千层饼</li>\n  </ul>\n  <p>猫咪最讨厌的三件东西：</p>\n  <ol>\n    <li>跳蚤</li>\n    <li>打雷</li>\n    <li>同类</li>\n  </ol>\n  \n  <form action="/submit-cat-photo">\n    <label><input type="radio" name="indoor-outdoor">室内</label>\n    <label><input type="radio" name="indoor-outdoor">室外</label><br>\n    <label><input type="checkbox" name="personality">忠诚</label>\n    <label><input type="checkbox" name="personality">懒惰</label>\n    <label><input type="checkbox" name="personality">积极</label><br>\n    <input type="text" placeholder="猫咪图片地址" required>\n    <button type="submit">提交</button>\n  </form>\n</main>',head:"",tail:""},indexjs:null,indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/responsive-web-design/basic-css/import-a-google-font",id:"bad87fee1348bd9aede08807"},slug:"/responsive-web-design/basic-css/set-the-font-family-of-an-element"}}}});
//# sourceMappingURL=path---responsive-web-design-basic-css-set-the-font-family-of-an-element-9ec61c2a89fcffa71fce.js.map