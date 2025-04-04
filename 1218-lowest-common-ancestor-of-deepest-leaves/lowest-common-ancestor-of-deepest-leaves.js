/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function(root) {
    
    const recursiveFuntion = (node) =>{
        if (!node) return[0, null]

        let [leftDepth, leftLCA] = recursiveFuntion(node.left);
        let [rightDepth, rightLCA] = recursiveFuntion(node.right);

        if (leftDepth === rightDepth) {
            return [leftDepth + 1, node]
        } else if (leftDepth > rightDepth){
            return [leftDepth + 1, leftLCA]
        } else {
            return [rightDepth + 1, rightLCA]
        }
    };

    return recursiveFuntion(root)[1];
};