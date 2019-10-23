// Adjancency List
{
    class Graph {
    constructor(){
        this.adjecencyList = {};

    }
    addVertex(input){
        if(!this.adjecencyList[input])  this.adjecencyList[input]= [];
        return this.adjecencyList;
    }
    addEdge(vertex1,vertex2){
       if(this.adjecencyList[vertex1])  
      {   
          if(!this.adjecencyList[vertex1].includes(vertex2))  this.adjecencyList[vertex1].push(vertex2);
      }
       if(this.adjecencyList[vertex2])  {

           if(!this.adjecencyList[vertex2].includes(vertex1)) this.adjecencyList[vertex2].push(vertex1);
           
           }
       return this.adjecencyList;
    }
    removeEdge(v1,v2){
        this.adjecencyList[v1] =  this.adjecencyList[v1].filter(v => v!== v2);
         this.adjecencyList[v2] = this.adjecencyList[v2].filter(v => v!== v1);
        return this.adjecencyList;
    }
     removeVertics(v){
         if(!this.adjecencyList[v]) return `${v} do not exist in this graph.`
         for(var item of this.adjecencyList[v]){
          if(this.adjecencyList[item])  this.adjecencyList[item] = this.adjecencyList[item].filter(x => x!=v);
         }
         delete this.adjecencyList[v];
         return this.adjecencyList;
     }
   depthFirstSearchRecursive(start){

       var result = [];
       var visited = {};
       var adjecencyList = this.adjecencyList;
       if(!adjecencyList[start]) return `Sorry starting point don't found in graph.`;
       function dfs(start){
           
           visited[start] = true;    
           result.push(start);
           for(var item of adjecencyList[start])
           {  
               if(!visited[item]) {
                    dfs(item);    
               }
           }

       }
        dfs(start);
        return result;
   }
    depthFirstSearchItrative(start){
         if(!this.adjecencyList[start]) return `Sorry starting point don't found in graph.`;
        var stack = [start];
        var result = [];
        var visited = {};
        
        visited[start] = true;
        var currentVertex ;
        while(stack.length){
           currentVertex = stack.pop();
           result.push(currentVertex);

           for(var item of this.adjecencyList[currentVertex]){
               if(!visited[item]){
                   visited[item] = true;
                   stack.push(item);
               }
           }

        }
        return result;
       
   }
 breadthFirstSearchItrative(start){
         if(!this.adjecencyList[start]) return `Sorry starting point don't found in graph.`;
        var queue = [start];
        var result = [];
        var visited = {};
        
        visited[start] = true;
        var currentVertex ;
        while(queue.length){
           currentVertex = queue.shift();
           result.push(currentVertex);

           for(var item of this.adjecencyList[currentVertex]){
               if(!visited[item]){
                   visited[item] = true;
                   queue.push(item);
               }
           }

        }
        return result;
       
   }


}
var graph = new Graph;
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A','B');
graph.addEdge('A','C');
graph.addEdge('B','D');
graph.addEdge('C','E');
graph.addEdge('D','E');
graph.addEdge('D','F');
graph.addEdge('E','F');

graph.depthFirstSearchRecursive('A');
}

