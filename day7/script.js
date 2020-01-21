const puzzle = [3,8,1001,8,10,8,105,1,0,0,21,30,39,64,81,102,183,264,345,426,99999,3,9,1001,9,2,9,4,9,99,3,9,1002,9,4,9,4,9,99,3,9,1002,9,5,9,101,2,9,9,102,3,9,9,1001,9,2,9,1002,9,2,9,4,9,99,3,9,1002,9,3,9,1001,9,5,9,1002,9,3,9,4,9,99,3,9,102,4,9,9,1001,9,3,9,102,4,9,9,1001,9,5,9,4,9,99,3,9,101,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,1001,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,1,9,9,4,9,3,9,101,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,1,9,4,9,99,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,101,1,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,1001,9,1,9,4,9,3,9,102,2,9,9,4,9,99,3,9,101,1,9,9,4,9,3,9,101,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,1,9,9,4,9,99,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,2,9,4,9,99,3,9,101,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,1001,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,101,1,9,9,4,9,99];
const demo = [3,26,1001,26,-4,26,3,27,1002,27,2,27,1,27,26,27,4,27,1001,28,-1,28,1005,28,6,99,0,0,5]

const Amp = ['A','B','C','D','E'];

const GetDiagnosticCode = (array, FirstInput, SecondInput = 0) => {

	const code = Object.assign([], array); 
	let diagnosticCode;
	let halt = false;
	let nextInput = FirstInput;
	let i = 0;

	while (true) {
		
		const opcode = Number(code[i].toString().slice(-2));
		const num = code[i].toString().slice(0, -2).split('').map(Number);;
		const [C = 0, B = 0, A = 0] = num.reverse();

		const a = C === 0 ? code[code[i+1]] : code[i+1];
		const b = B === 0 ? code[code[i+2]] : code[i+2];

		if(opcode === 1) {
			code[code[i+3]] = a + b;
			i+=4 
		} else if(opcode === 2) {
			code[code[i+3]] = a * b;
			i+=4 
		} else if(opcode === 3) {
			code[code[i+1]] = nextInput;
			nextInput = SecondInput;
			i+=2 
		} else if(opcode === 4) {
			diagnosticCode = code[code[i+1]]
			break;
			i+=2 
		} else if(opcode === 5) {
			i = a !== 0 ? b : i+3
		} else if(opcode === 6) {
			i = a === 0 ? b : i+3
		} else if(opcode === 7) {
			code[code[i+3]] = a < b ? 1 : 0;
			i+=4
		} else if(opcode === 8) {
			code[code[i+3]] = a === b ? 1 : 0;
			i+=4
		} else if (code[i] === 99) {
			halt = true
			break
		}
	  	
	}

	return diagnosticCode

	
}

const recursions =  (array, size) => {
    var result = [];
    array.forEach(function iter(parts) {
        return function (v) {
            var temp = parts.concat(v);
            if (parts.includes(v)) {
                return;
            }
            if (temp.length === size) {
                result.push(temp);
                return;
            }
            array.forEach(iter(temp));
        }
    }([]));
    return result;
}


const FindInputSignal = (array, PhaseSetting) => {

	let InputSignal = 0;
	let i = 0;
	while (i < Amp.length) {
		InputSignal = GetDiagnosticCode(array, PhaseSetting[i], InputSignal)
		i++
	}

	return InputSignal;
}

const FindMaxSignal = (array) => {

	let maxSignal = Number.NEGATIVE_INFINITY;
	let currentPhase;

	recursions([0,1,2,3,4], 5).forEach(PhaseSetting => {

		if(FindInputSignal(array, PhaseSetting) > maxSignal) {
			maxSignal = FindInputSignal(array, PhaseSetting);
			currentPhase = PhaseSetting
		}

	})

	return maxSignal

}

const FindInputSignalLoopMode = (array, PhaseSetting) => {

	let InputSignal = 0;
	let i = 0;

	while (i < 50) {
		const index = i%PhaseSetting.length
		InputSignal = GetDiagnosticCode(array, PhaseSetting[index], InputSignal)
		// console.log(InputSignal)
		i++
	}

	return InputSignal;
}


const FindMaxSignalLoopMode = (array) => {
	
	PhaseSetting = [9,8,7,6,5];
	return FindInputSignalLoopMode(array, PhaseSetting)

}



console.log('result part 1', FindMaxSignal(puzzle)) // 65464

