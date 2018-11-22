webpackJsonp([0x9d2b3dfa4321],{2950:function(e,t){e.exports={data:{challengeNode:{title:"Problem 18: Maximum path sum I",description:["从下面展示的三角形的顶端出发，不断移动到在下一行与其相邻的元素，能够得到的最大路径和是 23。","<span style='display: block; text-align: center;'><b style='color: red;'>3</b><br><b style='color: red;'>7</b> 4<br>2 <b style='color: red;'>4</b> 6<br>8 5 <b style='color: red;'>9</b> 3</span>","如上图，最大路径和为 3 + 7 + 4 + 9 = 23。","求从下面展示的三角形顶端出发到达底部，所能够得到的最大路径和：","<span style='display: block; text-align: center;'>75<br>95 64<br>17 47 82<br>18 35 87 10<br>20 04 82 47 65<br>19 01 23 75 03 34<br>88 02 77 73 07 63 67<br>99 65 04 28 06 16 70 92<br>41 41 26 56 83 40 80 70 33<br>41 48 72 33 47 32 37 16 94 29<br>53 71 44 65 25 43 91 52 97 51 14<br>70 11 33 28 77 73 17 78 39 68 17 57<br>91 71 52 38 17 14 91 43 58 50 27 29 48<br>63 66 04 68 89 53 67 30 73 16 69 87 40 31<br>04 62 98 27 23 09 70 98 73 93 38 53 60 04 23</span>","<b>注意:</b> 在这个问题中，由于只有 16384 条路径，通过尝试所有的路径来解决问题是可行的。但是，对于第 67 题，虽然是一道相同类型的题目，但是三角形将拥有一百行，此时暴力破解将不能解决，而需要一个更加聪明的办法！;o)"],challengeType:5,fields:{slug:"/coding-interview-prep/project-euler/problem-18-maximum-path-sum-i",blockName:"Project Euler",tests:[{text:"<code>maximumPathSumI(testTriangle)</code>应该返回 23。",testString:"assert.strictEqual(maximumPathSumI(testTriangle), 23, '<code>maximumPathSumI(testTriangle)</code>应该返回 23。');"},{text:"<code>maximumPathSumI(numTriangle)</code>应该返回 1074。",testString:"assert.strictEqual(maximumPathSumI(numTriangle), 1074, '<code>maximumPathSumI(numTriangle)</code>应该返回 1074。');"}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:"function maximumPathSumI(triangle) {\n  // 祝你好运！\n  return true;\n}\n\nconst testTriangle = [[3, 0, 0, 0],\n                      [7, 4, 0, 0],\n                      [2, 4, 6, 0],\n                      [8, 5, 9, 3]];\n\nmaximumPathSumI(testTriangle);",head:"const numTriangle = [[75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [95, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [17, 47, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [18, 35, 87, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [20, 4, 82, 47, 65, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [19, 1, 23, 75, 3, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0], [88, 2, 77, 73, 7, 63, 67, 0, 0, 0, 0, 0, 0, 0, 0], [99, 65, 4, 28, 6, 16, 70, 92, 0, 0, 0, 0, 0, 0, 0], [41, 41, 26, 56, 83, 40, 80, 70, 33, 0, 0, 0, 0, 0, 0], [41, 48, 72, 33, 47, 32, 37, 16, 94, 29, 0, 0, 0, 0, 0], [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14, 0, 0, 0, 0], [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57, 0, 0, 0], [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48, 0, 0], [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31, 0], [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]];",tail:""},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/coding-interview-prep/project-euler/problem-19-counting-sundays",id:"5900f37e1000cf542c50fe91"},slug:"/coding-interview-prep/project-euler/problem-18-maximum-path-sum-i"}}}});
//# sourceMappingURL=path---coding-interview-prep-project-euler-problem-18-maximum-path-sum-i-e71f3eeb916b3c837da3.js.map