// Naive Approach
{   
class Node{
    constructor(val,priority){
        this.value = val;
        this.priority = priority;
    }
}

class priorityQueue{
    constructor(){
        this.arry = [];
    }
    sort(){
        this.arry.sort((a,b) => a.priority - b.priority);
    }

    enqueue(val,priority){
        var newNode = new Node(val,priority);
        this.arry.push(newNode);
        this.sort()
        return this.arry;
    }
    dequeue(){
        this.arry.sort().shift();
        return this.arry;

    }
}


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
      dijkstersAlogorithm(start,end){
         var distance = {};
         var previous = {};
         var visited = [];
         var distance = new priorityQueue();
        
         for(var item of this.adjecencyList)
        // for(var item of Object.keys(this.adjecencyList))
        {   console.log(item);
         if(item === start) {
            distance.enqueue(start,0)
        }
            else {
                distance.enqueue(item,Infinity);
                }
           previous[item] = null;
             

        }
        while(distance.arry.length > 1)
        {
            var currentVertex = distance.arry[0].value;
          visited.push(currentVertex);
          distance.dequeue();
           console.log(this.adjecencyList[currentVertex]);
          for(var i=0; i<this.adjecencyList[currentVertex].length; i++){
              console.log(!visited.includes(this.adjecencyList[currentVertex][i].vertex));
            //if(!visited.includes(this.adjecencyList[currentVertex][i].vertex)) 
            if(distance.arry[i]) { if(distance.arry[i].priority > this.adjecencyList[currentVertex][i].weight) 
             {

                distance.arry[i].priority = this.adjecencyList[currentVertex][i].weight;
                previous[this.adjecencyList[currentVertex][i].vertex] = currentVertex;

                }
                }
             
          }
          currentVertex = distance.arry.sort();
          }
         
        console.log(distance,previous);

      
      }
    

}
var graph = new Graph;
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A','B',4);
graph.addEdge('A','C',2);
graph.addEdge('B','E',3);
graph.addEdge('C','D',2);
graph.addEdge('D','E',3);
graph.addEdge('D','F',1);
graph.addEdge('C','F',4);
graph.addEdge('E','F',1);

}

