webpackJsonp([42121824073253],{4094:function(e,n){e.exports={data:{challengeNode:{title:"Add Rounded Corners with border-radius",description:["你的猫咪图片边角很尖锐，我们可以使用<code>border-radius</code>属性来让它变得圆润。","<hr>","<code>border-radius</code>可以用<code>px</code>像素单位来赋值。给你的猫咪图片设置 10px 的<code>border-radius</code>。","注意：这个挑战有多个解决方法。例如，添加<code>border-radius</code>属性到<code>.thick-green-border</code>class 或<code>.smaller-image</code>class 里都是可行的。"],challengeType:0,fields:{slug:"/responsive-web-design/basic-css/add-rounded-corners-with-border-radius",blockName:"Basic CSS",tests:[{text:'你的图片元素应具有 "thick-green-border" class 属性。',testString:'assert($("img").hasClass("thick-green-border"), \'你的图片元素应具有 "thick-green-border" class 属性。\');'},{text:"你的图片应含有<code>10px</code>的边框圆角。",testString:'assert(parseInt($("img").css("border-top-left-radius")) > 8, \'你的图片应含有<code>10px</code>的边框圆角。\');'}]},required:[],files:{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:'<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">\n<style>\n  .red-text {\n    color: red;\n  }\n\n  h2 {\n    font-family: Lobster, monospace;\n  }\n\n  p {\n    font-size: 16px;\n    font-family: monospace;\n  }\n\n  .thick-green-border {\n    border-color: green;\n    border-width: 10px;\n    border-style: solid;\n  }\n\n  .smaller-image {\n    width: 100px;\n  }\n</style>\n\n<h2 class="red-text">CatPhotoApp</h2>\n<main>\n  \n  <a href="#"><img class="smaller-image thick-green-border" src="http://cdn.freecodecamp.cn/relaxing-cat.jpg" alt="一只仰卧着的萌猫"></a>\n  \n  <p>猫咪最喜欢的三件东西：</p>\n  <ul>\n    <li>猫薄荷</li>\n    <li>激光笔</li>\n    <li>千层饼</li>\n  </ul>\n  <p>猫咪最讨厌的三件东西：</p>\n  <ol>\n    <li>跳蚤</li>\n    <li>打雷</li>\n    <li>同类</li>\n  </ol>\n  \n  <form action="/submit-cat-photo">\n    <label><input type="radio" name="indoor-outdoor">室内</label>\n    <label><input type="radio" name="indoor-outdoor">室外</label><br>\n    <label><input type="checkbox" name="personality">忠诚</label>\n    <label><input type="checkbox" name="personality">懒惰</label>\n    <label><input type="checkbox" name="personality">积极</label><br>\n    <input type="text" placeholder="猫咪图片地址" required>\n    <button type="submit">提交</button>\n  </form>\n</main>',head:"",tail:""},indexjs:null,indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/responsive-web-design/basic-css/make-circular-images-with-a-border-radius",id:"bad87fee1348bd9aedf08814"},slug:"/responsive-web-design/basic-css/add-rounded-corners-with-border-radius"}}}});
//# sourceMappingURL=path---responsive-web-design-basic-css-add-rounded-corners-with-border-radius-30158215a80cace253e0.js.map