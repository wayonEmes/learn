webpackJsonp([74374624090334],{3302:function(e,o){e.exports={data:{challengeNode:{title:"Problem 64: Odd period square roots",description:["All square roots are periodic when written as continued fractions and can be written in the form:","","√N = a0 +","1","","a1 +","1","","","a2 +","1","","","","a3 + ...","","For example, let us consider √23:","","√23 = 4 + √23 — 4 = 4 + ","1"," = 4 + ","1","","1√23—4","","1 + ","√23 – 37","","If we continue we would get the following expansion:","","√23 = 4 +","1","","1 +","1","","","3 +","1","","","","1 +","1","","","","","8 + ...","","The process can be summarised as follows:","","a0 = 4,","","1√23—4"," = ","√23+47"," = 1 + ","√23—37","a1 = 1,","","7√23—3"," = ","7(√23+3)14"," = 3 + ","√23—32","a2 = 3,","","2√23—3"," = ","2(√23+3)14"," = 1 + ","√23—47","a3 = 1,","","7√23—4"," = ","7(√23+4)7"," = 8 + ","√23—4","a4 = 8,","","1√23—4"," = ","√23+47"," = 1 + ","√23—37","a5 = 1,","","7√23—3"," = ","7(√23+3)14"," = 3 + ","√23—32","a6 = 3,","","2√23—3"," = ","2(√23+3)14"," = 1 + ","√23—47","a7 = 1,","","7√23—4"," = ","7(√23+4)7"," = 8 + ","√23—4","","It can be seen that the sequence is repeating. For conciseness, we use the notation √23 = [4;(1,3,1,8)], to indicate that the block (1,3,1,8) repeats indefinitely.","","The first ten continued fraction representations of (irrational) square roots are:","√2=[1;(2)], period=1","√3=[1;(1,2)], period=2","√5=[2;(4)], period=1","√6=[2;(2,4)], period=2","√7=[2;(1,1,1,4)], period=4","√8=[2;(1,4)], period=2","√10=[3;(6)], period=1","√11=[3;(3,6)], period=2","√12= [3;(2,6)], period=2","√13=[3;(1,1,1,1,6)], period=5","Exactly four continued fractions, for N ≤ 13, have an odd period.","How many continued fractions for N ≤ 10000 have an odd period?"],challengeType:5,fields:{slug:"/coding-interview-prep/project-euler/problem-64-odd-period-square-roots",blockName:"Project Euler",tests:[{text:"<code>euler64()</code> should return 1322.",testString:"assert.strictEqual(euler64(), 1322, '<code>euler64()</code> should return 1322.');"}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:"function euler64() {\n  // Good luck!\n  return true;\n}\n\neuler64();",head:"",tail:""},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/coding-interview-prep/project-euler/problem-65-convergents-of-e",id:"5900f3ac1000cf542c50febf"},slug:"/coding-interview-prep/project-euler/problem-64-odd-period-square-roots"}}}});
//# sourceMappingURL=path---coding-interview-prep-project-euler-problem-64-odd-period-square-roots-61b5c50542608e44f538.js.map