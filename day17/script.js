const puzzle = [1,330,331,332,109,4278,1101,0,1182,16,1102,1485,1,24,102,1,0,570,1006,570,36,102,1,571,0,1001,570,-1,570,1001,24,1,24,1105,1,18,1008,571,0,571,1001,16,1,16,1008,16,1485,570,1006,570,14,21102,1,58,0,1105,1,786,1006,332,62,99,21101,0,333,1,21101,0,73,0,1106,0,579,1101,0,0,572,1102,1,0,573,3,574,101,1,573,573,1007,574,65,570,1005,570,151,107,67,574,570,1005,570,151,1001,574,-64,574,1002,574,-1,574,1001,572,1,572,1007,572,11,570,1006,570,165,101,1182,572,127,1002,574,1,0,3,574,101,1,573,573,1008,574,10,570,1005,570,189,1008,574,44,570,1006,570,158,1105,1,81,21102,340,1,1,1105,1,177,21102,477,1,1,1106,0,177,21102,514,1,1,21101,0,176,0,1105,1,579,99,21102,184,1,0,1105,1,579,4,574,104,10,99,1007,573,22,570,1006,570,165,1002,572,1,1182,21101,0,375,1,21102,1,211,0,1105,1,579,21101,1182,11,1,21101,222,0,0,1106,0,979,21102,1,388,1,21101,0,233,0,1105,1,579,21101,1182,22,1,21101,244,0,0,1106,0,979,21101,401,0,1,21102,1,255,0,1105,1,579,21101,1182,33,1,21101,0,266,0,1106,0,979,21101,414,0,1,21101,277,0,0,1106,0,579,3,575,1008,575,89,570,1008,575,121,575,1,575,570,575,3,574,1008,574,10,570,1006,570,291,104,10,21101,0,1182,1,21102,1,313,0,1105,1,622,1005,575,327,1101,0,1,575,21102,1,327,0,1106,0,786,4,438,99,0,1,1,6,77,97,105,110,58,10,33,10,69,120,112,101,99,116,101,100,32,102,117,110,99,116,105,111,110,32,110,97,109,101,32,98,117,116,32,103,111,116,58,32,0,12,70,117,110,99,116,105,111,110,32,65,58,10,12,70,117,110,99,116,105,111,110,32,66,58,10,12,70,117,110,99,116,105,111,110,32,67,58,10,23,67,111,110,116,105,110,117,111,117,115,32,118,105,100,101,111,32,102,101,101,100,63,10,0,37,10,69,120,112,101,99,116,101,100,32,82,44,32,76,44,32,111,114,32,100,105,115,116,97,110,99,101,32,98,117,116,32,103,111,116,58,32,36,10,69,120,112,101,99,116,101,100,32,99,111,109,109,97,32,111,114,32,110,101,119,108,105,110,101,32,98,117,116,32,103,111,116,58,32,43,10,68,101,102,105,110,105,116,105,111,110,115,32,109,97,121,32,98,101,32,97,116,32,109,111,115,116,32,50,48,32,99,104,97,114,97,99,116,101,114,115,33,10,94,62,118,60,0,1,0,-1,-1,0,1,0,0,0,0,0,0,1,24,26,0,109,4,1201,-3,0,587,20102,1,0,-1,22101,1,-3,-3,21102,1,0,-2,2208,-2,-1,570,1005,570,617,2201,-3,-2,609,4,0,21201,-2,1,-2,1105,1,597,109,-4,2105,1,0,109,5,2102,1,-4,629,21001,0,0,-2,22101,1,-4,-4,21101,0,0,-3,2208,-3,-2,570,1005,570,781,2201,-4,-3,653,20102,1,0,-1,1208,-1,-4,570,1005,570,709,1208,-1,-5,570,1005,570,734,1207,-1,0,570,1005,570,759,1206,-1,774,1001,578,562,684,1,0,576,576,1001,578,566,692,1,0,577,577,21102,1,702,0,1106,0,786,21201,-1,-1,-1,1105,1,676,1001,578,1,578,1008,578,4,570,1006,570,724,1001,578,-4,578,21102,731,1,0,1106,0,786,1105,1,774,1001,578,-1,578,1008,578,-1,570,1006,570,749,1001,578,4,578,21101,0,756,0,1106,0,786,1105,1,774,21202,-1,-11,1,22101,1182,1,1,21101,774,0,0,1106,0,622,21201,-3,1,-3,1105,1,640,109,-5,2106,0,0,109,7,1005,575,802,21002,576,1,-6,21001,577,0,-5,1106,0,814,21101,0,0,-1,21102,0,1,-5,21102,1,0,-6,20208,-6,576,-2,208,-5,577,570,22002,570,-2,-2,21202,-5,57,-3,22201,-6,-3,-3,22101,1485,-3,-3,1202,-3,1,843,1005,0,863,21202,-2,42,-4,22101,46,-4,-4,1206,-2,924,21102,1,1,-1,1105,1,924,1205,-2,873,21101,35,0,-4,1105,1,924,2101,0,-3,878,1008,0,1,570,1006,570,916,1001,374,1,374,1202,-3,1,895,1101,0,2,0,2101,0,-3,902,1001,438,0,438,2202,-6,-5,570,1,570,374,570,1,570,438,438,1001,578,558,922,20101,0,0,-4,1006,575,959,204,-4,22101,1,-6,-6,1208,-6,57,570,1006,570,814,104,10,22101,1,-5,-5,1208,-5,49,570,1006,570,810,104,10,1206,-1,974,99,1206,-1,974,1101,1,0,575,21101,973,0,0,1106,0,786,99,109,-7,2105,1,0,109,6,21102,1,0,-4,21102,0,1,-3,203,-2,22101,1,-3,-3,21208,-2,82,-1,1205,-1,1030,21208,-2,76,-1,1205,-1,1037,21207,-2,48,-1,1205,-1,1124,22107,57,-2,-1,1205,-1,1124,21201,-2,-48,-2,1105,1,1041,21102,-4,1,-2,1106,0,1041,21102,1,-5,-2,21201,-4,1,-4,21207,-4,11,-1,1206,-1,1138,2201,-5,-4,1059,1202,-2,1,0,203,-2,22101,1,-3,-3,21207,-2,48,-1,1205,-1,1107,22107,57,-2,-1,1205,-1,1107,21201,-2,-48,-2,2201,-5,-4,1090,20102,10,0,-1,22201,-2,-1,-2,2201,-5,-4,1103,1202,-2,1,0,1106,0,1060,21208,-2,10,-1,1205,-1,1162,21208,-2,44,-1,1206,-1,1131,1105,1,989,21102,1,439,1,1106,0,1150,21102,1,477,1,1105,1,1150,21102,1,514,1,21102,1,1149,0,1106,0,579,99,21101,0,1157,0,1106,0,579,204,-2,104,10,99,21207,-3,22,-1,1206,-1,1138,1202,-5,1,1176,2101,0,-4,0,109,-6,2106,0,0,14,11,46,1,9,1,46,1,9,1,46,1,9,1,46,1,9,1,46,1,9,1,46,1,9,1,46,1,9,1,44,13,44,1,1,1,54,1,1,1,54,1,1,1,54,1,1,9,46,1,9,1,46,1,9,1,46,1,9,1,46,1,9,1,11,13,22,1,9,1,11,1,11,1,22,1,9,1,11,1,9,11,14,1,9,1,11,1,9,1,1,1,7,1,14,9,1,1,11,1,9,1,1,1,7,1,22,1,1,1,11,1,9,1,1,1,7,1,22,1,1,1,11,1,9,1,1,1,7,1,22,1,1,1,11,1,9,1,1,1,7,1,22,1,1,13,9,1,1,1,7,1,22,1,23,1,1,1,7,1,14,13,19,13,12,1,7,1,25,1,7,1,1,1,12,1,7,1,25,9,1,1,12,1,7,1,35,1,12,1,7,1,35,1,12,1,7,1,35,1,8,13,35,1,8,1,3,1,43,14,43,2,7,1,47,2,7,1,37,9,1,2,7,1,37,1,7,1,1,2,7,1,35,14,7,1,35,1,1,1,7,1,2,1,7,1,35,1,1,1,7,1,2,1,7,1,35,1,1,1,7,1,2,1,7,1,35,1,1,1,7,1,2,1,7,1,35,1,1,1,7,1,2,9,35,1,1,1,7,1,46,1,1,1,7,1,46,11,48,1,44,13,10]

