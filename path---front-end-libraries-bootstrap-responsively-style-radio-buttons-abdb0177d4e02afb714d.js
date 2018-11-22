webpackJsonp([0x944cee1549ad],{3520:function(e,t){e.exports={data:{challengeNode:{title:"Responsively Style Radio Buttons",description:["你还可以将 Bootstrap 的 <code>col-xs-*</code> class 用在 <code>form</code> 元素上！这样我们就可以在不关心屏幕大小的情况下，将我们的单选按钮均匀的平铺在页面上。",'将你的所有单选按钮放入 <code>&#60;div class="row"&#62;</code> 元素。再用 <code>&#60;div class="col-xs-6"&#62;</code> 元素包裹每一个单选按钮。',"<strong>记住：</strong> 提醒一句，单选按钮是 type 为 <code>radio</code> 的 <code>input</code> 元素。"],challengeType:0,fields:{slug:"/front-end-libraries/bootstrap/responsively-style-radio-buttons",blockName:"Bootstrap",tests:[{text:"把所有的单选按钮放置于具有 <code>row</code> class 的 <code>div</code> 元素中。",testString:'assert($("div.row:has(input[type=\\"radio\\"])").length > 0, \'把所有的单选按钮放置于具有 <code>row</code> class 的 <code>div</code> 元素中。\');'},{text:"每一个单选按钮应该嵌套于 <code>div</code> 元素之中，该 <code>div</code> 元素的 class 属性为 <code>col-xs-6</code>。",testString:'assert($("div.col-xs-6:has(input[type=\\"radio\\"])").length > 1, \'每一个单选按钮应该嵌套于 <code>div</code> 元素之中，该 <code>div</code> 元素的 class 属性为 <code>col-xs-6</code>。\');'},{text:"确保所有 <code>div</code> 元素都有一个闭合标签。",testString:"assert(code.match(/<\\/div>/g) && code.match(/<div/g) && code.match(/<\\/div>/g).length === code.match(/<div/g).length, '确保所有 <code>div</code> 元素都有一个闭合标签。');"}]},required:[{link:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.css",raw:!0,src:null},{link:"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.css",raw:null,src:null}],files:{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:'<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">\n<style>\n  h2 {\n    font-family: Lobster, Monospace;\n  }\n\n  .thick-green-border {\n    border-color: green;\n    border-width: 10px;\n    border-style: solid;\n    border-radius: 50%;\n  }\n</style>\n\n<div class="container-fluid">\n  <div class="row">\n    <div class="col-xs-8">\n      <h2 class="text-primary text-center">CatPhotoApp</h2>\n    </div>\n    <div class="col-xs-4">\n      <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>\n    </div>\n  </div>\n  <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">\n  <div class="row">\n    <div class="col-xs-4">\n      <button class="btn btn-block btn-primary"><i class="fa fa-thumbs-up"></i> Like</button>\n    </div>\n    <div class="col-xs-4">\n      <button class="btn btn-block btn-info"><i class="fa fa-info-circle"></i> Info</button>\n    </div>\n    <div class="col-xs-4">\n      <button class="btn btn-block btn-danger"><i class="fa fa-trash"></i> Delete</button>\n    </div>\n  </div>\n  <p>Things cats <span class="text-danger">love:</span></p>\n  <ul>\n    <li>cat nip</li>\n    <li>laser pointers</li>\n    <li>lasagna</li>\n  </ul>\n  <p>Top 3 things cats hate:</p>\n  <ol>\n    <li>flea treatment</li>\n    <li>thunder</li>\n    <li>other cats</li>\n  </ol>\n  <form action="/submit-cat-photo">\n    <label><input type="radio" name="indoor-outdoor"> Indoor</label>\n    <label><input type="radio" name="indoor-outdoor"> Outdoor</label>\n    <label><input type="checkbox" name="personality"> Loving</label>\n    <label><input type="checkbox" name="personality"> Lazy</label>\n    <label><input type="checkbox" name="personality"> Crazy</label>\n    <input type="text" placeholder="cat photo URL" required>\n    <button type="submit">Submit</button>\n  </form>\n</div>',head:"",tail:""},indexjs:null,indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[{link:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.css",raw:!0,src:null},{link:"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.css",raw:null,src:null}],nextChallengePath:"/front-end-libraries/bootstrap/responsively-style-checkboxes",id:"bad87fee1348bd9aedb08845"},slug:"/front-end-libraries/bootstrap/responsively-style-radio-buttons"}}}});
//# sourceMappingURL=path---front-end-libraries-bootstrap-responsively-style-radio-buttons-abdb0177d4e02afb714d.js.map