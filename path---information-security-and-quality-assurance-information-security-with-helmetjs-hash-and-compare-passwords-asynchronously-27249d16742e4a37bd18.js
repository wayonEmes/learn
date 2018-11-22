webpackJsonp([0xd0c7f24d5780],{3679:function(a,e){a.exports={data:{challengeNode:{title:"Hash and Compare Passwords Asynchronously",guideUrl:null,description:["温馨提醒，本项目在 <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-bcrypt/'>这个 Glitch 项目</a> 的基础上进行开发。你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-bcrypt/'> GitHub </a>上克隆。","哈希会占用很大计算机资源并且会耗费比较多时间，比较推荐的做法是用异步的方法用调用哈希算法这样就不会阻挡其他的访问了。异步调用哈希方法非常简单，只需要 <code>bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => { /*Store hash in your db*/ });</code>","<hr>把这段哈希方法添加到你的服务器(我们已经定义好这个方法的变量给你直接使用了) 然后输入到控制台! 完成之后你通常需要把哈希过的值保存到数据库。","当你需要对比用户输入的值是否和之前哈希过的值一样的时候，你只需要调用对比函数 <code>bcrypt.compare(myPlaintextPassword, hash, (err, res) => { /*res == true or false*/ });</code>. 把这个添加到你已有的哈希方法(你需要等哈希完成之后才能调用对比方法) 在你输入哈希过的值之后在对比方法里面输入 'res' 到控制台. 你会看到一个哈希值和 ``true`` 被打印出来。如果你在对比方法里面把 'myPlaintextPassword' 改变成 'someOtherPlaintextPassword' 那么应该会输出 ``false``","<pre>bcrypt.hash('passw0rd!', 13, (err, hash) => {\n  console.log(hash); //$2a$12$Y.PHPE15wR25qrrtgGkiYe2sXo98cjuMCG1YwSI5rJW1DSJp0gEYS\n  bcrypt.compare('passw0rd!', hash, (err, res) => {\n      console.log(res); //true\n  });\n});</pre>","提交页面当你觉得已经完成的时候。"],challengeType:2,fields:{blockName:"Information Security with HelmetJS",slug:"/information-security-and-quality-assurance/information-security-with-helmetjs/hash-and-compare-passwords-asynchronously",tests:[{text:"异步生成哈希并正确地对比",testString:"getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /START_ASYNC[^]*bcrypt.hash.*myPlaintextPassword( |),( |)saltRounds( |),( |).*err( |),( |)hash[^]*END_ASYNC/gi, 'You should call bcrypt.hash on myPlaintextPassword and saltRounds and handle err and hash as a result in the callback'); assert.match(data, /START_ASYNC[^]*bcrypt.hash[^]*bcrypt.compare.*myPlaintextPassword( |),( |)hash( |),( |).*err( |),( |)res[^]*}[^]*}[^]*END_ASYNC/gi, 'Nested within the hash function should be the compare function comparing myPlaintextPassword to hash'); }, xhr => { throw new Error(xhr.statusText); })"}]}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/information-security-and-quality-assurance/information-security-with-helmetjs/hash-and-compare-passwords-synchronously",id:"58a25bcff9fc0f352b528e7d"},slug:"/information-security-and-quality-assurance/information-security-with-helmetjs/hash-and-compare-passwords-asynchronously"}}}});
//# sourceMappingURL=path---information-security-and-quality-assurance-information-security-with-helmetjs-hash-and-compare-passwords-asynchronously-27249d16742e4a37bd18.js.map