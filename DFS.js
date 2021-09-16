const Graph = {
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
//
var count  = -1;
//iterative method
const DFSIterative = (N) =>{
    let stack = [N]
    while(stack.length > 0){
        const current = stack.pop()
        console.log(current)
        count++;
        for(let child of Graph[current]){
            stack.push(child)
        }
    }
}
//DFS Recursion
const DFSRecursion = (N) =>{
    //console.log(N)
    count++;
    if(Graph[N].length > 0){
        for(let child of Graph[N]){
            DFSRecursion(child)
        }
    }

    return count;
}

const getDecendentCount = (nodes) =>{
    for(let node of nodes){
        console.log(`Node ID:  ${node} DecendeentCount: ${DFSRecursion(node)}`)
        count = -1;
    }
}

getDecendentCount(['a','b','d','h','j'])
//DFSIterative('a')
//DFSRecursion('b')
//console.log(count)