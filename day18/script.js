const puzzle = `
#################################################################################
#.....#.............#.....#g......#.....#..............i..#.....#.......#.......#
#.###.###.#########.#.###.#.#.###.#.###.#########.#######.#.###.#####.#.#######.#
#...#...#.....#...#.#.#..e#.#...#.#...#.#......f..#.....#...#.#.#.....#...#.....#
#.#.###.#####.#.###.#.#####.###H###.###.#.#########.#.#######.#.#.#######.#.###.#
#.#t#...#.....#.#...#...#...#.#.....#...#.#.......#.#.........#...#.#.....#.#.#.#
#.#.#.###.#####.#.#####.#.###.#######.#.#.#.#####.#.#########.#####.#.#####.#A#.#
#.#.#.....#..c..#...#...#...#...#.#...#.#...#.#...#.#...#...#.............Q.#...#
###.#######.#######.#.#####.#.#.#.#.###.#.###.#.###.#.###.#.#.#################.#
#...#.....#.....#...#.........#...#.#...#.#...#.#.#...#...#.#...#...#...#.....#.#
#.###.###.#.###.#.#################.#####.#.#.#.#.#.###.###.###.###.#.#.#.###.#.#
#.#.#...#.#...#...........#.......#.#...#.#.#.#.#...#...#...#.......#.#...#...#.#
#.#.#.#.###.#############.#.#####.#.#.#.#.#.#.#.#.###.###.#.#########.#####.###.#
#.#.#.#.....#.........J.#...#...#.#...#.#...#.#.#.#...#.#.#.#...#.......#...#.#k#
#.#.#.#######.#########.#####.###.#.###.#####.#.###.###.#.###.#.#.#####.#.###.#.#
#.#.........#.........#...#.......#.#...#...#.#......l..#.....#...#...#.#...#...#
#.#####.#########.#######.#.#########.#.#.#.###########.#####.#####.#.#####.#.###
#.#...#.#.....#.#.#.......#...#.......#.#.#...........#.#...#...#...#.......#.#.#
#.#.#.###.#.#.#.#W#.#########.#.#######.#.###########.###.#.#####.###########.#.#
#.#.#.....#.#...#.#...#.....#..o#.....#.#.....#.....#.....#....r..#..z#.#.....#.#
#.#.#######.###.#.###M#.#.###########.#.#.###.###.#.#####.#########.#.#.#.#####.#
#.#.#.#.....#...#...#.#.#.#.........#.#.#y#.#...#.#.#.....#...#.....#...#.#.....#
#.#.#.#.#####.#####.###.###.###.###.#.#.#.#.###.###.#.#####.###.#######.#.###.###
#...#.#.#...#.....#...#.#...#.#...#...#.#.....#...#.#.#...#...#...#.#...#...#m..#
#.###.#.###.#####.###.#.#.###.###.#####.#########.#.#.#.#####.###.#.#.#####.#.#.#
#.#...#...#.......#...#...#...#...#.....#.........#...#.....#.#...#.Z.#.U.#.#.#.#
#.###.###.#.#######.###.###.#.#.###.#####.###########.#.###.#.#.###.###.#.#.###.#
#...#...#.#.#.....X.#.#.#...#.#.....#d..#...........#.#...#.#.#.#u....#.#.#...#.#
###.#.###.#.#.#######.#.#.###.#######.#.#.#########.#.#####.#.#.#####.###.###.#.#
#.#.#.#...#.#.....#...#...#.#.....#...#.#.#.........#.......#.#.....#.....#.V.#.#
#.#.#.#.###.#####.#.#.#####.#####.#.#######.#########.#######.#.###.#.#####.###.#
#.....#...#.#...#.#.#.......#...#.#.....#...#.......#.#.....#.#...#.#.#..x#.#...#
#.#######.#.#.###.#.#####.###.#.#.#####.#.###.#####.###.###N#.#.###.###.#.#.###.#
#.#...#...#.#.#...#...#.#...#.#...#...#.#...#.#...#...#.#...#.#.#...#...#...#j..#
#.#.#.#.###.#.#.#####.#.###.#.#####.#.#.#.#.#.#.#.###.#.#.###.###.###.#######.###
#.#.#...#.....#.....#...#...#...#...#...#.#.#.#.#...#...#...#...#...#...#.......#
#.#.###.###########.###.#.#####.#.#.#######.#.#.###.#######.###.###.###.#.#####.#
#.#...#.#.....#.....#...#.....#.#.#.....#...#...#.#.#.P...#...#.#...#...#.#.....#
#.###.###.###.#.#####.#######.#.#######.#.#######.#.#####.###.#.#.###.#####.###.#
#...#.......#.K.#...........#..p............................#...#...........#...#
#######################################.@.#######################################
#.B.....#.....#.............#...............#.......#.....#...........#...#.....#
#####.#.#.#.###.#########.#.#.#.#########.###.#.###.###.#.#.#.#########.#.#.#.###
#...#.#.#.#.....#.........#.#.#.#.......#.#...#...#.....#.#.#.#...#.....#...#...#
#.#.#.###.#######.#########.###.#.#####.#.#.#####.#######.#.#.#.#.#.###########.#
#.#...#...#n......#...#.........#...#...#.#...#.#...#...#.#.#b#.#...#...#.....#.#
#.###.#.###.#######.#.#.###########.#.#.#.###.#.###.#.#.#.#.###.#######.#.###.#.#
#...#.#.#.#...#.....#.#.#.........#.#.#.#...#...#.#.#.#.#.#...#.#.......#.#...#.#
#.#.###.#.###.#####.#.#.#.#####.###.#.#.#.#.###.#.#.###.#.###.#.#.###.###.#.###.#
#.#.#.......#.....#.#...#.#...#.....#.#.#.#.#...#.#...#.......#.#...#.#...#.#...#
#.#.#.###########.#.#####.#.#########.#.#.###.###.###.#########.#.#.#.#.###.###.#
#.#...#.....#...#.#.....#.#.......#...#.#.....#.....#...........#.#.#.#.#...#...#
#######.###.#.#.#.#####.#.#.#.###.#.###.#.#######.#.#############.#.#.#.#.###.#.#
#.......#...#.#.#...#...#.#.#.#...#.#...#.#.......#...#.........#.#.#.#.#.....#.#
#.#######.###.#.#.#.#####.#.#.#.###.#.###.#.#########.###.#####S###.#.#.#######.#
#......a#....v#.#.#.......#.#.#...#.#.#.#.#...#.#.....#...#...#.....#.#...#.....#
#######.#######.###.#########.###.#.#.#.#.###.#.#.#####.###.#.#######.###.###.###
#.......#.....#...#.....#...#.#.#.#.#.#.#...#.#.....#...#.#.#.#.........#...#...#
#.#######.#.#####.#####.#.#.#.#.#.#.#.#.###.#.#####.#.###.#.#.#.#######.###.#####
#.....#...#.....#.#.......#...#.#.#.#...#.#.#...#.#.#.#...#.#...#.....#...#.....#
#####.#.#######.#.#############.#.#.###.#.#.###.#.#.#.#.#.#.###.#.###.###.#####.#
#...#.#.......#.#...#.#.........#.#.#...#.#.#...#.....#.#...#.#.#.#.#.#.#.#...#.#
#.#.#.#########.###.#.###.#.###.#.#.###.#.#.#.#############.#.###.#.#.#.#.#.#.#.#
#.#.#q....#...#...#.#...#.#...#.#.#...#.#...#.....#.......#.#.....#.#.#.#.#.#.#.#
#.#.#####.#.#.#.###.###.###.#.###.###.#.#.#####.#.#.#####.#.#######.#.#.#.#.#.#.#
#.#.....#...#...#.....#...#.#...#...#.#.#.....#.#...#.....#.......#...#...#.#...#
#######.#######.#.###.###.#####.###.#.#######.#######.#.###########.###.###.#####
#.....I.#.......#...#.#.#.....#.#...#...#.D...#.......#.#.......#...#.....#.#...#
#.#####.#.#########.#.#.#####.#.#.#####.#.#####.#######.#.#####.#.#########.###.#
#.#...#.#.#...#...#w#...#.....#...#...#.#...#...#.......#.#.....#.......#...#...#
#.###.#.#.#.#.#.###.#####.#####.###.#.#.###.#.#.#####.###G#.###########.#.###.###
#...#...#...#.#...#.....#.#...#.#.#.#...#.#.#.#.....#...#.#.#.........#...#.....#
#.#.###.#####.###.#####.#.#.###.#.#.#####.#.#######.#####.#.#.#######.#####.###.#
#.#...#..s#.F.#...T.#.#...#.......#.#...#.#.......#.......#.#.#.#.....#...#...#.#
#.###.###.#.###.###.#.#####.#######.#.#.#.#######.#.#######.#.#.#R###.#.#.#.###.#
#.#...#...#...#.#...#...#.....#...#...#.#...#.....#...#...#.#.#.#.#.#.#.#.#.#..h#
#.#.#########.#.#.###.#.#######.#C#####.###.#.#########.#.#.#.#.#.#O#.###.#.#.#.#
#.#.#...#...#...#.#.L.#.#...#...#.....#.#...#...#...#...#.#.....#.#.#...#...#.#.#
#.#.#.#.#.#.#####.###.#.#E#.#.#######.#.#.#####.#.#Y#.###.#######.#.###.#####.#.#
#.#...#...#...........#...#...#.........#.........#...#...........#...........#.#
#################################################################################
`
const demo1 = `
########################
#f.D.E.e.C.b.A.@.a.B.c.#
######################.#
#d.....................#
########################
`
const demo2 = `
########################
#@..............ac.GI.b#
###d#e#f################
###A#B#C################
###g#h#i################
########################
`
// Shortest paths are 81 steps; one is: a, c, f, i, d, g, b, e, h

