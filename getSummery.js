const DFS = (node) =>{
    count++;
    if(Adj[node].length > 0){
        for(let child of Adj[node]){
            DFS(child)
        }
    }
    return count;
}

const getSummery = (nodes) =>{
    var list = {}
    for(let node of nodes){
        //console.log(`Node :[${node}] >> DecendentCount: ${DFS(node)} `)
        list[node] = DFS(node)
        count = -1;
    }
    return list
}


const Adj = {
    a: ['b','c'],
    b: ['d','e','f'],
    c: ['g'],
    d: ['h','j'],
    e: [],
    f: ['k'],
    h: [],
    j: [],
    k: [],
    g: []
}
var count = -1

console.log(getSummery(['a','b','c','d','e','f','h','j','k','g']))