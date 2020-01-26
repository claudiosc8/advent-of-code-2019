const puzzle = [3,1033,1008,1033,1,1032,1005,1032,31,1008,1033,2,1032,1005,1032,58,1008,1033,3,1032,1005,1032,81,1008,1033,4,1032,1005,1032,104,99,102,1,1034,1039,102,1,1036,1041,1001,1035,-1,1040,1008,1038,0,1043,102,-1,1043,1032,1,1037,1032,1042,1105,1,124,101,0,1034,1039,1001,1036,0,1041,1001,1035,1,1040,1008,1038,0,1043,1,1037,1038,1042,1105,1,124,1001,1034,-1,1039,1008,1036,0,1041,101,0,1035,1040,1002,1038,1,1043,102,1,1037,1042,1106,0,124,1001,1034,1,1039,1008,1036,0,1041,1002,1035,1,1040,101,0,1038,1043,1002,1037,1,1042,1006,1039,217,1006,1040,217,1008,1039,40,1032,1005,1032,217,1008,1040,40,1032,1005,1032,217,1008,1039,35,1032,1006,1032,165,1008,1040,1,1032,1006,1032,165,1101,0,2,1044,1105,1,224,2,1041,1043,1032,1006,1032,179,1101,1,0,1044,1106,0,224,1,1041,1043,1032,1006,1032,217,1,1042,1043,1032,1001,1032,-1,1032,1002,1032,39,1032,1,1032,1039,1032,101,-1,1032,1032,101,252,1032,211,1007,0,71,1044,1105,1,224,1102,0,1,1044,1106,0,224,1006,1044,247,101,0,1039,1034,101,0,1040,1035,101,0,1041,1036,101,0,1043,1038,1001,1042,0,1037,4,1044,1105,1,0,63,79,32,16,21,23,90,91,50,57,98,31,96,21,59,30,88,68,89,15,28,86,14,75,41,29,86,4,80,51,46,48,68,93,74,17,76,18,32,36,80,2,77,80,9,98,38,82,65,93,76,29,23,89,97,13,75,35,2,91,73,86,69,90,9,78,84,6,16,98,97,91,66,41,99,56,35,78,15,85,67,77,55,96,59,20,88,24,80,48,85,79,92,23,68,67,99,98,96,57,20,32,90,20,6,79,33,97,21,58,90,41,83,83,7,64,14,8,92,59,83,13,96,95,51,89,41,72,51,82,60,34,81,56,77,10,4,14,61,74,94,87,3,86,52,84,92,35,88,28,78,17,57,72,85,67,56,82,83,54,89,33,4,84,3,66,45,85,16,22,74,94,75,57,68,80,86,94,18,27,53,90,72,38,95,34,20,99,98,40,95,93,55,46,7,29,87,32,56,21,98,30,88,95,77,24,73,95,14,85,2,66,73,30,85,8,69,78,75,93,4,76,56,51,89,99,51,94,14,72,39,85,96,98,37,37,75,79,61,73,96,4,97,41,92,68,58,76,29,29,78,97,44,73,67,75,85,18,1,2,9,99,10,98,19,11,73,67,86,1,94,35,29,16,99,27,35,76,42,60,99,43,28,74,11,74,91,81,11,13,91,97,75,80,68,51,81,81,77,51,72,75,59,85,62,83,91,9,20,83,57,61,31,94,80,26,52,93,86,87,78,39,46,74,86,55,24,87,95,16,82,49,75,11,73,92,64,69,43,82,41,50,24,98,8,3,73,77,19,49,99,29,96,35,86,82,60,65,36,92,89,84,69,58,95,31,67,84,44,78,24,80,46,48,98,39,94,10,78,89,95,28,82,41,97,88,23,83,67,42,97,44,78,83,28,29,66,94,45,61,37,79,55,79,30,95,45,47,76,18,84,81,93,29,90,90,86,13,86,18,47,86,87,70,1,92,98,16,70,21,54,85,54,29,73,76,80,59,84,92,16,81,87,33,96,86,29,18,84,42,60,94,67,59,89,26,42,91,42,75,58,95,81,82,38,49,85,52,43,93,90,41,88,85,12,37,77,78,95,35,87,35,35,55,92,72,26,76,19,96,19,87,66,97,81,85,58,58,74,39,74,43,51,90,48,77,56,78,16,81,57,34,95,72,18,6,75,16,61,89,56,59,76,35,18,98,76,5,75,11,86,93,51,94,6,76,84,26,82,10,29,95,74,20,74,78,5,63,14,96,84,54,55,75,85,24,95,72,54,49,92,78,22,95,97,58,70,87,28,41,88,25,75,7,29,95,67,32,82,80,81,41,63,69,56,10,81,75,8,18,94,56,67,18,83,56,64,93,84,60,73,95,13,72,4,96,97,40,77,35,62,78,77,35,73,56,99,40,64,60,90,82,86,52,89,17,21,87,84,19,92,81,92,84,81,67,73,9,26,87,2,11,76,31,72,61,89,11,78,83,67,1,64,97,82,12,73,99,81,68,58,77,15,14,31,91,76,58,17,83,45,54,77,40,47,82,40,72,73,95,10,96,29,77,21,92,87,11,55,93,87,84,8,89,51,24,87,38,97,92,48,99,8,49,78,42,91,78,50,87,89,46,80,83,25,11,74,22,81,39,99,53,93,61,93,65,83,80,35,2,85,27,33,95,24,99,86,23,89,9,26,75,66,81,29,75,20,89,8,97,17,73,63,82,73,90,32,92,68,82,59,93,48,78,67,98,34,91,32,82,73,74,2,77,16,90,61,75,30,92,0,0,21,21,1,10,1,0,0,0,0,0,0]

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

