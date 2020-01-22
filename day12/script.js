const puzzle = `<x=16, y=-11, z=2>
<x=0, y=-4, z=7>
<x=6, y=4, z=-10>
<x=-3, y=-2, z=-4>`

const demo1 = `<x=-1, y=0, z=2>
<x=2, y=-10, z=-7>
<x=4, y=-8, z=8>
<x=3, y=5, z=-1>`

const demo2 = `<x=-8, y=-10, z=0>
<x=5, y=5, z=10>
<x=2, y=-7, z=3>
<x=9, y=-8, z=-3>`

const setup = puzzle => {

    const array = puzzle.split(/\r?\n/)
    const pos = array.map(e => e.replace(/[^\d.-]/g, ' ').split(' ').filter(e => e.length>0).map(Number)  ) 
    const vel = pos.map(e => e.map(i => 0))
    
    return {pos, vel}

}

const step = input => {

    const {pos, vel} = input;
    const axes = [pos.map(e => e[0]), pos.map(e => e[1]), pos.map(e => e[2]) ]

    axes.forEach((axis,i) => {

        axis.forEach((e,j) => {

            for(let k = j+1; k < vel.length; k++) {

                if(e > axis[k]) {
                    vel[j][i]--
                    vel[k][i]++

                } else if (e < axis[k]) {
                    vel[j][i]++
                    vel[k][i]--
                }
            }

        })

    })   

    const newPos = pos.map((e,i) => e.map((a,j) => a + vel[i][j] ) )

    return {pos: newPos, vel}

}

const part1 = (input, count) => {

    const puzzle = setup(input)

    let lastStep = Object.assign({}, puzzle)

    let i = 0;

    while(i<count) {
        
        lastStep = step(lastStep)
        i++

    }

    const potentialEnergy = lastStep.pos.map(e => e.reduce( (acc, c) => acc + Math.abs(c),0 ) )
    const kineticEnergy = lastStep.vel.map(e => e.reduce( (acc, c) => acc + Math.abs(c),0 ) )

    const totalEnergy = potentialEnergy.map((e,i) => e * kineticEnergy[i])
    const sumTotalEnergy = totalEnergy.reduce( (acc, c) => acc + c, 0)

    return sumTotalEnergy



}

// calculate LCM

const gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
};

const lcm = (a, b) => {
    if (b === 0) return 0;
    return (a * b) / gcd(a, b);
};


// PART 2

const part2 = input => {

    const puzzle = setup(input)

    let lastStep = Object.assign({}, puzzle)

    let i = 1;

    let x,y,z;

    while(!x || !y || !z ) {
        
        lastStep = step(lastStep)
        i++

        if( lastStep.pos.every((e,i) => e[0] === puzzle.pos[i][0] ) && !x ) x = i 

        if( lastStep.pos.every((e,i) => e[1] === puzzle.pos[i][1] ) && !y ) y = i 

        if( lastStep.pos.every((e,i) => e[2] === puzzle.pos[i][2] ) && !z ) z = i
        
    }

    if(x && y && z) {
        return lcm(lcm(x,y),z)
    }

    return 'something went wrong'

}


console.log('part1', part1(puzzle, 1000) ) // 10055
console.log('part2', part2(puzzle) )