class Computer {

    constructor(program, inputs = []) {
        this.program = [... program];
        this.inputs = inputs;
        this.index = 0;
        this.relativeBase = 0;
        this.isHalted = false;
        this.output = [];
    }

    giveInput(inputs = []) {
        this.inputs = inputs;
        return this;
    }

    modes(param, pos) {

        switch (param) {
              case 0:
                return this.program[this.index+pos]
                break;
              case 1:
                return this.index+pos;
                break;
              case 2:
                 return this.relativeBase + this.program[this.index+pos]
                break;
            }
   
    }

    run(breakAfter = 0) {

        this.output = []; // empty output

        while(!this.isHalted) {

            const opcode = Number(this.program[this.index].toString().slice(-2));

            const num = this.program[this.index].toString().slice(0, -2).split('').map(Number);;
            const [C = 0, B = 0, A = 0] = num.reverse();

            const a = this.program[this.modes(C, 1)]
            const b = this.program[this.modes(B, 2)]
            const o = (opcode === 3 || opcode === 4) ? this.modes(C, 1) : this.modes(A, 3)

            switch (opcode) {
                case 1:
                    this.program[o] = a + b;
                    this.index += 4; 
                    break;
                case 2:
                    this.program[o] = a * b;
                    this.index += 4;
                    break;
                case 3:
                    if(this.inputs.length === 0) break
                    this.program[o] = this.inputs.shift();
                    this.index += 2;
                    break;
                case 4:
                    this.output.push( Number(this.program[o]) );
                    this.index += 2;
                    break;
                case 5:
                    this.index = a !== 0 ? b : this.index+3
                    break;
                case 6:
                    this.index = a === 0 ? b : this.index+3
                    break;
                case 7:
                    this.program[o] = (a < b) ? 1 : 0;
                    this.index += 4;
                    break;
                case 8:
                    this.program[o] = (a === b) ? 1 : 0;
                    this.index += 4;
                    break;
                case 9:
                    this.relativeBase += a
                    this.index += 2;
                    break;
                case 99:
                    this.isHalted = true;
                    break;
                default:
                    console.log(`unknown opcode: ${opcode}`);
                    break;
            }

            // break after that the output lenght is breakAfter
            if (breakAfter > 0 && this.output.length > 0 && this.output.length == breakAfter) {
                break;
            }
        }

        return this.output
    }

