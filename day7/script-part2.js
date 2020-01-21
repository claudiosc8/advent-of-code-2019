const puzzle = [3,8,1001,8,10,8,105,1,0,0,21,30,39,64,81,102,183,264,345,426,99999,3,9,1001,9,2,9,4,9,99,3,9,1002,9,4,9,4,9,99,3,9,1002,9,5,9,101,2,9,9,102,3,9,9,1001,9,2,9,1002,9,2,9,4,9,99,3,9,1002,9,3,9,1001,9,5,9,1002,9,3,9,4,9,99,3,9,102,4,9,9,1001,9,3,9,102,4,9,9,1001,9,5,9,4,9,99,3,9,101,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,1001,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,1,9,9,4,9,3,9,101,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,1,9,4,9,99,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,101,1,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,1001,9,1,9,4,9,3,9,102,2,9,9,4,9,99,3,9,101,1,9,9,4,9,3,9,101,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,1,9,9,4,9,99,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,2,9,4,9,99,3,9,101,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,1001,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,101,1,9,9,4,9,99];
const demo = [3,26,1001,26,-4,26,3,27,1002,27,2,27,1,27,26,27,4,27,1001,28,-1,28,1005,28,6,99,0,0,5]

const demo2 = [3,52,1001,52,-5,52,3,53,1,52,56,54,1007,54,5,55,1005,55,26,1001,54,-5,54,1105,1,12,1,53,54,53,1008,54,0,55,1001,55,1,55,2,53,55,53,4,53,1001,56,-1,56,1005,56,6,99,0,0,0,0,10]

const Amp = ['A','B','C','D','E'];


class Computer {
    constructor(program, name ) {
    	this.name = name;
        this.program = program;
        this.inputs = [];
        // this.first = startingInputs[0]
        // this.second = startingInputs[1]
        this.index = 0;
        this.output = null;
        this.isHalted = false;
    }

    giveInput(input) {
        this.inputs = input
        this.run();
    }

     modes(param, pos) {

        switch (param) {
              case 0:
                return this.program[this.program[this.index+pos]]
                break;
              case 1:
                return this.program[this.index+pos];
                break;
              case 2:
                 return this.program[this.relativeBase + this.program[this.index+pos]]
                break;
            }
   
    }


    run() {

        while (true) {

            const opcode = Number(this.program[this.index].toString().slice(-2));
            
			const num = this.program[this.index].toString().slice(0, -2).split('').map(Number);;
			const [C = 0, B = 0, A = 0] = num.reverse();

			const a = this.modes(C, 1)
            const b = this.modes(B, 2)
			const o = opcode === 3 || opcode === 4 ? this.program[this.index+1] : this.program[this.index+3]

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
                this.output = this.program[o];
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

			} else if (opcode === 99) {
				this.isHalted = true;
                break;
			}

        }
    }
}

const recursions =  (array, size) => {
    var result = [];
    array.forEach(function iter(parts) {
        return (v) => {
            let temp = parts.concat(v);
            if (parts.includes(v)) return;
            
            if (temp.length === size) {
                result.push(temp);
                return;
            }
            array.forEach(iter(temp));
        }
    }([]));
    return result;
}

// PART 1

const SingleSignal = (PhaseSetting, program) => {
	
	let inputSignal = 0;
    let i = 0;
	while (i < PhaseSetting.length) {

        const computer = new Computer(program, Amp[i]);
        computer.giveInput( [PhaseSetting[i], inputSignal] );
        inputSignal = computer.output;

        i++
    }

    return inputSignal

}

const FindMaxSignal = program => {

    let max = Number.NEGATIVE_INFINITY;
    let PhaseSettingsCombinations = recursions([0, 1, 2, 3, 4], 5);

    for (const PhaseSetting of PhaseSettingsCombinations) {

		const result = 	SingleSignal(PhaseSetting, program) 
     	max = result > max ? result : max

    }

    return max;
};


// PART 2

const SingleLoopFeedback = (PhaseSetting, program) => {
	
	const amplifiers = Amp.map((name, i) => new Computer(Object.assign([], program), name) )

	// start the first round of Amplifiers with the phase setting input
	amplifiers.forEach((e,i) => e.giveInput( [ PhaseSetting[i] ] ) )


	// continue running the amplifiers with the output signal with the previous amplifier's output
	let InputSignal = 0;

	let i = 0;
    const lastAmplifier = amplifiers[amplifiers.length - 1];

   	// continue the loop until the Amp E is halted
    while (!lastAmplifier.isHalted) {

    	const index = i%amplifiers.length;

        amplifiers[index].giveInput( [ InputSignal ] )
        InputSignal = amplifiers[index].output;
        i++;

    }

    return lastAmplifier.output

}

const FindMaxSignalLoopFeedback = program => {

    let max = Number.NEGATIVE_INFINITY;
    let PhaseSettingsCombinations = recursions([5, 6, 7, 8, 9], 5);

    for (const PhaseSetting of PhaseSettingsCombinations) {

    	const result = 	SingleLoopFeedback(PhaseSetting, program) 
     	max = result > max ? result : max
        
    }

    return max;
};


console.log(FindMaxSignal(puzzle) )
console.log(FindMaxSignalLoopFeedback(puzzle))
