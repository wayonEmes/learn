webpackJsonp([0x7444a2cfd468],{3506:function(t,e){t.exports={data:{challengeNode:{title:"Create a Bootstrap Button",description:["Bootstrap 的 <code>button</code> 元素有着独有的、比默认 HTML 按钮更好的样式风格。",'在较大的小猫图片下方创建新的 <code>button</code> 元素。 为它添加 <code>btn</code> 与 <code>btn-default</code> 两个 class 和 "Like" 文本。'],challengeType:0,fields:{slug:"/front-end-libraries/bootstrap/create-a-bootstrap-button",blockName:"Bootstrap",tests:[{text:'创建新的 <code>button</code> 元素，设置文本为 "Like"。',testString:'assert(new RegExp("like","gi").test($("button").text()) && ($("img.img-responsive + button.btn").length > 0), \'创建新的 <code>button</code> 元素，设置文本为 "Like"。\');'},{text:"新的按钮元素应该有两个 class : <code>btn</code> 和 <code>btn-default</code>。",testString:'assert($("button").hasClass("btn") && $("button").hasClass("btn-default"), \'新的按钮元素应该有两个 class : <code>btn</code> 和 <code>btn-default</code>。\');'},{text:"保证所有 <code>button</code> 元素都有一个闭合标签。",testString:"assert(code.match(/<\\/button>/g) && code.match(/<button/g) && code.match(/<\\/button>/g).length === code.match(/<button/g).length, '保证所有 <code>button</code> 元素都有一个闭合标签。');"}]},required:[{link:"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.css",raw:null,src:null}],files:{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:'<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">\n<style>\n  .red-text {\n    color: red;\n  }\n\n  h2 {\n    font-family: Lobster, Monospace;\n  }\n\n  p {\n    font-size: 16px;\n    font-family: Monospace;\n  }\n\n  .thick-green-border {\n    border-color: green;\n    border-width: 10px;\n    border-style: solid;\n    border-radius: 50%;\n  }\n\n  .smaller-image {\n    width: 100px;\n  }\n</style>\n\n<div class="container-fluid">\n  <h2 class="red-text text-center">CatPhotoApp</h2>\n\n  <p>Click here for <a href="#">cat photos</a>.</p>\n\n  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>\n\n  <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">\n\n  <p>Things cats love:</p>\n  <ul>\n    <li>cat nip</li>\n    <li>laser pointers</li>\n    <li>lasagna</li>\n  </ul>\n  <p>Top 3 things cats hate:</p>\n  <ol>\n    <li>flea treatment</li>\n    <li>thunder</li>\n    <li>other cats</li>\n  </ol>\n  <form action="/submit-cat-photo">\n    <label><input type="radio" name="indoor-outdoor"> Indoor</label>\n    <label><input type="radio" name="indoor-outdoor"> Outdoor</label>\n    <label><input type="checkbox" name="personality"> Loving</label>\n    <label><input type="checkbox" name="personality"> Lazy</label>\n    <label><input type="checkbox" name="personality"> Crazy</label>\n    <input type="text" placeholder="cat photo URL" required>\n    <button type="submit">Submit</button>\n  </form>\n</div>',head:"",tail:""},indexjs:null,indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[{link:"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.css",raw:null,src:null}],nextChallengePath:"/front-end-libraries/bootstrap/create-a-block-element-bootstrap-button",id:"bad87fee1348cd8acdf08812"},slug:"/front-end-libraries/bootstrap/create-a-bootstrap-button"}}}});
//# sourceMappingURL=path---front-end-libraries-bootstrap-create-a-bootstrap-button-98394a1e2337309756ec.js.map