webpackJsonp([85223319041259],{2786:function(e,t){e.exports={data:{challengeNode:{title:"Use the Caret-Character to Use the Latest Minor Version of a Dependency",guideUrl:null,description:["和上一个挑战中我们学到的波浪符号（~）来安装最新的修订版依赖一样，使用插入符号（^）允许 npm 来安装功能更新。它们的不同之处在于：插入符号（^）允许次版本和修订版更新。","此刻，你项目中的 moment 依赖包的版本应该是 ~2.10.2，这意味着 npm 可以安装 2.10.x 版的 moment，如果使用插入符号（^）来替换版本号的前缀，那么 npm 可以安装的版本则是 2.x.x。","例子：",'<code>"some-package-name": "^1.3.8" 定义这个包允许使用的版本为 1.x.x。</code>',"说明：","使用插入符号（^）为依赖项中的 moment 版本添加前缀，允许 npm 更新依赖包到任意向下兼容的新功能版。","请注意，原本的版本号不用更改。"],challengeType:2,fields:{blockName:"Managing Packages with Npm",slug:"/apis-and-microservices/managing-packages-with-npm/use-the-caret-character-to-use-the-latest-minor-version-of-a-dependency",tests:[{text:'"dependencies" 应包含 "moment"。',testString:"getUserInput => $.get(getUserInput('url') + '/_api/package.json').then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, 'moment', '\"dependencies\" 未包含 \"moment\"'); }, xhr => { throw new Error(xhr.responseText); })"},{text:'"moment" 的版本应匹配 "^2.x.x"。',testString:"getUserInput => $.get(getUserInput('url') + '/_api/package.json').then(data => { var packJson = JSON.parse(data); assert.match(packJson.dependencies.moment, /^\\^2\\./, '\"moment\" 的版本号有误，它应该是 ^2.10.2'); }, xhr => { throw new Error(xhr.responseText); })"}]}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/apis-and-microservices/managing-packages-with-npm/remove-a-package-from-your-dependencies",id:"587d7fb5367417b2b2512c03"},slug:"/apis-and-microservices/managing-packages-with-npm/use-the-caret-character-to-use-the-latest-minor-version-of-a-dependency"}}}});
//# sourceMappingURL=path---apis-and-microservices-managing-packages-with-npm-use-the-caret-character-to-use-the-latest-minor-version-of-a-dependency-4539b348f7c42ed14eba.js.map