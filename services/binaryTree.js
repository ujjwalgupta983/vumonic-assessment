'use strict'

module.exports = function (dict, option) {
  // create a BinaryTree object
  var tree = new BinaryTree()

  // iterating each object value
  Object.entries(dict).forEach(function ([key, value]) {
    // inserting into binary tree
    tree.insertRoot({ key, value })
  })

  // get Root node
  var root = tree.getRootNode()

  // Traversing a Binary Tree
  switch (option) {
    case '1':
      return tree.inOrder(root)
    case '2':
      return tree.postOrder(root)
    default:
      return tree.preOrder(root)
  }
}

/**
 * Class of a single node
 * @param root holds root of the tree
 * @param right holds right node
 * @param left holds left node
 */
class Node {
  constructor (data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  constructor () {
    this.root = null
    this.result = []
  }

  getRootNode () {
    return this.root
  }

  inOrder (node) {
    if (node !== null) {
      this.inOrder(node.left)
      this.result.push(node.data)
      this.inOrder(node.right)
    }
    return this.result
  }

  preOrder (node) {
    if (node !== null) {
      this.result.push(node.data)
      this.preOrder(node.left)
      this.preOrder(node.right)
    }
    return this.result
  }

  postOrder (node) {
    if (node !== null) {
      this.postOrder(node.left)
      this.postOrder(node.right)
      this.result.push(node.data)
    }
    return this.result
  }

  insertRoot (data) {
    var newNode = new Node(data)
    // if tree is empty
    if (this.root === null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  insertNode (node, newNode) {
    // if root.count < new Node count then inserting in left node
    if (newNode.data.value.count < node.data.value.count) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }
}
