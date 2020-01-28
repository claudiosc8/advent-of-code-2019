const puzzle = `59796737047664322543488505082147966997246465580805791578417462788780740484409625674676660947541571448910007002821454068945653911486140823168233915285229075374000888029977800341663586046622003620770361738270014246730936046471831804308263177331723460787712423587453725840042234550299991238029307205348958992794024402253747340630378944672300874691478631846617861255015770298699407254311889484508545861264449878984624330324228278057377313029802505376260196904213746281830214352337622013473019245081834854781277565706545720492282616488950731291974328672252657631353765496979142830459889682475397686651923318015627694176893643969864689257620026916615305397`

const demo = '12345678'
const demo1 = `80871224585914546619083218645595`
const demo2 = `19617804207202209144916044189917`
const demo3 = `69317163492948606335995924319873`
const demo4 = `03036732577212944063491565474664`


const FFTCopy = (input, offset = 0) => {

    const BasePattern = [0,1,0,-1]
    let InputSignal = input

    let phase = 0

    while (phase<100) {
      
      const nextInput = InputSignal.reduce((acc,o,i) => {

        let newPattern = BasePattern.map(e => Array(1+i).fill(e) ).flat()
        // move the first digit at the end
        newPattern.push(newPattern.shift())

        const r = InputSignal.reduce((acc, e, i) => acc + e * newPattern[i % newPattern.length] ,0 )

        //Get last digit
        const digit = Math.abs(r)%10
        return [...acc, digit]

      }, []).map(Number)
      
      InputSignal = nextInput
      phase++
      
    }
     //Get first 8 digits
    return InputSignal.slice(offset,offset+8).join('')


}

const FFT = (input, offset = 0) => {

    const BasePattern = [0,1,0,-1]
    let InputSignal = input

    let phase = 0

    // 4,8,2,2,6,1,5,8,

    while (phase<100) {
      
      const nextInput = InputSignal.reduce((acc,o,i) => {

        let sum = 0;

        // const r = InputSignal.reduce((acc, e, i) => acc + e * newPattern[i % newPattern.length] ,0 )

        for(let a = i; a < InputSignal.length; a+=1/i) {
            // sum+=InputSignal.reduce((t,e) => t + e*BasePattern[a],0 )
            console.log(Math.floor(a))
        }

        //Get last digit
        // const digit = Math.abs(r)%10
        // return [...acc, digit]

      }, []).map(Number)
      
      InputSignal = nextInput
      phase++
      
    }
     //Get first 8 digits
    return InputSignal.slice(offset,offset+8).join('')


}

const part1 = (input) => {

    console.time('time')

    let InputSignal = input.split('').map(Number)
    const result = FFT(InputSignal)

    console.timeEnd('time')
    return result

}


const part2 = (input) => {

    const times = 10000;
    let InputSignal = input.repeat(times).split('').map(Number);

    const offset = Number( input.slice(0,7) );

    const a = InputSignal.slice(offset)

    return FFT(a)

}


console.log('part 1', part1(demo) ) //94960436  //12779.2919921875ms



