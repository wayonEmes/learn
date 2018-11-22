webpackJsonp([0xb89288f2b602],{3319:function(e,t){e.exports={data:{challengeNode:{title:"Problem 8: Largest product in a series",description:["在下面这个 1000 位正整数中，连续 4 个数字的最大乘积是 9 × 9 × 8 × 9 = 5832。","","<div style='text-align: center;'>73167176531330624919225119674426574742355349194934</div>","<div style='text-align: center;'>96983520312774506326239578318016984801869478851843</div>","<div style='text-align: center;'>85861560789112949495459501737958331952853208805511</div>","<div style='text-align: center;'>12540698747158523863050715693290963295227443043557</div>","<div style='text-align: center;'>66896648950445244523161731856403098711121722383113</div>","<div style='text-align: center;'>62229893423380308135336276614282806444486645238749</div>","<div style='text-align: center;'>30358907296290491560440772390713810515859307960866</div>","<div style='text-align: center;'>70172427121883998797908792274921901699720888093776</div>","<div style='text-align: center;'>65727333001053367881220235421809751254540594752243</div>","<div style='text-align: center;'>52584907711670556013604839586446706324415722155397</div>","<div style='text-align: center;'>53697817977846174064955149290862569321978468622482</div>","<div style='text-align: center;'>83972241375657056057490261407972968652414535100474</div>","<div style='text-align: center;'>82166370484403199890008895243450658541227588666881</div>","<div style='text-align: center;'>16427171479924442928230863465674813919123162824586</div>","<div style='text-align: center;'>17866458359124566529476545682848912883142607690042</div>","<div style='text-align: center;'>24219022671055626321111109370544217506941658960408</div>","<div style='text-align: center;'>07198403850962455444362981230987879927244284909188</div>","<div style='text-align: center;'>84580156166097919133875499200524063689912560717606</div>","<div style='text-align: center;'>05886116467109405077541002256983155200055935729725</div>","<div style='text-align: center;'>71636269561882670428252483600823257530420752963450</div>","找出这个 1000 位正整数中乘积最大的连续13个数字。它们的乘积是多少？"],challengeType:5,fields:{slug:"/coding-interview-prep/project-euler/problem-8-largest-product-in-a-series",blockName:"Project Euler",tests:[{text:"<code>largestProductinaSeries(4)</code>应该返回 5832。",testString:"assert.strictEqual(largestProductinaSeries(4), 5832, '<code>largestProductinaSeries(4)</code>应该返回 5832。');"},{text:"<code>largestProductinaSeries(13)</code>应该返回 23514624000。",testString:"assert.strictEqual(largestProductinaSeries(13), 23514624000, '<code>largestProductinaSeries(13)</code>应该返回 23514624000。');"}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:"function largestProductinaSeries(number) {\n  // 祝你好运！\n  let thousandDigits = [7,3,1,6,7,1,7,6,5,3,1,3,3,0,6,2,4,9,1,9,2,2,5,1,1,9,6,7,4,4,2,6,5,7,4,7,4,2,3,5,5,3,4,9,1,9,4,9,3,4,9,6,9,8,3,5,2,0,3,1,2,7,7,4,5,0,6,3,2,6,2,3,9,5,7,8,3,1,8,0,1,6,9,8,4,8,0,1,8,6,9,4,7,8,8,5,1,8,4,3,8,5,8,6,1,5,6,0,7,8,9,1,1,2,9,4,9,4,9,5,4,5,9,5,0,1,7,3,7,9,5,8,3,3,1,9,5,2,8,5,3,2,0,8,8,0,5,5,1,1,1,2,5,4,0,6,9,8,7,4,7,1,5,8,5,2,3,8,6,3,0,5,0,7,1,5,6,9,3,2,9,0,9,6,3,2,9,5,2,2,7,4,4,3,0,4,3,5,5,7,6,6,8,9,6,6,4,8,9,5,0,4,4,5,2,4,4,5,2,3,1,6,1,7,3,1,8,5,6,4,0,3,0,9,8,7,1,1,1,2,1,7,2,2,3,8,3,1,1,3,6,2,2,2,9,8,9,3,4,2,3,3,8,0,3,0,8,1,3,5,3,3,6,2,7,6,6,1,4,2,8,2,8,0,6,4,4,4,4,8,6,6,4,5,2,3,8,7,4,9,3,0,3,5,8,9,0,7,2,9,6,2,9,0,4,9,1,5,6,0,4,4,0,7,7,2,3,9,0,7,1,3,8,1,0,5,1,5,8,5,9,3,0,7,9,6,0,8,6,6,7,0,1,7,2,4,2,7,1,2,1,8,8,3,9,9,8,7,9,7,9,0,8,7,9,2,2,7,4,9,2,1,9,0,1,6,9,9,7,2,0,8,8,8,0,9,3,7,7,6,6,5,7,2,7,3,3,3,0,0,1,0,5,3,3,6,7,8,8,1,2,2,0,2,3,5,4,2,1,8,0,9,7,5,1,2,5,4,5,4,0,5,9,4,7,5,2,2,4,3,5,2,5,8,4,9,0,7,7,1,1,6,7,0,5,5,6,0,1,3,6,0,4,8,3,9,5,8,6,4,4,6,7,0,6,3,2,4,4,1,5,7,2,2,1,5,5,3,9,7,5,3,6,9,7,8,1,7,9,7,7,8,4,6,1,7,4,0,6,4,9,5,5,1,4,9,2,9,0,8,6,2,5,6,9,3,2,1,9,7,8,4,6,8,6,2,2,4,8,2,8,3,9,7,2,2,4,1,3,7,5,6,5,7,0,5,6,0,5,7,4,9,0,2,6,1,4,0,7,9,7,2,9,6,8,6,5,2,4,1,4,5,3,5,1,0,0,4,7,4,8,2,1,6,6,3,7,0,4,8,4,4,0,3,1,9,9,8,9,0,0,0,8,8,9,5,2,4,3,4,5,0,6,5,8,5,4,1,2,2,7,5,8,8,6,6,6,8,8,1,1,6,4,2,7,1,7,1,4,7,9,9,2,4,4,4,2,9,2,8,2,3,0,8,6,3,4,6,5,6,7,4,8,1,3,9,1,9,1,2,3,1,6,2,8,2,4,5,8,6,1,7,8,6,6,4,5,8,3,5,9,1,2,4,5,6,6,5,2,9,4,7,6,5,4,5,6,8,2,8,4,8,9,1,2,8,8,3,1,4,2,6,0,7,6,9,0,0,4,2,2,4,2,1,9,0,2,2,6,7,1,0,5,5,6,2,6,3,2,1,1,1,1,1,0,9,3,7,0,5,4,4,2,1,7,5,0,6,9,4,1,6,5,8,9,6,0,4,0,8,0,7,1,9,8,4,0,3,8,5,0,9,6,2,4,5,5,4,4,4,3,6,2,9,8,1,2,3,0,9,8,7,8,7,9,9,2,7,2,4,4,2,8,4,9,0,9,1,8,8,8,4,5,8,0,1,5,6,1,6,6,0,9,7,9,1,9,1,3,3,8,7,5,4,9,9,2,0,0,5,2,4,0,6,3,6,8,9,9,1,2,5,6,0,7,1,7,6,0,6,0,5,8,8,6,1,1,6,4,6,7,1,0,9,4,0,5,0,7,7,5,4,1,0,0,2,2,5,6,9,8,3,1,5,5,2,0,0,0,5,5,9,3,5,7,2,9,7,2,5,7,1,6,3,6,2,6,9,5,6,1,8,8,2,6,7,0,4,2,8,2,5,2,4,8,3,6,0,0,8,2,3,2,5,7,5,3,0,4,2,0,7,5,2,9,6,3,4,5,0];\n  return true;\n}\n\nlargestProductinaSeries(13);",head:"",tail:""},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/coding-interview-prep/project-euler/problem-9-special-pythagorean-triplet",id:"5900f3741000cf542c50fe87"},slug:"/coding-interview-prep/project-euler/problem-8-largest-product-in-a-series"}}}});
//# sourceMappingURL=path---coding-interview-prep-project-euler-problem-8-largest-product-in-a-series-a1b551c76da616c501a6.js.map