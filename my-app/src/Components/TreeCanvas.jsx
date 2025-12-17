// import { useMemo, useState, useEffect } from 'react';
// import treeData from '../Data/treeData';
// import { layoutTree } from '../utils/layoutTree';
// import ReactFlow from 'reactflow';
// import "reactflow/dist/style.css";
// import TreeNode from './TreeNode';
// import Controls from './Controls';

// const nodeTypes = {
//     treeNode : TreeNode
// };
// export default function TreeCanvas() {

//     const [tree, setTree] = useState(treeData);
//     const [highlight, setHighlight] = useState("");

//     const handleSearch = (query)=> {
//         setHighlight(query);
//     };

//     useEffect(()=> {
//         const expand = (node) => {
//             node.collapsed = false;
//             node.children?.forEach(expand);
//         };

//         const newTree = structuredClone(treeData);
//         expand(newTree);
//         setTree(newTree);
//     },[]);

//     const toggleNode = (id) => {
//         const toggle= (node) => {
//             if(node.id === id){
//                 node.collapsed = !node.collapsed;
//             }
//             node.children?.forEach(toggle);
//         };
//         const newTree = structuredClone(tree);
//         toggle(newTree);
//         setTree(newTree);
//     };

    
//     const expandAll = () => {
//         const expand = (node) => {
//             node.collapsed = false;
//             node.children?.forEach(expand);
//         };

//         const newTree = structuredClone(tree);
//         expand(newTree);
//         setTree(newTree);
//     }

//     const collapseAll = () => {
//         const collapse = (node) => {
//             node.collapsed = true;
//             node.children?.forEach(collapse);
//         };

//         const newTree = structuredClone(tree);
//         collapse(newTree);
//         setTree(newTree);
//     }

//     const { nodes, edges} = useMemo(()=> {
//         return layoutTree(tree);
//     },[tree]);

//     const enrichedNodes = useMemo(()=> {
//        return nodes.map((node) => ({
//             ...node,
//             type: "treeNode",
//             data: {
//                 ...node.data,
//                 id: node.id,
//                 onToggle: toggleNode,
//                 // ADDED: Logic to check if label matches search query
//                 isHighlighted: highlight && node.data.label.toLowerCase().includes(highlight.toLowerCase())
//             }
//         }));
//     },[nodes, highlight]);

//   return (
//     <div className=' h-screen w-full'>

//         <Controls 
//             onExpandAll={expandAll}
//             onCollapseAll={collapseAll}
//             onSearch={handleSearch}
//         />
//         <ReactFlow 
//             nodes = {enrichedNodes}
//             edges={edges}
//             nodeTypes={nodeTypes}
//             fitView
//             defaultEdgeOptions={{
//                 animated: true,
//                 style: {stroke: '#94a3b8', strokeWidth: 2}
//             }}
//             nodesDraggable={false}
//             nodesConnectable={false}
//         />
//     </div>
//   )
// }

import { useMemo, useState, useEffect } from 'react';
import treeData from '../Data/treeData';
import { layoutTree } from '../utils/layoutTree';
import ReactFlow, { ReactFlowProvider, useReactFlow } from 'reactflow'; // 1. Import Provider and Hook
import "reactflow/dist/style.css";
import TreeNode from './TreeNode';
import Controls from './Controls';

const nodeTypes = {
    treeNode : TreeNode
};

// 2. Rename your main component to 'TreeCanvasContent'
function TreeCanvasContent() {

    //depth calculator...
    const getTreeDepth = (node) => {
        if (!node.children || node.children.length === 0) return 1;
        return 1 + Math.max(...node.children.map(getTreeDepth));
    };

    const { fitView } = useReactFlow(); // 3. Get the fitView function
    const [tree, setTree] = useState(treeData);
    const [highlight, setHighlight] = useState("");

    const handleSearch = (query)=> {
        setHighlight(query);
    };

    useEffect(()=> {
        const expand = (node) => {
            node.collapsed = false;
            node.children?.forEach(expand);
        };

        const newTree = structuredClone(treeData);

        //Perform Validation
        const depth = getTreeDepth(newTree);
        if(depth < 3 || depth > 6){
            console.warn(`Constraint Validation: Tree Depth is ${depth}.It should be between 3 and 6.`);
            alert(`Warning: This tree has a depth of ${depth}. The assignment requires 3-6 levels.`);
        }
        expand(newTree);
        setTree(newTree);
    },[]);

    const toggleNode = (id) => {
        const toggle= (node) => {
            if(node.id === id){
                node.collapsed = !node.collapsed;
            }
            node.children?.forEach(toggle);
        };
        const newTree = structuredClone(tree);
        toggle(newTree);
        setTree(newTree);
    };
    
    const expandAll = () => {
        const expand = (node) => {
            node.collapsed = false;
            node.children?.forEach(expand);
        };

        const newTree = structuredClone(tree);
        expand(newTree);
        setTree(newTree);
    }

    const collapseAll = () => {
        const collapse = (node) => {
            node.collapsed = true;
            node.children?.forEach(collapse);
        };

        const newTree = structuredClone(tree);
        collapse(newTree);
        setTree(newTree);
    }

    const { nodes, edges} = useMemo(()=> {
        return layoutTree(tree);
    },[tree]);

    const enrichedNodes = useMemo(()=> {
       return nodes.map((node) => ({
            ...node,
            type: "treeNode",
            data: {
                ...node.data,
                id: node.id,
                onToggle: toggleNode,
                isHighlighted: highlight && node.data.label.toLowerCase().includes(highlight.toLowerCase())
            }
        }));
    },[nodes, highlight]);

    // 4. Add this Effect to auto-center when nodes change
    useEffect(() => {
        // Small timeout ensures the render is done before zooming
        const timer = setTimeout(() => {
            fitView({ duration: 800, padding: 0.2 }); 
        }, 100);
        return () => clearTimeout(timer);
    }, [nodes, fitView]);

  return (
    <div className=' h-screen w-full'>
        <Controls 
            onExpandAll={expandAll}
            onCollapseAll={collapseAll}
            onSearch={handleSearch}
        />
        <ReactFlow 
            nodes = {enrichedNodes}
            edges={edges}
            nodeTypes={nodeTypes}
            // fitView // You can remove this static prop since the useEffect handles it now
            defaultEdgeOptions={{
                animated: true,
                style: {stroke: '#94a3b8', strokeWidth: 2}
            }}
            nodesDraggable={false}
            nodesConnectable={false}
        />
    </div>
  )
}

// 5. Export the Wrapper
export default function TreeCanvas() {
    return (
        <ReactFlowProvider>
            <TreeCanvasContent />
        </ReactFlowProvider>
    );
}