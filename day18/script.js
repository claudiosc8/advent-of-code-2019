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

class Node {
  constructor(value, maze, path=[], steps = 0) {
    this.value = value;
    this.keys = [];
    this.map = maze;
    this.path = path;
    this.steps = steps;
  }
}

class mazeController {

    constructor(maze, canvas) {
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
        this.input = maze;
        this.goal = maze.replace(/[\n@.#A-Z]/g,"").split('');
        this.doors = maze.replace(/[\n@.#a-z]/g,"").split('');
        this.algorithm = new algorithm();
        this.speed = 50;
        this.keys = [];
        this.sequence = [];
        this.steps = 0;
        this.result = [];
    }

    findNodes(parent) {

        const AvailableKeys = maze.keysMap(parent.map);
        const startingPoint = maze.findStartingPoint(parent.map)



        AvailableKeys.forEach(e => {

            const start = [startingPoint.y,startingPoint.x];
            const end = [e.pos.y, e.pos.x]

            const path = this.algorithm.calculatePath(start, end, parent.map, e.name)

            if(path.length !== 0){

               //Create a copy of the 2d array 
               const newMap = parent.map.map(e => e.slice());
               maze.moveWalkerToKey(e.name, newMap);

               const child = new Node([...parent.value, e.name], newMap, [...parent.path, ...path.slice(0, path.length-2)], parent.steps + path.length-1)       

               parent.keys.push(child)              

               maze.draw(this.context, newMap);
               window.setTimeout(() => {this.findNodes(child)}, 100);
               
            } 
            
        })

        if(AvailableKeys.length === 0) {
            this.result.push(parent)       
        }

        return parent
    }

    run() {

        const map = this.input.split('\n').slice(1,-1).map(e => e.split(''));
        const parent = new Node([], map);

        maze.draw(this.context, map);

        this.findNodes(parent)

        this.result = this.result.sort((a, b) => a.steps - b.steps )
  
        return this.result
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

    moveWalkerToKey: function(key, map) {

        const width = map[0].length;
        const height = map.length;

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {

                if( map[y][x] === '@' ) {
                    map[y][x] = '.'

                } else if ( map[y][x] === key.toUpperCase() ) {
                    map[y][x] = '.'

                } else if( map[y][x] === key ) {
                    map[y][x] = '@'

                } 

            }
        }

        return map
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



// world is a 2d array of integers (eg world[10][15] = 0)
// pathStart and pathEnd are arrays like [5,10]
class algorithm {

    // distanceFunction functions
    // these return how far away a point is to another

    ManhattanDistance(Point, Goal)
    {   // linear movement just cardinal directions (NSEW)
        return Math.abs(Point.x - Goal.x) + Math.abs(Point.y - Goal.y);
    }

    canWalk(d, map, key) {
        return (maze.isOpen(d.x, d.y, map) || maze.isThatKey(d.x, d.y, map, key));
    }

    // Neighbours functions, used by findNeighbours function
    // to locate adjacent available cells that aren't blocked

    // Returns every available North, South, East or West
    Neighbours(x, y, map, key)
    {

        const result = [];

        const directions = [
            {x:x, y:y-1}, //NORTH
            {x:x, y:y+1}, //SOUTH
            {x:x+1, y:y}, //EAST
            {x:x-1, y:y}, //WEST
        ]

        directions.forEach(d => {
            if(this.canWalk(d, map, key)) {
                result.push(d);
            }
        })
        
        
        return result;

    }

    // Node function, returns a new object with Node properties
    // Used in the calculatePath function to store route costs, etc.
    Node(Parent, Point, mapWidth)
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
    }

    // Path function, executes AStar algorithm operations
    calculatePath(pathStart, pathEnd, map, key)
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
    }

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




console.log('part1', part1(demo3)) // 282

