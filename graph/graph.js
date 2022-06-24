class Graph {
	constructor() {
		this.adjacencyList = {};
	}
	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}
	addEdge(vertex1, vertex2) {
		if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
		if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);
		this.adjacencyList[vertex1].push(vertex2);
		this.adjacencyList[vertex2].push(vertex1);
	}
	removeEdge(vertex1, vertex2) {
		if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
			this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((vertex) => vertex !== vertex2);
			this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((vertex) => vertex !== vertex1);
			return;
		}
		return null;
	}
	removeVertex(vertex) {
		if (!this.adjacencyList[vertex]) return null;
		while (this.adjacencyList[vertex].length) {
			const adjacentVertex = this.adjacencyList[vertex].pop();
			this.removeEdge(vertex, adjacentVertex);
		}
		delete this.adjacencyList[vertex];
	}
	depthFirstRecursive(start) {
		var visited = {};
		var result = [];
		const adjacencyList = this.adjacencyList;
		//console.log(adjacencyList);
		(function dfs(vertex) {
			if (!vertex) return null;
			visited[vertex] = true;
			result.push(vertex);
			adjacencyList[vertex].forEach((neighbour) => {
				if (!visited[neighbour]) {
					return dfs(neighbour);
				}
			});
		})(start);
		return result;
	}
	depthFirstIterative(start) {
		const visited = {};
		const result = [];
		const stack = [ start ];
		let currentVextex;

		visited[start] = true;
		while (stack.length) {
			currentVextex = stack.pop();
			result.push(currentVextex);
			this.adjacencyList[currentVextex].forEach((neighbour) => {
				if (!visited[neighbour]) {
					visited[neighbour] = true;
					stack.push(neighbour);
				}
			});
		}
		return result;
	}
	bfs(start) {
		const visited = {};
		const result = [];
		const queue = [ start ];
		let currentVextex;

		visited[start] = true;
		while (queue.length) {
			currentVextex = queue.shift();
			result.push(currentVextex);
			this.adjacencyList[currentVextex].forEach((neighbour) => {
				if (!visited[neighbour]) {
					visited[neighbour] = true;
					queue.push(neighbour);
				}
			});
		}
		return result;
	}
}

const g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');
//g.depthFirstRecursive("B")
g.depthFirstIterative('A');
