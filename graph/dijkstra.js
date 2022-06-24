class PriorityQueue {
	constructor() {
		this.values = [];
	}
	enqueue(val, priority) {
		this.values.push({ val, priority });
		this.sort();
	}
	sort() {
		this.values.sort((a, b) => a.priority - b.priority);
	}
	dequeue() {
		return this.values.shift();
	}
}

class WeightedGraph {
	constructor() {
		this.adjacencyList = {};
	}
	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}
	addEdge(vertex1, vertex2, weight) {
		if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
		if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);
		this.adjacencyList[vertex1].push({ node: vertex2, weight });
		this.adjacencyList[vertex2].push({ node: vertex1, weight });
	}
	Dijkstra(start, end) {
		const nodes = new PriorityQueue();
		const distances = {};
		const previous = {};
		const path = [];
		let smallest;
		for (let vertex in this.adjacencyList) {
			if (vertex === start) {
				distances[vertex] = 0;
				nodes.enqueue(vertex, 0);
			} else {
				distances[vertex] = Infinity;
				nodes.enqueue(vertex, Infinity);
			}
			previous[vertex] = null;
		}

		while (nodes.values.length) {
			smallest = nodes.dequeue().val;

			if (smallest === end) {
				//finish the logic
				// console.log(distances)
				// console.log(previous)
				while (previous[smallest]) {
					path.push(smallest);
					smallest = previous[smallest];
				}
				break;
			}
			if (smallest || distances[distances] !== Infinity) {
				for (let neighbour in this.adjacencyList[smallest]) {
					let nextNode = this.adjacencyList[smallest][neighbour];
					// Calcate distances to neighbouring nodes
					let candidate = distances[smallest] + nextNode.weight;
					//console.log(candidate)
					let nextNeighbour = nextNode.node;
					// console.log(nextNeighbour)
					if (candidate < distances[nextNeighbour]) {
						// updating the msallest distanc to next neighbour
						distances[nextNeighbour] = candidate;
						// updating previous - How we got to the neighbour
						previous[nextNeighbour] = smallest;
						// enqueue in the priority queue the new priority
						nodes.enqueue(nextNeighbour, candidate);
					}
				}
			}
		}
		return path.concat(smallest).reverse();
	}
}

let wg = new WeightedGraph();
wg.addVertex('A');
wg.addVertex('B');
wg.addVertex('C');
wg.addVertex('D');
wg.addVertex('E');
wg.addVertex('F');
wg.addEdge('A', 'B', 4);
wg.addEdge('A', 'C', 2);
wg.addEdge('B', 'E', 3);
wg.addEdge('C', 'D', 2);
wg.addEdge('C', 'F', 4);
wg.addEdge('D', 'E', 3);
wg.addEdge('D', 'F', 1);
wg.addEdge('E', 'F', 1);

wg.Dijkstra('A', 'F');
