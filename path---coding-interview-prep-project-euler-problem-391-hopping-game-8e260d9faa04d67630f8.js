webpackJsonp([67321971087449],{3185:function(e,t){e.exports={data:{challengeNode:{title:"Problem 391: Hopping Game",description:["Let sk be the number of 1’s when writing the numbers from 0 to k in binary.","For example, writing 0 to 5 in binary, we have 0, 1, 10, 11, 100, 101. There are seven 1’s, so s5 = 7.","The sequence S = {sk : k ≥ 0} starts {0, 1, 2, 4, 5, 7, 9, 12, ...}.","","","A game is played by two players. Before the game starts, a number n is chosen. A counter c starts at 0. At each turn, the player chooses a number from 1 to n (inclusive) and increases c by that number. The resulting value of c must be a member of S. If there are no more valid moves, the player loses.","","","","For example:","Let n = 5. c starts at 0.","Player 1 chooses 4, so c becomes 0 + 4 = 4.","Player 2 chooses 5, so c becomes 4 + 5 = 9.","Player 1 chooses 3, so c becomes 9 + 3 = 12.","etc.","Note that c must always belong to S, and each player can increase c by at most n.","","","","Let M(n) be the highest number the first player can choose at her first turn to force a win, and M(n) = 0 if there is no such move. For example, M(2) = 2, M(7) = 1 and M(20) = 4.","","","","Given Σ(M(n))3 = 8150 for 1 ≤ n ≤ 20.","","","","Find Σ(M(n))3 for 1 ≤ n ≤ 1000."],challengeType:5,fields:{slug:"/coding-interview-prep/project-euler/problem-391-hopping-game",blockName:"Project Euler",tests:[{text:"<code>euler391()</code> should return 61029882288.",testString:"assert.strictEqual(euler391(), 61029882288, '<code>euler391()</code> should return 61029882288.');"}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:"function euler391() {\n  // Good luck!\n  return true;\n}\n\neuler391();",head:"",tail:""},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/coding-interview-prep/project-euler/problem-392-enmeshed-unit-circle",id:"5900f4f31000cf542c510006"},slug:"/coding-interview-prep/project-euler/problem-391-hopping-game"}}}});
//# sourceMappingURL=path---coding-interview-prep-project-euler-problem-391-hopping-game-8e260d9faa04d67630f8.js.map