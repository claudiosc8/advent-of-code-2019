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


class mazeController {

    constructor(maze, canvas) {
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
        this.maze = new Maze(this.context, maze);
        this.walker = new walkerManager(this.context, this.maze);
        this.algorithm = new searchAlgorithm(this.walker);
        this.speed = 50;
        this.keys = [];
        this.goal = this.maze.goal;
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
        this.goal = maze.replace(/[\n@.#A-Z]/g,"").length;
        this.unit = 13;
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
        return (!this.isWall(x, y) && !this.isOpen(x, y) && !this.isUpperCase(this.map[y][x])) 
    }

    isDoor(x, y) {
        return (!this.isWall(x, y) && !this.isOpen(x, y)  && this.isUpperCase(this.map[y][x])) 
    }
    
    canGo(x, y) {
        return (this.isOpen(x, y) || this.isKey(x, y));
    }

    isClosed(x, y) {
        return (this.isWall(x, y) || this.isDoor(x, y));
    }


};


///////////////// SEARCH /////////////////

class searchAlgorithm {

    constructor(walker) {
        this.walker = walker;
        this.direction = 0;
        this.end = walker.maze.end;
    }
    
    
    step() {
        var startingDirection = this.direction;
        
        while (!this.walker.move(this.direction)) {
            // Hit a wall. Turn to the right.       
            this.direction++;
            
            if (this.direction > 3) {
                this.direction = 0;
            }
            
            if (this.direction == startingDirection) {
                // We've turned in a complete circle with no new path available. Time to backtrack.
                while (!this.walker.move(this.direction, true)) {
                    // Hit a wall. Turn to the right.       
                    this.direction++;
                    
                    if (this.direction > 3) {
                        this.direction = 0;
                    }
                }

                break;
            }
        }
        
        this.walker.draw();
    }
    
    isDone() {
        return (walker.x == walker.maze.end.x && walker.y == walker.maze.end.y);
    }
    
    solve() {
        // Draw solution path.
        for (var x = 0; x < this.walker.maze.width; x++) {
            for (var y = 0; y < this.walker.maze.height; y++) {
                if (this.walker.visited[x][y] == 1) {
                    this.walker.context.fillStyle = 'red';
                    this.walker.context.fillRect(x * 10, y * 10, 10, 10);                   
                }
            }
        }
    }   
};


class walkerManager {

    constructor(context, maze) {
        this.context = context;
        this.maze = maze;
        this.position = this.getStartingPoint(this.maze.width, this.maze.height)
        this.lastPosition = {x:-1,y:-1};
        this.visited = this.setVisited(this.maze.width, this.maze.height);
        this.ownedKeys = [];
    }
    

    getStartingPoint(width,height) {

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                if(this.maze.isWalker(x, y)) {
                    return {x,y};
                }
            }
        }

    }

    setVisited(x,y) {
        // Clear array to all zeros.       
        let array = new Array(y).fill(0).map(e => new Array(x).fill(0) );;
        
        // Set starting point.
        array[this.position.x][this.position.y] = 1;

        return array;
    }
    
    draw() {
        this.context.fillStyle = 'rgb(255, 100, 100)';
        this.context.fillRect(this.x * 10, this.y * 10, 10, 10);
    }
    
    move(direction, backtrack) {
        var changed = false;
        oldX = this.x;
        oldY = this.y;
        
        if (backtrack || !this.hasVisited(direction)) {
            // Get the new x,y after moving.
            var point = this.getXYForDirection(direction);

            // Check if this is a valid move.
            if (this.canMove(point.x, point.y)) {
                this.x = point.x;
                this.y = point.y;
                changed = true;
            }
        }
        
        if (changed) {
            this.context.fillStyle = 'rgb(' + (backtrack ? 100 : 255) + ', 0, 0)';
            this.context.fillRect(oldX * 10, oldY * 10, 10, 10);
        
            this.lastX = oldX;
            this.lastY = oldY;
        
            // Mark this tile as visited (possibly twice).
            this.visited[this.x][this.y]++;

            if (backtrack) {
                // We've turned around, so don't visit this last tile again.
                this.visited[this.lastX][this.lastY] = 2;
            }
            
            if (this.visited[oldX][oldY] == 2 && this.visited[this.x][this.y] == 1) {
                // Found an unwalked tile while backtracking. Mark our last tile back to 1 so we can visit it again to exit this path.
                this.visited[oldX][oldY] = 1;
                this.context.fillStyle = 'rgb(255, 0, 0)';
                this.context.fillRect(oldX * 10, oldY * 10, 10, 10);
            }
        }
        
        return changed;
    }
    