const demo3 = `
#################
#i.G..c...e..H.p#
########.########
#j.A..b...f..D.o#
########@########
#k.E..a...g..B.n#
########.########
#l.F..d...h..C.m#
#################
`
//Shortest paths are 136 steps; one is: a, f, b, j, g, n, h, d, l, o, e, p, c, i, k, m

const demo4 = `
########################
#...............b.C.D.f#
#.######################
#.....@.a.B.c.d.A.e.F.g#
########################
`
//Shortest path is 132 steps: b, a, c, d, f, e, g

const demo5 = `
########################
#@..p..wq.t..r..ac....b#
###d#e#f####z###########
###.#.#.####.###########
###g#h#i####n###########
########################
`

const demo6 = `
#################
#i....c...e....p#
########.########
#j....b...f....o#
########@########
#k....a...g....n#
########.########
#l....d...h....m#
#################
`

// Shortest paths are 81 steps; one is: a, c, f, i, d, g, b, e, h

class Node {
  constructor(value = [], maze = [], steps = Infinity) {
    this.value = value;
    this.keys = [];
    this.map = maze;
    this.steps = steps;
  }
}

class mazeController {

    constructor(map, canvas) {
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
        this.input = map;
        this.goal = map.replace(/[\n@.#A-Z]/g,"").split('');
        this.doors = map.replace(/[\n@.#a-z]/g,"").split('');
        this.doorsMap = undefined;
        this.speed = 50;
        this.result = new Node();
    }

    findNodes(parent, walker, keysMap) {

        // if(this.result.steps !== Infinity) {
        //     console.log(this.result)
        // }

        if(this.result.steps > parent.steps) {

            keysMap.forEach(key => {

                // const start = [walker.y,walker.x];
                // const end = [key.pos.y, key.pos.x]

                const path = algorithm.calculatePath([walker.y,walker.x], [key.pos.y, key.pos.x], parent.map, key.name)

                // const path = pathfinder.findShortestPath([walker.y,walker.x], key.name, parent.map)


                if(path.length>0){
                
                   //Create a copy of the 2d array 
                   const newMap = parent.map.map(e => e.slice());

                   // replace starting position with '.'
                   newMap[walker.y][walker.x] = '.'
                   // replace key position with walker
                   newMap[key.pos.y][key.pos.x] = '@'
                   // find door position
                   const door = this.doorsMap[key.name.toUpperCase()]
                   if(door) { newMap[door.y][door.x] = '.' }

                    // remove that key from the keymap
                   const updatedKeys = keysMap.filter(a => a.name !== key.name)

                   const child = new Node([...parent.value, key.name], newMap, parent.steps + path.length-1)       

                   parent.keys.push(child)              

                   // console.log(child)


                   this.findNodes(child, key.pos, updatedKeys)
                   
                } 
                
            })

            if(keysMap.length === 0) {
                this.result = parent              
            }

        }

    }

    run() {

        const map = this.input.split('\n').slice(1,-1).map(e => e.split(''));

        this.doorsMap = maze.findDoors(this.doors, map);
        const walker = maze.findStartingPoint(map)
        const keysMap = maze.keysMap(map);

        const parent = new Node([], map, 0);

        maze.draw(this.context, map);

        this.findNodes(parent, walker, keysMap)

        return this.result
    }

    test() {

        const map = this.input.split('\n').slice(1,-1).map(e => e.split(''));
        const walker = maze.findStartingPoint(map)

        const path = pathfinder.findShortestPath([walker.y,walker.x], 'a', map)

        return path
    }

    
};


/////////////// MAZE /////////////////


const maze = {

    keysMap: function(map) {

        const width = map[0].length;
        const height = map.length;

        const keysMap = [];
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                if(this.isKey(x, y, map)) {
                    keysMap.push({name:map[y][x], pos:{x,y}})
                } 
            }
        }

        return keysMap;
    },

    findStartingPoint: function(map) {

        const width = map[0].length;
        const height = map.length;

         for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                if( this.isWalker(x, y, map) ) {
                    return {x,y}
                } 
            }
        }
    },

