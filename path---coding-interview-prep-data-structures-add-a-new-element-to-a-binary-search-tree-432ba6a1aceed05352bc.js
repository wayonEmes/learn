webpackJsonp([0x8066e7e9dbb2],{2813:function(e,t){e.exports={data:{challengeNode:{title:"Add a New Element to a Binary Search Tree",description:["相信你现在已经对二叉树有了基本的了解，我们来试着写一个稍复杂的方法。","在本次挑战中，我们需要创建一个方法<code>add</code>，该方法可以把新节点添加到二叉查找树中。注意二叉查找树的原则：左子树上的数值应该小于等于父节点数值，而右子树上的数值应该大于等于父节点数值。同时，我们应保证树中的所有数值唯一，即不存在重复值。如果试图往树中添加已经存在的值，add 方法应该返回<code>null</code>。反之，如果成功添加元素，add 方法应返回<code>undefined</code>。","提示：树天然就是一种递归型的数据结构！"],challengeType:1,fields:{slug:"/coding-interview-prep/data-structures/add-a-new-element-to-a-binary-search-tree",blockName:"Data Structures",tests:[{text:"<code>BinarySearchTree</code>数据结构应该存在。",testString:"assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() }; return (typeof test == 'object')})(), '<code>BinarySearchTree</code>数据结构应该存在。');"},{text:"<code>BinarySearchTree</code>应该有<code>add</code>方法。",testString:"assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.add == 'function')})(), '<code>BinarySearchTree</code>应该有<code>add</code>方法。');"},{text:" add 方法应在遵循二叉查找树原则的前提下添加元素。",testString:"assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.add !== 'function') { return false; }; test.add(4); test.add(1); test.add(7); test.add(87); test.add(34); test.add(45); test.add(73); test.add(8); return (test.isBinarySearchTree()); })(), ' add 方法应在遵循二叉查找树原则的前提下添加元素。');"},{text:"如果添加已经存在的元素，add 方法应该返回<code>null</code>。",testString:"assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.add !== 'function') { return false; }; test.add(4); return test.add(4) == null; })(), '如果添加已经存在的元素，add 方法应该返回<code>null</code>。');"}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:"var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));\nfunction Node(value) {\n    this.value = value;\n    this.left = null;\n    this.right = null;\n}\nfunction BinarySearchTree() {\n    this.root = null;\n    // 请把你的代码写在这条注释以下\n    // 请把你的代码写在这条注释以上\n}",head:"",tail:"BinarySearchTree.prototype = {\n    isBinarySearchTree() {\n        if (this.root == null) {\n            return null;\n        } else {\n            var check = true;\n            function checkTree(node) {\n                if (node.left != null) {\n                    var left = node.left;\n                    if (left.value > node.value) {\n                        check = false;\n                    } else {\n                        checkTree(left);\n                    }\n                }\n                if (node.right != null) {\n                    var right = node.right;\n                    if (right.value < node.value) {\n                        check = false;\n                    } else {\n                        checkTree(right);\n                    };\n                };\n            };\n            checkTree(this.root);\n            return check;\n        };\n    }\n};"},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/coding-interview-prep/data-structures/check-if-an-element-is-present-in-a-binary-search-tree",id:"587d8257367417b2b2512c7b"},slug:"/coding-interview-prep/data-structures/add-a-new-element-to-a-binary-search-tree"}}}});
//# sourceMappingURL=path---coding-interview-prep-data-structures-add-a-new-element-to-a-binary-search-tree-432ba6a1aceed05352bc.js.map