webpackJsonp([34487999675024],{2803:function(e,t){e.exports={data:{challengeNode:{title:"Find the Symmetric Difference",description:["知识提要：<a href='https://baike.baidu.com/item/%E5%AF%B9%E7%A7%B0%E5%B7%AE'target='_blank'>对称差 (Symmetric Difference)</a>，数学上，两个<a href='https://baike.baidu.com/item/%E9%9B%86%E5%90%88/2908117'target='_blank'>集合</a>的对称差分是只属于其中一个集合，而不属于另一个集合的元素组成的集合，例如：集合<code>let A = [ 1, 2, 3]</code>和<code>let B = [ 2, 3, 4]</code>的对称差分为<code>A &xutri; B = C = [ 1, 4]</code>。 集合论中的这个运算相当于布尔逻辑中的异或运算。","创建一个函数 sym，输入两个或两个以上的数组作为参数，然后返回值为<em>对称差分</em>的数组","思路：设定两个数组 (例如：<code>let A = [1, 2, 3]</code>，<code>let B = [2, 3, 4]</code>)作为参数传入，返回对称差分数组（<code>A &xutri; B = C = [1, 4]</code>），且数组中没有重复项。","如果你遇到了困难，请点击<a href='https://forum.freecodecamp.one/t/topic/157'target='_blank'>帮助</a>。你可以找人“结对编程”，但不要因此放弃思考。"],challengeType:5,fields:{slug:"/coding-interview-prep/algorithms/find-the-symmetric-difference",blockName:"Algorithms",tests:[{text:"<code>sym([1, 2, 3], [5, 2, 1, 4])</code>应该返回< code>[3, 4, 5]</code>。",testString:"assert.sameMembers(sym([1, 2, 3], [5, 2, 1, 4]), [3, 4, 5],'<code>sym([1, 2, 3], [5, 2, 1, 4])</code>应该返回<code>[3, 4, 5]</code>。');"},{text:"<code>sym([1, 2, 3], [5, 2, 1, 4])</code>的返回值应该只包含三个元素。",testString:"assert.equal(sym([1, 2, 3], [5, 2, 1, 4]).length, 3,'<code>sym([1, 2, 3], [5, 2, 1, 4])</code>的返回值应该只包含三个元素。');"},{text:"<code>sym([1, 2, 3, 3], [5, 2, 1, 4])</code>应该返回<code>[3, 4, 5]</code>。",testString:"assert.sameMembers(sym([1, 2, 3, 3], [5, 2, 1, 4]), [3, 4, 5],'<code>sym([1, 2, 3, 3], [5, 2, 1, 4])</code>应该返回<code>[3, 4, 5]</code>。');"},{text:"<code>sym([1, 2, 3, 3], [5, 2, 1, 4])</code>返回的数组应该只包含三个元素",testString:"assert.equal(sym([1, 2, 3, 3], [5, 2, 1, 4]).length, 3,'<code>sym([1, 2, 3, 3], [5, 2, 1, 4])</code>返回的数组应该只包含三个元素。');"},{text:"<code>sym([1, 2, 3], [5, 2, 1, 4, 5])</code>应该返回<code>[3, 4, 5]</code>。",testString:"assert.sameMembers(sym([1, 2, 3], [5, 2, 1, 4, 5]), [3, 4, 5],'<code>sym([1, 2, 3], [5, 2, 1, 4, 5])</code>应该返回<code>[3, 4, 5]</code>。');"},{text:"<code>sym([1, 2, 3], [5, 2, 1, 4, 5])</code>返回的数组应该只包含三个元素。",testString:"assert.equal(sym([1, 2, 3], [5, 2, 1, 4, 5]).length, 3,'<code>sym([1, 2, 3], [5, 2, 1, 4, 5])</code>返回的数组应该只包含三个元素。');"},{text:"<code>sym([1, 2, 5], [2, 3, 5], [3, 4, 5])</code>应该返回<code>[1, 4, 5]</code>。",testString:"assert.sameMembers(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]), [1, 4, 5],'<code>sym([1, 2, 5], [2, 3, 5], [3, 4, 5])</code>应该返回<code>[1, 4, 5]</code>。');"},{text:"<code>sym([1, 2, 5], [2, 3, 5], [3, 4, 5])</code>返回的数组应该只包含三个元素。",testString:"assert.equal(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]).length, 3,'<code>sym([1, 2, 5], [2, 3, 5], [3, 4, 5])</code>返回的数组应该只包含三个元素。');"},{text:"<code>sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])</code>应该返回<code>[1, 4, 5]</code>。",testString:"assert.sameMembers(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]), [1, 4, 5],'<code>sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])</code>应该返回<code>[1, 4, 5]</code>。');"},{text:"<code>sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])</code>返回的数组应该只包含三个元素。",testString:"assert.equal(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]).length, 3,'<code>sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])</code>返回的数组应该只包含三个元素。');"},{text:"<code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])</code>应该返回<code>[2, 3, 4, 6, 7]</code>。",testString:"assert.sameMembers(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]), [2, 3, 4, 6, 7],'<code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])</code> 应该返回 <code>[2, 3, 4, 6, 7]</code>。');"},{text:"<code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])</code>返回的数组应该只包含五个元素。",testString:"assert.equal(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]).length, 5,'<code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])</code>返回的数组应该只包含五个元素。');"},{text:"<code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])</code>应该返回<code>[1, 2, 4, 5, 6, 7, 8, 9]</code>。",testString:"assert.sameMembers(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]), [1, 2, 4, 5, 6, 7, 8, 9],'<code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])</code>应该返回<code>[1, 2, 4, 5, 6, 7, 8, 9]</code>。');"},{text:"<code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])</code>返回的数组应该只包含八个元素。",testString:"assert.equal(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]).length, 8,'<code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])</code>返回的数组应该只包含八个元素。');"}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:"function sym(args) {\nreturn args;\n}\n\nsym([1, 2, 3], [5, 2, 1, 4]);",head:"",tail:""},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/coding-interview-prep/algorithms/inventory-update",id:"a3f503de51cf954ede28891d"},slug:"/coding-interview-prep/algorithms/find-the-symmetric-difference"}}}});
//# sourceMappingURL=path---coding-interview-prep-algorithms-find-the-symmetric-difference-b4f07e9376fd939badda.js.map