    findDoors: function(doors, map) {

        const width = map[0].length;
        const height = map.length;

        const doorsMap = {};

         for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                if( this.isDoor(x, y, map) ) {
                    doorsMap[map[y][x]] = {x,y}
                } 
            }
        }

        return doorsMap;
    },

    isUpperCase: function(char) {
        return char == char.toUpperCase() ? true : false
    },

    isWall: function(x, y, map) {
        return (map[y][x] == '#');
    },
    
    isOpen: function(x, y, map) {
        return (map[y][x] == '.');
    },

    isWalker: function(x, y, map) {
        return (map[y][x] == '@');
    },

    isThatKey: function(x, y, map, key) {
        return (map[y][x] == key);
    },

    isKey: function(x, y, map) {
        return (!this.isWall(x, y, map) && !this.isOpen(x, y, map) && !this.isWalker(x, y, map) && !this.isUpperCase(map[y][x])) 
    },

    isDoor: function(x, y, map) {
        return (!this.isWall(x, y, map) && !this.isOpen(x, y, map) && !this.isWalker(x, y, map) && this.isUpperCase(map[y][x])) 
    },

    draw: function(context, map) {

        const unit = 13;

        const width = map[0].length;
        const height = map.length;
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.font = `${unit}px Arial`;

        for (var y=0; y < height; y++) {
            for (var x=0; x < width; x++) {

                switch(true) {

                case this.isWall(x, y, map): 
                    context.fillStyle = 'black';
                    context.fillRect(x * unit, y * unit, unit, unit);
                    break;

                case this.isWalker(x, y, map):
                    context.fillStyle = 'red';
                    context.beginPath();
                    context.arc(x * unit + unit/2, y * unit + unit/2, unit/2, 0, 2 * Math.PI);
                    context.fill();
                    break;

                case this.isKey(x, y, map):
                    context.fillStyle = '#FFBF00';
                    context.beginPath();
                    context.moveTo(x*unit + unit/2, y*unit);
                    context.lineTo(x*unit + unit, y*unit+unit/2);  
                    context.lineTo(x*unit + unit/2, y*unit+unit);   
                    context.lineTo(x*unit, y*unit+unit/2);  
                    context.fill();

                    context.fillStyle = 'black';
                    context.fillText(map[y][x], x * unit + unit/2, y * unit + unit/2);

                    context.strokeStyle = "#CCCCCC";
                    context.strokeRect(x * unit, y * unit, unit, unit);
                    break;

                case this.isDoor(x, y, map):
                    context.fillStyle = '#960018';
                    context.fillRect(x * unit, y * unit, unit, unit);

                    context.fillStyle = 'white'; 
                    context.fillText(map[y][x], x * unit + unit/2, y * unit + unit/2);
                    break;

                case this.isOpen(x, y, map):
                    context.fillStyle = 'white';
                    context.fillRect(x * unit, y * unit, unit, unit);
                    context.strokeStyle = "#CCCCCC";
                    context.strokeRect(x * unit, y * unit, unit, unit);
                    break;

                }
            }
        }

    }
}