    clone(input) {
        const clone = new Computer(this.program)
        return clone.giveInput([input]).run(1)
    }

}

const ascii = input => {

    const ascii = input.map(e => String.fromCharCode(e)).join('').split('\n').map(e => e.split(''))
    return ascii

}

function part1(input) {

    const computer = new Computer(input)
    const output = computer.run();

    let p = ascii(output)

    let intersections = [];

    for(let i = 1; i < p.length-1; i ++) {

        for(let j = 1; j < p[i].length-1; j++) {

            const a = p[i][j]
            const left = p[i][j-1];
            const right = p[i][j+1];
            const up = p[i-1][j]
            const down = p[i+1][j]

            if( [a, left, right, up, down].every(e => e === '#') ) {
                intersections.push([i,j])
            }

        }

    }

    return intersections.reduce( (acc, c) => acc + (c[0] * c[1]), 0 )


}

const draw = input => {

    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    const unit = 10;

    input.forEach((row,i) => {

        row.forEach((item, j) =>{

                ctx.fillStyle = item === '#' ? '#AAAAAA' : item === '^' ? '#FF0000' : '#EEEEEE';

                ctx.fillRect(j*unit, i*unit, unit, unit);

                ctx.strokeStyle = "#FFFFFF";
                ctx.lineWidth   = 1;
                ctx.strokeRect(j*unit, i*unit, unit, unit);

        } )


    })
}

