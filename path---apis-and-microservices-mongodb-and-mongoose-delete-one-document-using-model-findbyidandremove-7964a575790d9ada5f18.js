webpackJsonp([0xb6157d37353a],{2794:function(e,o){e.exports={data:{challengeNode:{title:"Delete One Document Using model.findByIdAndRemove",guideUrl:null,description:["你可以使用 <code>findByIdAndRemove()</code> 或者 <code>findOneAndRemove()</code> 方法， 通过 _id 删除一个人员。 它和上面的更新方法很像，都是先通过 personId 找到对应的 document，再删除，并返回被删除的 document。"],challengeType:2,fields:{blockName:"MongoDB and Mongoose",slug:"/apis-and-microservices/mongodb-and-mongoose/delete-one-document-using-model-findbyidandremove",tests:[{text:"成功删除一个 item(项目)。",testString:"getUserInput => $.post(getUserInput('url') +'/_api/remove-one-person', {name:'Jason Bourne', age: 36, favoriteFoods:['apples']}).then(data => { assert.equal(data.name,'Jason Bourne','item.name is not what expected'); assert.equal(data.age, 36,'item.age is not what expected'); assert.deepEqual(data.favoriteFoods, ['apples'],'item.favoriteFoods is not what expected'); assert.equal(data.__v, 0); assert.equal(data.count, 0,'the db items count is not what expected'); }, xhr => { throw new Error(xhr.responseText); })"}]}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/apis-and-microservices/mongodb-and-mongoose/delete-many-documents-with-model-remove",id:"587d7fb8367417b2b2512c10"},slug:"/apis-and-microservices/mongodb-and-mongoose/delete-one-document-using-model-findbyidandremove"}}}});
//# sourceMappingURL=path---apis-and-microservices-mongodb-and-mongoose-delete-one-document-using-model-findbyidandremove-7964a575790d9ada5f18.js.map