const algorithm = {

    // distanceFunction functions
    // these return how far away a point is to another

    ManhattanDistance: function(Point, Goal)
    {   // linear movement just cardinal directions (NSEW)
        return Math.abs(Point.x - Goal.x) + Math.abs(Point.y - Goal.y);
    },

    // Neighbours functions, used by findNeighbours function
    // to locate adjacent available cells that aren't blocked

    // Returns every available North, South, East or West
    Neighbours: function(x, y, map, key)
    {

        const result = [];

        const directions = [
            {x:x, y:y-1}, //NORTH
            {x:x, y:y+1}, //SOUTH
            {x:x+1, y:y}, //EAST
            {x:x-1, y:y}, //WEST
        ]

        directions.forEach(d => {
            if(map[d.y][d.x] == '.' || map[d.y][d.x] == key) {
                result.push(d);
            }
        })
        
        return result;

    },

    // Node function, returns a new object with Node properties
    // Used in the calculatePath function to store route costs, etc.
    Node: function(Parent, Point, mapWidth)
    {
        var newNode = {
            // pointer to another Node object
            Parent:Parent,
            // array index of this Node in the world linear array
            value:Point.x + (Point.y * mapWidth),
            // the location coordinates of this Node
            x:Point.x,
            y:Point.y,
            // the heuristic estimated cost of an entire path using this node
            f:0,
            // the distanceFunction cost to get from the starting point to this node
            g:0
        };

        return newNode;
    },

    // Path function, executes AStar algorithm operations
    calculatePath: function(pathStart, pathEnd, map, key)
    {   

        const mapWidth = map[0].length;
        const mapHeight = map.length;
        const mapSize = mapWidth * mapHeight;

        // create Nodes from the Start and End x,y coordinates
        var mypathStart = this.Node(null, {x:pathStart[1], y:pathStart[0]}, mapWidth);
        var mypathEnd = this.Node(null, {x:pathEnd[1], y:pathEnd[0]}, mapWidth);
        // create an array that will contain all world cells
        var AStar = new Array(mapSize);
        // list of currently open Nodes
        var Open = [mypathStart];
        // list of closed Nodes
        var Closed = [];
        // list of the final output array
        var result = [];
        // reference to a Node (that is nearby)
        var myNeighbours;
        // reference to a Node (that we are considering now)
        var myNode;
        // reference to a Node (that starts a path in question)
        var myPath;
        // temp integer variables used in the calculations
        var length, max, min, i, j;
        // iterate through the open list until none are left
        while(length = Open.length)
        {
            max = mapSize;
            min = -1;
            for(i = 0; i < length; i++)
            {
                if(Open[i].f < max)
                {
                    max = Open[i].f;
                    min = i;
                }
            }
            // grab the next node and remove it from Open array
            myNode = Open.splice(min, 1)[0];
            // is it the destination node?
            if(myNode.value === mypathEnd.value)
            {
                myPath = Closed[Closed.push(myNode) - 1];
                do
                {
                    result.push([myPath.x, myPath.y]);
                }
                while (myPath = myPath.Parent);
                // clear the working arrays
                AStar = Closed = Open = [];
                // we want to return start to finish
                result.reverse();
            }
            else // not the destination
            {
                // find which nearby nodes are walkable
                myNeighbours = this.Neighbours(myNode.x, myNode.y, map, key);
                // test each one that hasn't been tried already
                for(i = 0, j = myNeighbours.length; i < j; i++)
                {
                    myPath = this.Node(myNode, myNeighbours[i], mapWidth);
                    if (!AStar[myPath.value])
                    {
                        // estimated cost of this particular route so far
                        myPath.g = myNode.g + this.ManhattanDistance(myNeighbours[i], myNode);
                        // estimated cost of entire guessed route to the destination
                        myPath.f = myPath.g + this.ManhattanDistance(myNeighbours[i], mypathEnd);
                        // remember this new path for testing above
                        Open.push(myPath);
                        // mark this node in the world graph as visited
                        AStar[myPath.value] = true;

                    }
                }

                // remember this route as having no more untested options
                Closed.push(myNode);
            }
        } // keep iterating until the Open list is empty
        return result;
    },

} 


