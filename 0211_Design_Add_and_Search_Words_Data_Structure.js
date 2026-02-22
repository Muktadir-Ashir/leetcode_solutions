var WordDictionary = function() {
    this.root = {
        children: {},
        isEnd: false
    };
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let node = this.root;
    
    for (let char of word) {
        if (!node.children[char]) {
            node.children[char] = {
                children: {},
                isEnd: false
            };
        }
        node = node.children[char];
    }
    
    node.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    return this.dfs(word, 0, this.root);
};

/**
 * @param {string} word
 * @param {number} index
 * @param {Object} node
 * @return {boolean}
 */
WordDictionary.prototype.dfs = function(word, index, node) {
    // If we've processed the entire word
    if (index === word.length) {
        return node.isEnd === true;
    }
    
    const char = word[index];
    
    // Normal letter case
    if (char !== '.') {
        if (!node.children[char]) {
            return false;
        }
        return this.dfs(word, index + 1, node.children[char]);
    }
    
    // Wildcard '.' case → try every possible child
    for (let key in node.children) {
        if (this.dfs(word, index + 1, node.children[key])) {
            return true;
        }
    }
    
    return false;
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */