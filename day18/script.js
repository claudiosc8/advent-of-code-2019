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

class mazeController {

    constructor(maze, canvas) {
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
        this.maze = new Maze(this.context, maze);
        this.algorithm = new algorithm(this.maze);
        this.speed = 50;
        this.keys = [];
        this.goal = this.maze.goal;
        this.sequence = [];
        this.steps = 0;
    }

    test() {

        let stop = false

        while(!stop) {

            console.log(this.maze.keysMap, this.maze.doorsMap)

            let closer;
            let length = 0;

            this.maze.keysMap.forEach(e => {

                const p = this.algorithm.calculatePath([this.maze.start.y,this.maze.start.x], [e.pos.y, e.pos.x])

                if(p.length > 0 ){
                    console.log(p.length, e.name)
                   closer = e.name;
                   length = p.length - 1;
                }
                
            })

            if(closer === undefined) {
                stop = true;
            } else {
                this.steps += length
                this.sequence.push(closer)
                this.maze.moveWalkerToKey(closer)
                this.maze.draw()
                console.log('maze', this.maze.map, closer)
            }

            

        }

        return [this.sequence, this.steps]
  
    }

    run() {
        if (!this.algorithm.isDone()) {
            this.algorithm.step();
            
            window.setTimeout(function() {
                this.run();
            }, this.speed);
        }
        else {          
            // Clear map so we can draw the solution path.
            this.walker.maze.draw(true);
            
            // Draw the solution path.
            this.algorithm.solve();
        }
    }
};


///////////////// MAZE /////////////////

class Maze {

    constructor(context, maze) {
        this.context = context;
        this.map = maze.split('\n').slice(1,-1).map(e => e.split(''));
        this.width = this.map[0].length;
        this.height = this.map.length;
        this.goal = maze.replace(/[\n@.#A-Z]/g,"").split('');
        this.doors = maze.replace(/[\n@.#a-z]/g,"").split('');
        this.keysMap = this.setKeyMap(true);
        this.doorsMap = this.setKeyMap(false);
        this.start = this.findStartingPoint(),
        this.unit = 13;
    }

    swap(a,b) {

        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                if( this.map[y][x] === a ) {
                    this.map[y][x] = b
                } 
            }
        }

    }

    moveWalkerToKey(key) {
        this.swap('@','.')
        this.swap(key.toUpperCase(),'.')
        this.swap(key,'@')
        this.keysMap = this.setKeyMap(true);
        this.start = this.findStartingPoint();
    }


    findStartingPoint() {
         for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                if( this.isWalker(x, y) ) {
                    return {x,y}
                } 
            }
        }
    }


    setKeyMap(check) {
        const keysMap = [];
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                if(check ? this.isKey(x, y) : this.isDoor(x, y)) {
                    keysMap.push({name:this.map[y][x], pos:{x,y}})
                } 
            }
        }

        return keysMap;
    }


    draw(drawClear = false) {

        const {context, unit} = this;

        context.textAlign = "center";
        context.textBaseline = "middle";
        context.font = `${this.unit}px Arial`;

        for (var y=0; y < this.height; y++) {
            for (var x=0; x < this.width; x++) {

                switch(true) {

                case this.isWall(x, y): 
                    context.fillStyle = 'black';
                    context.fillRect(x * unit, y * unit, unit, unit);
                    break;

                case drawClear:
                    context.fillStyle = 'white';
                    context.fillRect(x * unit, y * unit, unit, unit);
                    break;

                case this.isWalker(x, y):
                    context.fillStyle = 'red';
                    context.beginPath();
                    context.arc(x * unit + unit/2, y * unit + unit/2, unit/2, 0, 2 * Math.PI);
                    context.fill();
                    break;

                case this.isKey(x, y):
                    context.fillStyle = '#FFBF00';
                    context.beginPath();
                    context.moveTo(x*unit + unit/2, y*unit);
                    context.lineTo(x*unit + unit, y*unit+unit/2);  
                    context.lineTo(x*unit + unit/2, y*unit+unit);   
                    context.lineTo(x*unit, y*unit+unit/2);  
                    context.fill();

                    context.fillStyle = 'black';
                    context.fillText(this.map[y][x], x * unit + unit/2, y * unit + unit/2);

                    context.strokeStyle = "#CCCCCC";
                    context.strokeRect(x * unit, y * unit, unit, unit);
                    break;

                case this.isDoor(x, y):
                    context.fillStyle = '#960018';
                    context.fillRect(x * unit, y * unit, unit, unit);

                    context.fillStyle = 'white'; 
                    context.fillText(this.map[y][x], x * unit + unit/2, y * unit + unit/2);
                    break;

                case this.isOpen(x, y):
                    context.fillStyle = 'white';
                    context.fillRect(x * unit, y * unit, unit, unit);
                    context.strokeStyle = "#CCCCCC";
                    context.strokeRect(x * unit, y * unit, unit, unit);
                    break;

                }
            }
        }
    }
    
    isUpperCase (char) {
        return char == char.toUpperCase() ? true : false
    } 

    isWall(x, y) {
        return (this.map[y][x] == '#');
    }
    
    isOpen(x, y) {
        return (this.map[y][x] == '.');
    }

    isWalker(x, y) {
        return (this.map[y][x] == '@');
    }

    isKey(x, y) {
        return (!this.isWall(x, y) && !this.isOpen(x, y) && !this.isWalker(x, y) && !this.isUpperCase(this.map[y][x])) 
    }

    isDoor(x, y) {
        return (!this.isWall(x, y) && !this.isOpen(x, y) && !this.isWalker(x, y) && this.isUpperCase(this.map[y][x])) 
    }
    

};


