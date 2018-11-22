webpackJsonp([0xbb574c907036],{3638:function(e,o){e.exports={data:{challengeNode:{title:"Store Data with Sass Variables",description:["Sass 不同于 CSS 的一个特点是它允许使用变量。我们可以在 Sass 中声明变量，并为它赋值，就像我们在 JavaScript 中一样。","在 JavaScript 中，变量是使用<code>let</code>和<code>const</code>关键字定义的。在 Sass 中，变量以<code>$</code>开头的，后跟变量名。","这里有几个例子：","<blockquote>$main-fonts: Arial, sans-serif;<br>$headings-color: green;<br><br>//To use variables:<br>h1 {<br>&nbsp;&nbsp;font-family: $main-fonts;<br>&nbsp;&nbsp;color: $headings-color;<br>}</blockquote>","当需要把多个元素设置成相同颜色时，变量就会很有用。一旦我们需要更改颜色，只需要改变这个变量的值就好。","<hr>","创建一个变量<code>$text-color</code>并将其设置为红色。然后更改<code>.blog-post</code>的<code>color</code>属性的值，<code>h2</code>到<code>$text-color</code>变量。"],challengeType:0,fields:{slug:"/front-end-libraries/sass/store-data-with-sass-variables",blockName:"Sass",tests:[{text:"你应该为<code>$text-color</code>声明一个值为红色的 Sass 变量。",testString:"assert(code.match(/\\$text-color:\\s*?red;/g), '你应该为<code>$text-color</code>声明一个 Sass 变量，其值为 red。');"},{text:"你应使用<code>$text-color</code>变量来更改<code>.blog-post</code>和<code>h2</code>的<code>颜色</code>。",testString:"assert(code.match(/color:\\s*?\\$text-color;/g), '你应使用<code>$text-color</code>变量来更改<code>.blog-post</code>和<code>h2</code>的<code>颜色</code>。');"},{text:"<code>.blog-post<code>元素应为红色。",testString:"assert($('.blog-post').css('color') == 'rgb(255, 0, 0)', '你应使用<code>$text-color</code>变量来更改<code>.blog-post</code>和<code>h2</code>的<code>颜色</code>。');"},{text:"<code>h2</code>元素应为红色。",testString:"assert($('h2').css('color') == 'rgb(255, 0, 0)', '<code>h2</code>元素应为红色。');"}]},required:[{link:null,raw:!0,src:"https://cdnjs.cloudflare.com/ajax/libs/sass.js/0.10.9/sass.sync.min.js"}],files:{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:'<style type=\'text/sass\'>\n  \n  \n  .header{\n    text-align: center;\n  }\n  .blog-post, h2 {\n    color: red;\n  }\n</style>\n\n<h1 class="header">Learn Sass</h1>\n<div class="blog-post">\n  <h2>Some random title</h2>\n  <p>This is a paragraph with some random text in it</p>\n</div>\n<div class="blog-post">\n  <h2>Header #2</h2>\n  <p>Here is some more random text.</p>\n</div>\n<div class="blog-post">\n  <h2>Here is another header</h2>\n  <p>Even more random text within a paragraph</p>\n</div>',head:"",tail:""},indexjs:null,indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[{link:null,raw:!0,src:"https://cdnjs.cloudflare.com/ajax/libs/sass.js/0.10.9/sass.sync.min.js"}],nextChallengePath:"/front-end-libraries/sass/nest-css-with-sass",id:"587d7dbd367417b2b2512bb4"},slug:"/front-end-libraries/sass/store-data-with-sass-variables"}}}});
//# sourceMappingURL=path---front-end-libraries-sass-store-data-with-sass-variables-cb48b1f13ab666ec9ec2.js.map