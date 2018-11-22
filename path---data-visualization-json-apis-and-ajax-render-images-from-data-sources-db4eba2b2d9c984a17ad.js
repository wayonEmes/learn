webpackJsonp([0xd865dd52b100],{3495:function(e,n){e.exports={data:{challengeNode:{title:"Render Images from Data Sources",description:["前几个挑战中表明，JSON 数组中的每个对象都包含一个<code>imageLink</code>键，其值为猫图像的 URL。","当你遍历这些对象的时候，你可以使用<code>imageLink</code>属性在<code>img</code>元素中显示此图像。","这是执行此操作的代码：",'<code>html += "&lt;img src = \'" + val.imageLink + "\' " + "alt=\'" + val.altText + "\'&gt;";</code>',"<hr>","添加代码以在<code>img</code>标签中使用<code>imageLink</code>和<code>altText</code>属性。"],challengeType:0,fields:{slug:"/data-visualization/json-apis-and-ajax/render-images-from-data-sources",blockName:"JSON APIs and Ajax",tests:[{text:"你应该使用<code>imageLink</code>属性来显示图像。",testString:"assert(code.match(/val\\.imageLink/g), '你应该使用<code>imageLink</code>属性来显示图像。');"}]},required:[{link:"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.css",raw:null,src:null}],files:{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:'<script>\n  document.addEventListener(\'DOMContentLoaded\',function(){\n    document.getElementById(\'getMessage\').onclick=function(){\n      req=new XMLHttpRequest();\n      req.open("GET",\'/json/cats.json\',true);\n      req.send();\n      req.onload=function(){\n        json=JSON.parse(req.responseText);\n        var html = "";\n        json.forEach(function(val) {\n          html += "<div class = \'cat\'>";\n          // 在这行下面添加代码\n          \n          \n          // 在这行上面添加代码\n          html += "</div><br>";\n        });\n        document.getElementsByClassName(\'message\')[0].innerHTML=html;\n      };\n     };\n  });\n</script>\n<style>\n  body {\n    text-align: center;\n    font-family: "Helvetica", sans-serif;\n  }\n  h1 {\n    font-size: 2em;\n    font-weight: bold;\n  }\n  .box {\n    border-radius: 5px;\n    background-color: #eee;\n    padding: 20px 5px;\n  }\n  button {\n    color: white;\n    background-color: #4791d0;\n    border-radius: 5px;\n    border: 1px solid #4791d0;\n    padding: 5px 10px 8px 10px;\n  }\n  button:hover {\n    background-color: #0F5897;\n    border: 1px solid #0F5897;\n  }\n</style>\n<h1>Cat Photo Finder</h1> \n<p class="message box">\n  The message will go here\n</p>\n<p>\n  <button id="getMessage">\n    Get Message\n  </button>\n</p>',head:"",tail:""},indexjs:null,indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[{link:"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.css",raw:null,src:null}],nextChallengePath:"/data-visualization/json-apis-and-ajax/pre-filter-json-to-get-the-data-you-need",id:"587d7fae367417b2b2512be6"},slug:"/data-visualization/json-apis-and-ajax/render-images-from-data-sources"}}}});
//# sourceMappingURL=path---data-visualization-json-apis-and-ajax-render-images-from-data-sources-db4eba2b2d9c984a17ad.js.map