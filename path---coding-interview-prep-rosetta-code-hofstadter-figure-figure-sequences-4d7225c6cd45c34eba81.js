webpackJsonp([0x7b2bee988dd1],{3405:function(e,t){e.exports={data:{challengeNode:{title:"Hofstadter Figure-Figure sequences",description:["<p>These two sequences of positive integers are defined as:</p>","<p><big>$$R(1)=1\\ ;\\ S(1)=2 \\\\R(n)=R(n-1)+S(n-1), \\quad n>1.$$</big></p>","<p>The sequence <big>$S(n)$</big> is further defined as the sequence of positive integers not present in <big>$R(n)$</big>.</p><p>Sequence <big>$R$</big> starts:</p>","<p>1, 3, 7, 12, 18, ...</p>","<p>Sequence <big>$S$</big> starts:</p>","<p>2, 4, 5, 6, 8, ...</p>","Task:","Create two functions named ffr and ffs that when given n return R(n) or S(n) respectively.(Note that R(1) = 1 and S(1) = 2 to avoid off-by-one errors).","No maximum value for n should be assumed.",'Sloane\'s <a href="http://oeis.org/A005228" title="link: http://oeis.org/A005228">A005228</a> and <a href="http://oeis.org/A030124" title="link: http://oeis.org/A030124">A030124</a>.','<a href="http://mathworld.wolfram.com/HofstadterFigure-FigureSequence.html" title="link: http://mathworld.wolfram.com/HofstadterFigure-FigureSequence.html">Wolfram MathWorld</a>','Wikipedia: <a href="https://en.wikipedia.org/wiki/Hofstadter_sequence#Hofstadter_Figure-Figure_sequences" title="wp: Hofstadter_sequence#Hofstadter_Figure-Figure_sequences">Hofstadter Figure-Figure sequences</a>.'],challengeType:5,fields:{slug:"/coding-interview-prep/rosetta-code/hofstadter-figure-figure-sequences",blockName:"Rosetta Code",tests:[{text:"<code>ffr</code> is a function.",testString:"assert(typeof ffr === 'function', '<code>ffr</code> is a function.');"},{text:"<code>ffs</code> is a function.",testString:"assert(typeof ffs === 'function', '<code>ffs</code> is a function.');"},{text:"<code>ffr</code> should return integer.",testString:"assert(Number.isInteger(ffr(1)), '<code>ffr</code> should return integer.');"},{text:"<code>ffs</code> should return integer.",testString:"assert(Number.isInteger(ffs(1)), '<code>ffs</code> should return integer.');"},{text:"<code>ffr()</code> should return <code>69</code>",testString:"assert.equal(ffr(ffrParamRes[0][0]), ffrParamRes[0][1], '<code>ffr()</code> should return <code>69</code>');"},{text:"<code>ffr()</code> should return <code>1509</code>",testString:"assert.equal(ffr(ffrParamRes[1][0]), ffrParamRes[1][1], '<code>ffr()</code> should return <code>1509</code>');"},{text:"<code>ffr()</code> should return <code>5764</code>",testString:"assert.equal(ffr(ffrParamRes[2][0]), ffrParamRes[2][1], '<code>ffr()</code> should return <code>5764</code>');"},{text:"<code>ffr()</code> should return <code>526334</code>",testString:"assert.equal(ffr(ffrParamRes[3][0]), ffrParamRes[3][1], '<code>ffr()</code> should return <code>526334</code>');"},{text:"<code>ffs()</code> should return <code>14</code>",testString:"assert.equal(ffs(ffsParamRes[0][0]), ffsParamRes[0][1], '<code>ffs()</code> should return <code>14</code>');"},{text:"<code>ffs()</code> should return <code>59</code>",testString:"assert.equal(ffs(ffsParamRes[1][0]), ffsParamRes[1][1], '<code>ffs()</code> should return <code>59</code>');"},{text:"<code>ffs()</code> should return <code>112</code>",testString:"assert.equal(ffs(ffsParamRes[2][0]), ffsParamRes[2][1], '<code>ffs()</code> should return <code>112</code>');"},{text:"<code>ffs()</code> should return <code>1041</code>",testString:"assert.equal(ffs(ffsParamRes[3][0]), ffsParamRes[3][1], '<code>ffs()</code> should return <code>1041</code>');"}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:"// noprotect\nfunction ffr(n) {\n  return n;\n}\n\nfunction ffs(n) {\n  return n;\n}",head:"",tail:"const ffrParamRes = [[10, 69], [50, 1509], [100, 5764], [1000, 526334]];\nconst ffsParamRes = [[10, 14], [50, 59], [100, 112], [1000, 1041]];\n"},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/coding-interview-prep/rosetta-code/hofstadter-q-sequence",id:"59622f89e4e137560018a40e"},slug:"/coding-interview-prep/rosetta-code/hofstadter-figure-figure-sequences"}}}});
//# sourceMappingURL=path---coding-interview-prep-rosetta-code-hofstadter-figure-figure-sequences-4d7225c6cd45c34eba81.js.map