const pathfinder = {

  findShortestPath : function(start, goal, grid) {

    const map = grid.map(e => e.slice());
    var y = start[0];
    var x = start[1];

    // Each "location" will store its coordinates
    // and the shortest path required to arrive there
    var location = {
      y: y,
      x: x,
      path: [],
      status: 'Start'
    };

    // Initialize the queue with the start location already inside
    var queue = [location];

    // Loop through the grid searching for the goal
    while (queue.length > 0) {
      // Take the first location off the queue
      var currentLocation = queue.shift();

      const directions = ['North', 'East', 'South', 'West']

      const d = [
              {x:currentLocation.x, y:currentLocation.y-1}, //NORTH
              {x:currentLocation.x, y:currentLocation.y+1}, //SOUTH
              {x:currentLocation.x+1, y:currentLocation.y}, //EAST
              {x:currentLocation.x-1, y:currentLocation.y}, //WEST
          ]

      for(let i = 0; i<d.length; i++) {

          var newLocation = this.exploreInDirection(currentLocation, d[i], map, goal);
        if (newLocation.status === goal) {
          return newLocation.path;
        } else if (newLocation.status === 'Valid') {
          queue.push(newLocation);
        }

      }

    }

    // No valid path found
    return false;

  },

  // This function will check a location's status
  // (a location is "valid" if it is on the grid, is not an "obstacle",
  // and has not yet been visited by our algorithm)
  // Returns "Valid", "Invalid", "Blocked", or "Goal"
  locationStatus : function(location, map, goal) {

    if (location.x < 0 ||
        location.x >= map[0].length ||
        location.y < 0 ||
        location.y >= map.length) {

      // location is not on the grid--return false
      return 'Invalid';
    } else if (map[location.y][location.x] === goal) {
      return goal;
    } else if (map[location.y][location.x] !== '.') {
      // location is either an obstacle or has been visited
      return 'Blocked';
    } else {
      return 'Valid';
    }

  },


  // Explores the grid from the given location in the given
  // direction
  exploreInDirection : function(currentLocation, direction, map, goal) {

    const newPath = currentLocation.path.slice();
    newPath.push(direction);

    const newLocation = {
      y: direction.y,
      x: direction.x,
      path: newPath,
      status: this.locationStatus({x:direction.x,y:direction.y}, map, goal),
    };
   
    // If this new location is valid, mark it as 'Visited'
    if (newLocation.status === 'Valid') {
      map[newLocation.y][newLocation.x] = '+';
    }

    return newLocation;
  },
}


const part1 = input => {
    console.time('time')
    const canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const controller = new mazeController(input, canvas)

    const result = controller.run();
    console.timeEnd('time')

    return result
}




console.debug('part1', part1(demo2)) // 282

