webpackJsonp([0xbe86f49d6214],{3050:function(e,r){e.exports={data:{challengeNode:{title:"Problem 27: Quadratic primes",description:["欧拉发现了这个著名的二次多项式：","$n^2 + n + 41$","对于连续的整数 $0 \\le n \\le 39$，这个二次多项式生成了 40 个素数。然而，当 $n = 40 时，40^2 + 40 + 41 = 40(40 + 1) + 41$ 能够被41整除，同时显然当 $n = 41, 41^2 + 41 + 41$ 也能被 41 整除。","随后，另一个神奇的多项式 $n^2 - 79n + 1601$ 被发现了，对于连续的整数 $0 \\le n \\le 79$，它生成了80个素数。这个多项式的系数 −79 和 1601 的乘积为 −126479。","考虑以下形式的二次多项式：","","$n^2 + an + b$, 满足 $|a| < 给定参数值 range$ and $|b| \\le 给定参数值 range$。其中 $|n|$ 指 n 的模或绝对值。例如 $|11| = 11$ and $|-4| = 4$","","这其中存在某个二次多项式能够对从 0 开始尽可能多的连续整数 $n 都生成素数，求其系数 $a$ 和 $b$ 的乘积。"],challengeType:5,fields:{slug:"/coding-interview-prep/project-euler/problem-27-quadratic-primes",blockName:"Project Euler",tests:[{text:"<code>quadraticPrimes(200)</code>应该返回 -4925。",testString:"assert(quadraticPrimes(200) == -4925, '<code>quadraticPrimes(200)</code>应该返回 -4925。');"},{text:"<code>quadraticPrimes(500)</code>应该返回 -18901。",testString:"assert(quadraticPrimes(500) == -18901, '<code>quadraticPrimes(500)</code>应该返回 -18901。');"},{text:"<code>quadraticPrimes(800)</code>应该返回 -43835。",testString:"assert(quadraticPrimes(800) == -43835, '<code>quadraticPrimes(800)</code>应该返回 -43835。');"},{text:"<code>quadraticPrimes(1000)</code>应该返回 -59231。",testString:"assert(quadraticPrimes(1000) == -59231, '<code>quadraticPrimes(1000)</code>应该返回 -59231。');"}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:"function quadraticPrimes(range) {\n  // 祝你好运！\n  return range;\n}\n\nquadraticPrimes(1000);",head:"",tail:""},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/coding-interview-prep/project-euler/problem-28-number-spiral-diagonals",id:"5900f3871000cf542c50fe9a"},slug:"/coding-interview-prep/project-euler/problem-27-quadratic-primes"}}}});
//# sourceMappingURL=path---coding-interview-prep-project-euler-problem-27-quadratic-primes-61e29084d6d2a5d139d3.js.map