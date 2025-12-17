const treeData = {
    id: "root",
    label: "Root",
    children: [
        {
            id: 'A',
            label: 'A',
            children: [
                {id: "A1", label: "A1"},
                {id: "A2", label: "A2"}
            ]
        },
        {
            id: 'B',
            label: 'B',
            children: [
                {id: "B1", label: "B1"},
                {id: "B2", label: "B2"}
            ]
        },
        {
            id: 'C',
            label: 'C',
            children: [
                {
                    id: "C1", 
                    label: "C1",
                    children : [
                        {
                            id: "C11", 
                            label: "C11",
                            children: [
                                {id: "C111", label: "C111"},
                                {id: "C112", label: "C112"}
                            ]
                        },
                        {id: "C12", label: "C12"}  
                    ]
                },
                {id: "C2", label: "C2"}
            ]
        },
    ]
}
export default treeData;
