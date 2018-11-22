webpackJsonp([55646747671607],{3501:function(t,e){t.exports={data:{challengeNode:{title:"Add id Attributes to Bootstrap Elements",description:["回忆一下，除了可以给元素添加 class 属性，我们还可以给元素设置 <code>id</code> 属性。","每个指定元素的 id 都是唯一的，并且在每个页面中都只能使用一次。","让我们为每个 class 为 <code>well</code> 的 <code>div</code> 元素添加一个唯一的 id。","记住，你可以这样给一个元素设置 ID。",'<code>&#60;div class="well" id="center-well"&#62;</code>',"把左边 well 的 ID 设置为 <code>left-well</code>。右边的 well 的 ID 设置为 <code>right-well</code>。"],challengeType:0,fields:{slug:"/front-end-libraries/bootstrap/add-id-attributes-to-bootstrap-elements",blockName:"Bootstrap",tests:[{text:"把左边的 <code>well</code> 的 ID 设置为 <code>left-well</code>。",testString:'assert($(".col-xs-6").children("#left-well") && $(".col-xs-6").children("#left-well").length > 0, \'把左边的 <code>well</code> 的 ID 设置为 <code>left-well</code>。\');'},{text:"把右边的 <code>well</code> 的 ID 设置为 <code>right-well</code>。",testString:'assert($(".col-xs-6").children("#right-well") && $(".col-xs-6").children("#right-well").length > 0, \'把右边的 <code>well</code> 的 ID 设置为 <code>right-well</code>。\');'}]},required:[{link:"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.css",raw:null,src:null}],files:{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:'<div class="container-fluid">\n  <h3 class="text-primary text-center">jQuery Playground</h3>\n  <div class="row">\n    <div class="col-xs-6">\n      <div class="well">\n        <button class="btn btn-default target"></button>\n        <button class="btn btn-default target"></button>\n        <button class="btn btn-default target"></button>\n      </div>\n    </div>\n    <div class="col-xs-6">\n      <div class="well">\n        <button class="btn btn-default target"></button>\n        <button class="btn btn-default target"></button>\n        <button class="btn btn-default target"></button>\n      </div>\n    </div>\n  </div>\n</div>',head:"",tail:""},indexjs:null,indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[{link:"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.css",raw:null,src:null}],nextChallengePath:"/front-end-libraries/bootstrap/label-bootstrap-wells",id:"bad87fee1348bd9aec908853"},slug:"/front-end-libraries/bootstrap/add-id-attributes-to-bootstrap-elements"}}}});
//# sourceMappingURL=path---front-end-libraries-bootstrap-add-id-attributes-to-bootstrap-elements-696b2e4027d1fdb56d84.js.map