    canMove(x, y) {
        return (maze.isOpen(x, y) && this.visited[x][y] < 2);
    }
    
    hasVisited(direction) {
        // Get the new x,y after moving.
        var point = this.getXYForDirection(direction);

        // Check if this point has already been visited.
        return (this.visited[point.x][point.y] > 0);
    }
    
    getXYForDirection(direction) {
        var point = {};

        switch (direction) {
            case 0: point.x = this.x; point.y = this.y - 1; break;
            case 1: point.x = this.x + 1; point.y = this.y; break;
            case 2: point.x = this.x; point.y = this.y + 1; break;
            case 3: point.x = this.x - 1; point.y = this.y; break;
        };
        
        return point;
    }
};

function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}


// class Robot {

//     constructor(map, position, steps = 0) {
//         this.map = map;
//         this.steps = steps;
//         this.position = position;
//         this.ownedKeys = [];
//     }

//     isUpperCase (char) {
//         return char == char.toUpperCase() ? true : false
//     } 

//     ownThatKey (key) {
//         return this.ownedKeys.includes(key.toLowerCase())
//     }

//     oppositeDirection (d) {

//         switch (d) {
//             case 1:
//                 return 3
//                 break;
//             case 2:
//                 return 4
//                 break;
//             case 3:
//                 return 1
//                 break;
//             case 4:
//                 return 2
//                 break;
//         }

//     }

//     move (d) {

//         const {x,y} = this.position;

//         this.map[y][x] = '.'

//         switch (d) {
//             case 1: //UP
//                 this.position.y--
//                 break;
//             case 3: //DOWN
//                 this.position.y++
//                 break;
//             case 4: //LEFT
//                 this.position.x--
//                 break;
//             case 2: //RIGHT
//                 this.position.x++
//                 break;
//         }

//         this.map[this.position.y][this.position.x] = '@'

//     }

//     newDirection() {

//         const {x,y} = this.position;

//         const left = this.map[y][x-1]
//         const right = this.map[y][x+1]
//         const up = this.map[y-1][x]
//         const down = this.map[y+1][x]

//         const directions = [];
       
//         [up, right, down, left].forEach( (dir, i) => {

//             if(dir !== '#' && !this.ownThatKey(dir) ) {
//                 directions.push(i)

//                 if (dir !== '.' && !this.isUpperCase(dir)) {
//                     // key
//                     this.ownedKeys.push(dir)
//                 } 
//             }

//         })
        
//         console.log(directions)

//     }

//     run(ctx) {

//         while(!this.cross && !this.impasse && !this.ObjectFound) {

//             const [output] = this.computer.giveInput([this.direction]).run(1);

//             if (output === 0) {

//                 console.log('wall hitted')

//             } else if(output === 1) {

//                 this.move(this.direction);
//                 this.draw(ctx, "rgba(0, 0, 0, 0.2)")
//                 this.newDirection();

//                 if(this.cross) {
//                    this.draw(ctx, "rgba(255, 0, 255, 0.2)")
//                 }

//                 this.lastDirection = this.direction
                
//             } else if(output === 2) {

//                 this.move(this.direction);
//                 this.draw(ctx, "#FF0000")
//                 this.ObjectFound = true;


//             } else {
//                 console.log('output not known', output)
//             }
              
//             this.steps++

//         }

//         return {
//             program:this.computer.program, 
//             ways:this.ways, 
//             x:this.x, y:this.y, 
//             steps:this.steps, 
//             cross:this.cross,
//             impasse:this.impasse,
//             ObjectFound:this.ObjectFound,
//         }

//     }

// }


const part1 = input => {

    const canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const controller = new mazeController(input, canvas)
    controller.maze.draw();

    return controller.walker.position
}




console.log('part1', part1(puzzle)) // 282

