webpackJsonp([0x6468278520da],{4102:function(n,e){n.exports={data:{challengeNode:{title:"Create a custom CSS Variable",description:["创建一个 CSS 变量，你只需要在变量名前添加两个<code>破折号</code>，并为其赋值，例子如下：","<blockquote>--penguin-skin: gray;</blockquote>","这样会创建一个<code>--penguin-skin</code>变量并赋值为<code>gray（灰色）</code>。","现在，其他元素可通过该变量来设置为<code>gray（灰色）</code>。","<hr>","在<code>penguin</code>class 里面，创建一个<code>--penguin-skin</code>变量，且赋值为<code>gray（灰色）</code>。"],challengeType:0,fields:{slug:"/responsive-web-design/basic-css/create-a-custom-css-variable",blockName:"Basic CSS",tests:[{text:"<code>penguin</code> class 里应声明<code>--penguin-skin</code>变量，且赋值为<code>gray</code>。",testString:"assert(code.match(/.penguin\\s*?{[\\s\\S]*--penguin-skin\\s*?:\\s*?gray\\s*?;[\\s\\S]*}/gi), '<code>penguin</code> class 里应声明<code>--penguin-skin</code>变量，且赋值为<code>gray</code>。');"}]},required:[],files:{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:'<style>\n  .penguin {\n    \n    /* add code below */\n    \n    /* add code above */\n    position: relative;\n    margin: auto;\n    display: block;\n    margin-top: 5%;\n    width: 300px;\n    height: 300px;\n  }\n  \n  .penguin-top {\n    top: 10%;\n    left: 25%;\n    background: black;\n    width: 50%;\n    height: 45%;\n    border-radius: 70% 70% 60% 60%;\n  }\n  \n  .penguin-bottom {\n    top: 40%;\n    left: 23.5%;\n    background: black;\n    width: 53%;\n    height: 45%;\n    border-radius: 70% 70% 100% 100%;\n  }\n  \n  .right-hand {\n    top: 0%;\n    left: -5%;\n    background: black;\n    width: 30%;\n    height: 60%;\n    border-radius: 30% 30% 120% 30%;\n    transform: rotate(45deg);\n    z-index: -1;\n  }\n  \n  .left-hand {\n    top: 0%;\n    left: 75%;\n    background: black;\n    width: 30%;\n    height: 60%;\n    border-radius: 30% 30% 30% 120%;\n    transform: rotate(-45deg);\n    z-index: -1;\n  }\n  \n  .right-cheek {\n    top: 15%;\n    left: 35%;\n    background: white;\n    width: 60%;\n    height: 70%;\n    border-radius: 70% 70% 60% 60%;\n  }\n  \n  .left-cheek {\n    top: 15%;\n    left: 5%;\n    background: white;\n    width: 60%;\n    height: 70%;\n    border-radius: 70% 70% 60% 60%;\n  }\n  \n  .belly {\n    top: 60%;\n    left: 2.5%;\n    background: white;\n    width: 95%;\n    height: 100%;\n    border-radius: 120% 120% 100% 100%;\n  }\n  \n  .right-feet {\n    top: 85%;\n    left: 60%;\n    background: orange;\n    width: 15%;\n    height: 30%;\n    border-radius: 50% 50% 50% 50%;\n    transform: rotate(-80deg);\n    z-index: -2222;  \n  }\n  \n  .left-feet {\n    top: 85%;\n    left: 25%;\n    background: orange;\n    width: 15%;\n    height: 30%;\n    border-radius: 50% 50% 50% 50%;\n    transform: rotate(80deg);\n    z-index: -2222;  \n  }\n  \n  .right-eye {\n    top: 45%;\n    left: 60%;\n    background: black;\n    width: 15%;\n    height: 17%;\n    border-radius: 50%; \n  }\n  \n  .left-eye {\n    top: 45%;\n    left: 25%;\n    background: black;\n    width: 15%;\n    height: 17%;\n    border-radius: 50%;  \n  }\n  \n  .sparkle {\n    top: 25%;\n    left: 15%;\n    background: white;\n    width: 35%;\n    height: 35%;\n    border-radius: 50%;  \n  }\n  \n  .blush-right {\n    top: 65%;\n    left: 15%;\n    background: pink;\n    width: 15%;\n    height: 10%;\n    border-radius: 50%;  \n  }\n  \n  .blush-left {\n    top: 65%;\n    left: 70%;\n    background: pink;\n    width: 15%;\n    height: 10%;\n    border-radius: 50%;  \n  }\n  \n  .beak-top {\n    top: 60%;\n    left: 40%;\n    background: orange;\n    width: 20%;\n    height: 10%;\n    border-radius: 50%;  \n  }\n  \n  .beak-bottom {\n    top: 65%;\n    left: 42%;\n    background: orange;\n    width: 16%;\n    height: 10%;\n    border-radius: 50%;  \n  }\n  \n  body {\n    background:#c6faf1;\n  }\n  \n  .penguin * {\n    position: absolute;\n  }\n</style>\n<div class="penguin">\n  <div class="penguin-bottom">\n    <div class="right-hand"></div>\n    <div class="left-hand"></div>\n    <div class="right-feet"></div>\n    <div class="left-feet"></div>\n  </div>\n  <div class="penguin-top">\n    <div class="right-cheek"></div>\n    <div class="left-cheek"></div>\n    <div class="belly"></div>\n    <div class="right-eye">\n      <div class="sparkle"></div>\n    </div>\n    <div class="left-eye">\n      <div class="sparkle"></div>\n    </div>\n    <div class="blush-right"></div>\n    <div class="blush-left"></div>\n    <div class="beak-top"></div>\n    <div class="beak-bottom"></div>\n  </div>\n</div>',head:"",tail:""},indexjs:null,indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/responsive-web-design/basic-css/use-a-custom-css-variable",id:"5a9d726c424fe3d0e10cad11"},slug:"/responsive-web-design/basic-css/create-a-custom-css-variable"}}}});
//# sourceMappingURL=path---responsive-web-design-basic-css-create-a-custom-css-variable-07ea16f0e36f2614dc42.js.map