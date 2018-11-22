webpackJsonp([0xbc5e7e412135],{2855:function(e,r){e.exports={data:{challengeNode:{title:"Use Breadth First Search in a Binary Search Tree",description:["现在我们来介绍另一种树结构遍历方法：广度优先（breadth-first）查找。相较于前一节挑战中的深度优先查找方法，在访问下一层之前，广度优先查找方法会先遍历完上一层。通常，广度优先查找算法可以通过队列（queue）来实现。","这种遍历方式的核心思路是发生在根节点入队后的一个循环：首先我们让队列头元素出队并把该出队元素添加到结果中。之后，我们检查这个出队的元素对应的节点是否有子节点。如果有，就把它的子节点都添加到队列。然后，回到开头的出队并添加到结果这一操作。这个过程一直持续到队列为空。因此，一开始我们需要先让树的根节点入队，这样队列才有头元素可以出队。","挑战说明：请为树结构添加一个名为<code>levelOrder</code>的广度优先查找方法。该方法应该通过广度优先查找方式遍历树中的所有数据值。我们需要确保数组中的元素是节点的数值而非节点本身。对于同一层级，子节点应从左至右的顺序遍历。然后，我们再来写一个叫做<code>reverseLevelOrder</code>的方法，该方法以从右至左的顺序遍历同一层级的子节点。"],challengeType:1,fields:{slug:"/coding-interview-prep/data-structures/use-breadth-first-search-in-a-binary-search-tree",blockName:"Data Structures",tests:[{text:"<code>BinarySearchTree</code>数据结构应该存在。",testString:"assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() }; return (typeof test == 'object')})(), '<code>BinarySearchTree</code>数据结构应该存在。');"},{text:"<code>BinarySearchTree</code>应该有<code>levelOrder</code>方法。",testString:"assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.levelOrder == 'function')})(), '<code>BinarySearchTree</code>应该有<code>levelOrder</code>方法。');"},{text:"<code>BinarySearchTree</code>应该有<code>reverseLevelOrder</code>方法。",testString:"assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.reverseLevelOrder == 'function')})(), '<code>BinarySearchTree</code>应该有<code>reverseLevelOrder</code>方法。');"},{text:"<code>levelOrder</code>方法应该以数组形式返回树中所有的数据值，且同一层级的数据顺序应为从左至右。",testString:"assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.levelOrder !== 'function') { return false; }; test.add(7); test.add(1); test.add(9); test.add(0); test.add(3); test.add(8); test.add(10); test.add(2); test.add(5); test.add(4); test.add(6); return (test.levelOrder().join('') == '719038102546'); })(), '<code>levelOrder</code>方法应该以数组形式返回树中所有的数据值，且同一层级的数据顺序应为从左至右。');"},{text:"<code>reverseLevelOrder</code>方法应该以数组形式返回树中所有的数据值，且同一层级的数据顺序应为从右至左。",testString:"assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.reverseLevelOrder !== 'function') { return false; }; test.add(7); test.add(1); test.add(9); test.add(0); test.add(3); test.add(8); test.add(10); test.add(2); test.add(5); test.add(4); test.add(6); return (test.reverseLevelOrder().join('') == '791108305264'); })(), '<code>reverseLevelOrder</code>方法应该以数组形式返回树中所有的数据值，且同一层级的数据顺序应为从右至左。');"},{text:"当树为空时，<code>levelOrder</code>方法应返回<code>null</code>。",testString:"assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.levelOrder !== 'function') { return false; }; return (test.levelOrder() == null); })(), '当树为空时，<code>levelOrder</code>方法应返回<code>null</code>。');"},{text:"当树为空时，<code>reverseLevelOrder</code>方法应返回<code>null</code>。",testString:"assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.reverseLevelOrder !== 'function') { return false; }; return (test.reverseLevelOrder() == null); })(), '当树为空时，<code>reverseLevelOrder</code>方法应返回<code>null</code>。');"}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:"var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));\nfunction Node(value) {\n    this.value = value;\n    this.left = null;\n    this.right = null;\n}\nfunction BinarySearchTree() {\n    this.root = null;\n    // 请把你的代码写在这条注释以下\n    // 请把你的代码写在这条注释以上\n}",head:"",tail:"BinarySearchTree.prototype = {\n    add: function(value) {\n        var node = this.root;\n        if (node == null) {\n          this.root = new Node(value);\n          return;\n        } else {\n            function searchTree(node) {\n                if (value < node.value) {\n                    if (node.left == null) {\n                        node.left = new Node(value);\n                        return;\n                    } else if (node.left != null) {\n                        return searchTree(node.left)\n                    };\n                } else if (value > node.value) {\n                    if (node.right == null) {\n                        node.right = new Node(value);\n                        return;\n                    } else if (node.right != null) {\n                        return searchTree(node.right);\n                    };\n                } else {\n                    return null;\n                };\n            };\n            return searchTree(node);\n        };\n    }\n};"},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/coding-interview-prep/data-structures/delete-a-leaf-node-in-a-binary-search-tree",id:"587d8258367417b2b2512c7f"},slug:"/coding-interview-prep/data-structures/use-breadth-first-search-in-a-binary-search-tree"}}}});
//# sourceMappingURL=path---coding-interview-prep-data-structures-use-breadth-first-search-in-a-binary-search-tree-409c2a9ac864f24a2c7b.js.map