// world is a 2d array of integers (eg world[10][15] = 0)
// pathStart and pathEnd are arrays like [5,10]
class algorithm {

    constructor(maze) {
        // keep track of the world dimensions
        // Note that this A-star implementation expects the world array to be square: 
        // it must have equal height and width. If your game world is rectangular, 
        // just fill the array with dummy values to pad the empty space.
        this.maze = maze;
        this.map = this.maze.map
        this.mapWidth = this.map[0].length;
        this.mapHeight = this.map.length;
        this.mapSize = this.mapWidth * this.mapHeight;
    }
    

    // distanceFunction functions
    // these return how far away a point is to another

    ManhattanDistance(Point, Goal)
    {   // linear movement just cardinal directions (NSEW)
        return Math.abs(Point.x - Goal.x) + Math.abs(Point.y - Goal.y);
    }

    canWalk(d) {
        return (this.maze.isOpen(d.x, d.y) || this.maze.isKey(d.x, d.y));
    }


    // Neighbours functions, used by findNeighbours function
    // to locate adjacent available cells that aren't blocked

    // Returns every available North, South, East or West
    Neighbours(x, y)
    {

        const result = [];

        const directions = [
            {x:x, y:y-1}, //NORTH
            {x:x, y:y+1}, //SOUTH
            {x:x+1, y:y}, //EAST
            {x:x-1, y:y}, //WEST
        ]

        directions.forEach(d => {
            if(this.canWalk(d)) {
                result.push(d);
            }
        })
        
        
        return result;

    }

    // Node function, returns a new object with Node properties
    // Used in the calculatePath function to store route costs, etc.
    Node(Parent, Point)
    {
        var newNode = {
            // pointer to another Node object
            Parent:Parent,
            // array index of this Node in the world linear array
            value:Point.x + (Point.y * this.mapWidth),
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
    calculatePath(pathStart, pathEnd)
    {
        // create Nodes from the Start and End x,y coordinates
        var mypathStart = this.Node(null, {x:pathStart[1], y:pathStart[0]});
        var mypathEnd = this.Node(null, {x:pathEnd[1], y:pathEnd[0]});
        // create an array that will contain all world cells
        var AStar = new Array(this.mapSize);
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
            max = this.mapSize;
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
                myNeighbours = this.Neighbours(myNode.x, myNode.y);
                // test each one that hasn't been tried already
                for(i = 0, j = myNeighbours.length; i < j; i++)
                {
                    myPath = this.Node(myNode, myNeighbours[i]);
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

    const canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const controller = new mazeController(input, canvas)
    controller.maze.draw();

    return controller.test();
}




console.log('part1', part1(demo1)) // 282

