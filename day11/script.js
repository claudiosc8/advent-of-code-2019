const puzzle = [3,8,1005,8,325,1106,0,11,0,0,0,104,1,104,0,3,8,102,-1,8,10,1001,10,1,10,4,10,108,0,8,10,4,10,101,0,8,28,2,3,7,10,2,1109,3,10,2,102,0,10,2,1005,12,10,3,8,102,-1,8,10,101,1,10,10,4,10,1008,8,0,10,4,10,101,0,8,67,2,109,12,10,1,1003,15,10,3,8,1002,8,-1,10,1001,10,1,10,4,10,108,1,8,10,4,10,101,0,8,96,3,8,102,-1,8,10,101,1,10,10,4,10,1008,8,0,10,4,10,1002,8,1,119,3,8,102,-1,8,10,1001,10,1,10,4,10,1008,8,0,10,4,10,101,0,8,141,3,8,1002,8,-1,10,101,1,10,10,4,10,108,0,8,10,4,10,1001,8,0,162,1,106,17,10,1006,0,52,1006,0,73,3,8,102,-1,8,10,1001,10,1,10,4,10,108,1,8,10,4,10,1001,8,0,194,1006,0,97,1,1004,6,10,1006,0,32,2,8,20,10,3,8,102,-1,8,10,101,1,10,10,4,10,1008,8,1,10,4,10,102,1,8,231,1,1,15,10,1006,0,21,1,6,17,10,2,1005,8,10,3,8,102,-1,8,10,101,1,10,10,4,10,108,1,8,10,4,10,102,1,8,267,2,1007,10,10,3,8,1002,8,-1,10,1001,10,1,10,4,10,1008,8,1,10,4,10,102,1,8,294,1006,0,74,2,1003,2,10,1,107,1,10,101,1,9,9,1007,9,1042,10,1005,10,15,99,109,647,104,0,104,1,21101,936333018008,0,1,21101,342,0,0,1106,0,446,21102,937121129228,1,1,21101,0,353,0,1105,1,446,3,10,104,0,104,1,3,10,104,0,104,0,3,10,104,0,104,1,3,10,104,0,104,1,3,10,104,0,104,0,3,10,104,0,104,1,21101,0,209383001255,1,21102,400,1,0,1106,0,446,21101,0,28994371675,1,21101,411,0,0,1105,1,446,3,10,104,0,104,0,3,10,104,0,104,0,21101,867961824000,0,1,21101,0,434,0,1106,0,446,21102,1,983925674344,1,21101,0,445,0,1106,0,446,99,109,2,21201,-1,0,1,21102,40,1,2,21101,477,0,3,21102,467,1,0,1106,0,510,109,-2,2106,0,0,0,1,0,0,1,109,2,3,10,204,-1,1001,472,473,488,4,0,1001,472,1,472,108,4,472,10,1006,10,504,1101,0,0,472,109,-2,2106,0,0,0,109,4,1201,-1,0,509,1207,-3,0,10,1006,10,527,21102,1,0,-3,21202,-3,1,1,21201,-2,0,2,21102,1,1,3,21102,1,546,0,1106,0,551,109,-4,2105,1,0,109,5,1207,-3,1,10,1006,10,574,2207,-4,-2,10,1006,10,574,22101,0,-4,-4,1105,1,642,21202,-4,1,1,21201,-3,-1,2,21202,-2,2,3,21101,0,593,0,1105,1,551,22102,1,1,-4,21101,1,0,-1,2207,-4,-2,10,1006,10,612,21102,1,0,-1,22202,-2,-1,-2,2107,0,-3,10,1006,10,634,21201,-1,0,1,21101,634,0,0,105,1,509,21202,-2,-1,-2,22201,-4,-2,-4,109,-5,2106,0,0]


class Computer {
    constructor(program, name ) {
    	this.name = name;
        this.program = program;
        this.inputs = [];
        this.index = 0;
        this.relativeBase = 0;
        this.output = [];
        this.isHalted = false;
    }

    giveInput(input) {
        this.inputs = input
        this.run();
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


    run() {

        while (true) {

            const opcode = Number(this.program[this.index].toString().slice(-2));
            
			const num = this.program[this.index].toString().slice(0, -2).split('').map(Number);;
			const [C = 0, B = 0, A = 0] = num.reverse();

            const a = this.program[this.modes(C, 1)]
            const b = this.program[this.modes(B, 2)]
            const o = (opcode === 3 || opcode === 4) ? this.modes(C, 1) : this.modes(A, 3)

			if(opcode === 1) {
				this.program[o] = a + b;
                this.index += 4; 

			} else if(opcode === 2) {
				this.program[o] = a * b;
                this.index += 4;

			} else if(opcode === 3) {
				if(this.inputs.length === 0) break
                this.program[o] = this.inputs[0];
                this.inputs.shift();
                this.index += 2;
           	
			} else if(opcode === 4) {
                // if(this.output.length === 2) {
                //     this.output = [];
                //     break
                // } 
                this.output = [...this.output, Number(this.program[o])];
                console.log(this.output)
                this.index += 2;
			} else if(opcode === 5) {
				this.index = a !== 0 ? b : this.index+3

			} else if(opcode === 6) {
				this.index = a === 0 ? b : this.index+3

			} else if(opcode === 7) {
				this.program[o] = (a < b) ? 1 : 0;
                this.index += 4;

			} else if(opcode === 8) {
				this.program[o] = (a === b) ? 1 : 0;
                this.index += 4;

			} else if(opcode === 9) {
                this.relativeBase += a
                this.index += 2;

            } else if (opcode === 99) {
				this.isHalted = true;
                break;
			} else {
                console.log(`unknown opcode: ${opcode}`);
            }

        }
    }
}

// PART 1

const part1 = program => {
	
    const computer = new Computer(program, 'PART1');

    let pos = [[0, 0]]
    let orientation = 0;
    let colors = []


    while(pos.length < 8) {

        const copy = Object.assign([], pos)
        copy.pop()
        const last = pos[pos.length - 1];
        const lastColor = copy.find(e => e[0] === last[0] && e[1] === last[1])

        const input =  lastColor ? lastColor[2] : 0;

        

        computer.giveInput( [input] );
        
        // console.log(orientation)

        last[2] = computer.output[0];
        orientation = computer.output[1] === 0 ? orientation-90 : orientation+90
        orientation = orientation < 0 ? (360+orientation) : orientation

        let newPos = [last[0], last[1]]

        if(orientation%360 === 0) {
            newPos = [last[0], last[1] + 1]

        } else if(orientation%360 === 90) {
            newPos = [last[0] + 1, last[1]]

        } else if(orientation%360 === 180) {
            newPos = [last[0], last[1] - 1]

        } else if(orientation%360 === 270) {
            newPos = [last[0] - 1, last[1] ]
        }  

        
        pos.push(newPos) 

    }
    
    const nod = pos.reduce ((acc, curr) => {

        return acc.some(e => e[0] === curr[0] && e[1] === curr[1]) ? acc : [...acc, curr]

    },[])

    return [pos, nod]

}

console.log(part1(puzzle))
// console.log(part2(puzzle))
