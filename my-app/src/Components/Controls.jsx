import React from 'react'

export default function Controls({ onExpandAll, onCollapseAll, onSearch }) {
    return (
        <div 
            className=' absolute top-4 right-4 z-50 flex gap-2'
        >

            <input 
                type="text" 
                placeholder="Search node..." 
                className="px-3 py-1 rounded text-black border"
                onChange={(e) => onSearch(e.target.value)}
            />

            <button
                onClick={onExpandAll}
                className=' px-3 py-1 bg-green-600 text-white rounded'
            >
                Expand All
            </button>
            <button
                onClick={onCollapseAll}
                className=' px-3 py-1 bg-red-600 text-white rounded'
            >
                Collapse All
            </button>
        </div>
    );
}
