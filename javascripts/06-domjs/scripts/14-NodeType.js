const nodes = document.body.childNodes;
nodes.forEach(node => {
    console.info(`${node} : ${node.nodeType}`);
})