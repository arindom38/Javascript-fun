// const Graph = {
//     a: ['b','c'],
//     b: ['d','e','f'],
//     c: ['g'],
//     d: ['h','j'],
//     e: [],
//     f: ['k'],
//     h: [],
//     j: [],
//     k: [],
//     g: []
// }

const Graph= {
    a: ['b','c'],
    b: ['g'],
    c: ['d'],
    d: ['b','e'],
    G: ['e'],
    e: []
}
//BFS itterative method
const BFS = (node) =>{
    const queue = [node]

    while(queue.length > 0){
        const curr = queue.pop()
        console.log(curr)
        for(let child of Graph[curr]){
            queue.unshift(child)
        }
    }
}
//BFS Recursive methood
// const BFS = (node) =>{
//     const queue = [node]

//     while(queue.length > 0){
//         const curr = queue.pop()
//         console.log(curr)
//         for(let child of Graph[curr]){
//             queue.unshift(child)
//         }
//     }
// }

BFS('a')