// PART 1 


class Robot {

    constructor(program, direction = 1, x = 0, y = 0, steps = 0, history = []) {
        this.computer = new Computer(program);
        this.steps = steps;
        this.direction = direction;
        this.history = history;
        this.x = x;
        this.y = y;
        this.lastDirection = direction;
        this.ObjectFound = false;
        this.unit = 14;
        this.impasse = false;
        this.cross= false;
        this.ways = [];
        this.ObjectFound = false;
        this.minimumSteps;
    }

    oppositeDirection (d) {

        switch (d) {
            case 1:
                return 2
                break;
            case 2:
                return 1
                break;
            case 3:
                return 4
                break;
            case 4:
                return 3
                break;
        }

    }

    move (d) {

        switch (d) {
            case 1:
                this.y--
                break;
            case 2:
                this.y++
                break;
            case 3:
                this.x--
                break;
            case 4:
                this.x++
                break;
        }

        this.history.push([this.x,this.y])

    }

    newDirection() {

        let scan =[];

        for(let a = 1; a <= 4; a++) {
            const [w] = this.computer.clone(a)
            if(w!==0) scan.push(a) 
        }

        scan = scan.filter(e => e !== this.oppositeDirection(this.lastDirection))

        if(scan.length === 1) {
            this.direction = scan[0];
        } else if (scan.length === 0) {
            this.impasse = true;

        } else {
            this.cross = true;
            this.ways = scan;
        }

    }

    draw(ctx, color) {
        ctx.fillStyle = color;


        ctx.fillRect(this.x*this.unit, this.y*this.unit, this.unit, this.unit);

        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth   = 1;
        ctx.strokeRect(this.x*this.unit, this.y*this.unit, this.unit, this.unit);

    }

    run(ctx) {

        while(!this.cross && !this.impasse && !this.ObjectFound) {

            const [output] = this.computer.giveInput([this.direction]).run(1);

            if (output === 0) {
                
                console.log('wall hitted')

            } else if(output === 1) {

                this.move(this.direction);
                this.draw(ctx, "rgba(0, 0, 0, 0.2)")
                this.newDirection();

                // if(this.cross) {

                //     for(let i = 0; i < this.ways.length; i++) {

                //         const robot = new Robot(this.computer.program, this.ways[i], this.x, this.y, this.steps+1, this.history )
                //         const search = robot.run(ctx)

                //         if(robot.ObjectFound) {
                //             console.log(robot.steps)
                //             this.minimumSteps = robot.steps
                //             break;

                //         } 

                //     }
                // }

                this.lastDirection = this.direction
                
            } else if(output === 2) {

                this.move(this.direction);
                this.draw(ctx, "#FF0000")
                console.log('found it',this.x,this.y)
                this.ObjectFound = true;


            } else {
                console.log('output not known', output)
            }
              
            this.steps++

        }

        return {
            program:this.computer.program, 
            ways:this.ways, 
            x:this.x, y:this.y, 
            steps:this.steps+1, 
            history:this.history,
            cross:this.cross,
            impasse:this.impasse,
            ObjectFound:this.ObjectFound,
        }

    }

}

class RunRobot {

    constructor(input, dir, x, y, history = [], ctx) {
        this.robot = new Robot(input, dir, x, y).run(ctx);
        this.history = history;
    }

    run(ctx) {


        let i = 0;
        while(i<11) {

            const {program, ways, x, y, steps, history, cross, impasse, ObjectFound} = this.robot

            let hit = 0;

            for(let w = 0; w < ways.length; w++) {

                const newRobot = new Robot(program, ways[w], x, y, steps, history)
                const output = newRobot.run(ctx);
                
                if(output.cross) {
                    this.robot = output
                }

                if(output.impasse) {
                    hit++
                }

            }
            
            if(hit === ways.length) {
                console.log('ht')
            }

            i++

        }


        return this.robot.steps
    }

}

function part1(input) {

    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight

    const robot = new RunRobot(input,3, 20, 20, [], ctx)
    return robot.run(ctx)
}


console.log('part1', part1(puzzle)) //355
// console.log('part2', part2(puzzle)) //18371
