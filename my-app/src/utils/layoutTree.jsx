export function layoutTree(node, x = 0, y = 0, levelGap = 120, siblingGap = 140) {
    let nodes = [];
    let edges = [];
    let width = 0;

    if(!node.children || node.children.length === 0 || node.collapsed){
        nodes.push({
            id: node.id,
            data: {label: node.label},
            position: {x, y}
        });
        return {nodes, edges, width: siblingGap};
    }
    
    let childX = x;
    let childNodesList = [];
    node.children.forEach((child) => {
        const layout = layoutTree(child, childX, y + levelGap);
        nodes.push(...layout.nodes);
        edges.push(...layout.edges);

        const currentChildNode= layout.nodes[layout.nodes.length - 1];
        childNodesList.push(currentChildNode);

        edges.push({
            id: `${node.id}-${child.id}`,
            source: node.id,
            target: child.id,
            type: 'smoothstep'
        });
        childX += layout.width;
        width += layout.width;
    });

    const firstChildPos = childNodesList[0].position.x;
    const lastChildPos = childNodesList[childNodesList.length - 1].position.x;
    const parentX = (firstChildPos + lastChildPos) / 2;

    nodes.push({
        id: node.id,
        data: {label: node.label},
        position: { x: parentX, y}
    })
    return { nodes, edges, width}
}
