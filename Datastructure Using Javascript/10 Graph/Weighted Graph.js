{
    class Graph {
    constructor(){
        this.adjecencyList = {};

    }
    addVertex(input){
        if(!this.adjecencyList[input])  this.adjecencyList[input]= [];
        return this.adjecencyList;
    }
    addEdge(vertex1,vertex2,weight){
       if(this.adjecencyList[vertex1])  
      {   
          if(!this.adjecencyList[vertex1].includes(vertex2))  this.adjecencyList[vertex1].push({vertex : vertex2, weight});
      }
       if(this.adjecencyList[vertex2])  {

           if(!this.adjecencyList[vertex2].includes(vertex1)) this.adjecencyList[vertex2].push({vertex : vertex1, weight});
           
           }

       return this.adjecencyList;
    }
      dijkstersAlogorithm(){
          console.log(this.adjecencyList['A']);
      }
    

}
var graph = new Graph;
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A','B',50);
graph.addEdge('A','C',40);
graph.addEdge('B','D',9);
graph.addEdge('C','E',16);
graph.addEdge('D','E',12);
graph.addEdge('D','F',18);
graph.addEdge('E','F',29);


}

