import React from 'react';
import { Handle, Position} from "reactflow";

export default function TreeNode({ data}) {
    const {label, id, onToggle, isHighlighted} = data;
    return (
        <div
            onClick={()=> onToggle(id)}
            className={`px-4 py-2 rounded text-white cursor-pointer transition-all border-2 ${
                isHighlighted 
                ? "bg-yellow-500 border-yellow-300 scale-110 shadow-lg" // Highlight style
                : "bg-gray-700 border-transparent hover:bg-gray-600"    // Normal style
                }`
            }
        >
            <Handle
                type='target'
                position={Position.Top}
                className=' w-2 h-2 bg-orange-400'
            />
            {label}

            <Handle
                type='source'
                position={Position.Bottom}
                className=' w-2 h-2 bg-orange-400'
            />
        </div>
    );
}
