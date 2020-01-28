const puzzle = `59796737047664322543488505082147966997246465580805791578417462788780740484409625674676660947541571448910007002821454068945653911486140823168233915285229075374000888029977800341663586046622003620770361738270014246730936046471831804308263177331723460787712423587453725840042234550299991238029307205348958992794024402253747340630378944672300874691478631846617861255015770298699407254311889484508545861264449878984624330324228278057377313029802505376260196904213746281830214352337622013473019245081834854781277565706545720492282616488950731291974328672252657631353765496979142830459889682475397686651923318015627694176893643969864689257620026916615305397`

const demo = '12345678'
const demo1 = `80871224585914546619083218645595`
const demo2 = `19617804207202209144916044189917`
const demo3 = `69317163492948606335995924319873`
const demo4 = `03036732577212944063491565474664`
const demo5 = `02935109699940807407585447034323`



const FFT = (input, offset = 0) => {

    const BasePattern = [0,1,0,-1]
    let InputSignal = input

    let phase = 0

    while (phase<100) {
      
      InputSignal = InputSignal.reduce((acc,o,i) => {

        let sum = 0;
        let index = 0;
        let d = 1;

        for(let a = 0; a < InputSignal.length; a++) {

            if(d%(i+1) === 0) {
              d = 1;
              index++
            } else {
              d++
            }

            if (index%4 === 1) {
              sum+=InputSignal[a]
            } else if (index%4 ===3) {
              sum-=InputSignal[a]
            }

        }
       
        // Get last digit
        const digit = Math.abs(sum)%10
        return [...acc, digit]

      }, []).map(Number)
      
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
    let a = input.repeat(times).split('').map(Number);

    const offset = Number( input.slice(0,7) );

    for(let i = 0; i<100; i++) {
        
        for(let i = a.length - 1; i>0; i--){
          a[i] = (a[i] + (a[i+1] || 0)) % 10
        }

    }

    return a.slice(offset, offset+8).join('')

}


console.log('part 1', part1(puzzle) ) //94960436  //457.925048828125ms
console.log('part 2', part2(puzzle) ) // 57762756