const findPath = p => {

    let x, y;

    for(let i = 1; i < p.length-1; i ++) {

        for(let j = 1; j < p[i].length-1; j++) {

            if( p[i][j] === '^' ) {
                x = j;
                y = i
            }

        }

    }

    let stop = false;
    const path = [];
    let orientation = 0;
    let i = 0;

    while(!stop) {

        const direction = path[path.length-2];
        let left;
        let right;
        let forward;

        switch(orientation) {
            case 0:
                left = p[y][x-1] ? p[y][x-1] : '.'
                right = p[y][x+1] ? p[y][x+1] : '.'
                forward = p[y-1] ? p[y-1][x] : '.'
            break;
            case 90:
                left = p[y-1] ? p[y-1][x] : '.'
                right = p[y+1] ? p[y+1][x] : '.'
                forward = p[y][x+1] ? p[y][x+1] : '.'
            break;
            case 180:
                left = p[y][x+1] ? p[y][x+1] : '.'
                right = p[y][x-1] ? p[y][x-1] : '.'
                forward = p[y+1] ? p[y+1][x] : '.'
            break;
            case 270:
                left = p[y+1] ? p[y+1][x] : '.'
                right = p[y-1] ? p[y-1][x] : '.'
                forward = p[y][x-1] ? p[y][x-1] : '.'
            break;
        }

        if(direction && forward && forward === '#') {

            path[path.length-1]++   

            switch(orientation) {
            case 0:
                y--
            break;
            case 90:
                x++
            break;
            case 180:
                y++
            break;
            case 270:
                x--
            break;
        }

        } else {

            if(left && left === '#') {
                path.push('L',0);
                orientation -= 90;
            } else if (right && right === '#') {
                path.push('R',0)
                orientation += 90;
            } else {
                stop = true;
            }

            orientation = orientation === -90 ? 270 : orientation === 360 ? 0 : orientation
        }

        i++
    }

    


    return path

}


const findRoutine = path => {

    let copy = Object.assign([],path);
    // Adding a comma at the end
    copy.push('')

    let A,B,C;

    const chunk = (path,i) => {

        const chunk = path.slice(0,i).join(',');

        const p = path.join(',').replace(new RegExp(chunk + ",?", "g"), "").split(',');
        
        return [p, chunk]
    }

    for(let i = 2; copy.slice(0,i).join(',').length < 20; i+=2) {

        const [pathA, chunkA] = chunk(copy,i)

        for(let j = 2; pathA.slice(0,j).join(',').length <= 20; j+=2) {

            const [pathB, chunkB] = chunk(pathA,j)

            for(let k = 2; pathB.slice(0,k).join(',').length < 20; k+=2) {

                const [pathC, chunkC] = chunk(pathB,k)

                if(pathC.join('').length === 0) {

                    A = chunkA;
                    B = chunkB;
                    C = chunkC;
                    break;
                }

            }

        }

    }

    const mainroutine = path.join(',').split(A).join('A').split(B).join('B').split(C).join('C')

    const routine = mainroutine + "\n" + A + "\n" + B + "\n" + C + "\n";

    return routine;

}


function part2(input) {
    
    const computer = new Computer(input)
    const output = computer.run();

    let p = ascii(output)
    draw(p);

    const path = findPath(p)

    const routine = findRoutine(path)+"y\n"
    const instructions = routine.split('').map( e => e.charCodeAt(0) )

    input[0] = 2;
    const vacuum = new Computer( input );
    const dust = vacuum.giveInput(instructions).run();

    return dust.pop()

}


console.log('part1', part1(puzzle)) // 10632
console.log('part2', part2(puzzle)) // 1356191

