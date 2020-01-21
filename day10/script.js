const puzzle = `..............#.#...............#....#....
#.##.......#....#.#..##........#...#......
..#.....#....#..#.#....#.....#.#.##..#..#.
...........##...#...##....#.#.#....#.##..#
....##....#...........#..#....#......#.###
.#...#......#.#.#.#...#....#.##.##......##
#.##....#.....#.....#...####........###...
.####....#.......#...##..#..#......#...#..
...............#...........#..#.#.#.......
........#.........##...#..........#..##...
...#..................#....#....##..#.....
.............#..#.#.........#........#.##.
...#.#....................##..##..........
.....#.#...##..............#...........#..
......#..###.#........#.....#.##.#......#.
#......#.#.....#...........##.#.....#..#.#
.#.............#..#.....##.....###..#..#..
.#...#.....#.....##.#......##....##....#..
.........#.#..##............#..#...#......
..#..##...#.#..#....#..#.#.......#.##.....
#.......#.#....#.#..##.#...#.......#..###.
.#..........#...##.#....#...#.#.........#.
..#.#.......##..#.##..#.......#.###.......
...#....###...#......#..#.....####........
.............#.#..........#....#......#...
#................#..................#.###.
..###.........##...##..##.................
.#.........#.#####..#...##....#...##......
........#.#...#......#.................##.
.##.....#..##.##.#....#....#......#.#....#
.....#...........#.............#.....#....
........#.##.#...#.###.###....#.#......#..
..#...#.......###..#...#.##.....###.....#.
....#.....#..#.....#...#......###...###...
#..##.###...##.....#.....#....#...###..#..
........######.#...............#...#.#...#
...#.....####.##.....##...##..............
###..#......#...............#......#...#..
#..#...#.#........#.#.#...#..#....#.#.####
#..#...#..........##.#.....##........#.#..
........#....#..###..##....#.#.......##..#
.................##............#.......#..`

const array = puzzle.split(/\r?\n/).map(e => e.split(')'));



let asteroids = [] 

array.forEach((row, rowIndex) => {

    return row.toString().split('').forEach((e,i) => {
        if(e === '#') {
            asteroids.push([i,rowIndex])
        }
    } )

})

const calculateDistance = (array) => Math.hypot(array[0], array[1])

// calculate angle clockwise from top 
const calculateAngle = (array) => 90 + (Math.atan2(array[1], array[0]) * 180 / Math.PI);

// PART 1

const findConnection = (asteroids, coordinate) => {

    const relativePosition = asteroids.map(e => [e[0]-coordinate[0], e[1]-coordinate[1] ]
        ).filter(e => JSON.stringify(e) !== JSON.stringify([0,0]) )


    const connections = relativePosition.reduce( (acc, curr ) => {
        const angle = calculateAngle(curr);
        return acc.some(e => calculateAngle(e) === angle ) ? acc : [...acc, curr]

    },[])

    return connections.length


}

const part1 = (asteroids) => {

    return asteroids.reduce( (acc, curr) => {
        const connections = findConnection(asteroids, curr)
        return connections > acc[0] ? [connections, curr] : acc
    }, [0] )

}

// PART 2 

const findOccurrencies = (arr) => {
    var b = [];
    const map = arr.map(e=> e[2])
    for ( var i = 0; i < map.length; i++ ) {
        if ( map[i] !== map[i-1] ) {
            b.push(1);
        } else {
            b[b.length-1]++;
        }
    }

    return b ;
}

const vaporization = (asteroids, goal) => {

    const center = part1(asteroids)[1]

    const relativePosition = asteroids.map(e => [e[0]-center[0], e[1]-center[1] ]
        ).filter(e => JSON.stringify(e) !== JSON.stringify([0,0]) )

    const degrees = relativePosition.map(
        e => [...e, calculateAngle(e) < 0 ? (360 + calculateAngle(e)) : calculateAngle(e)] 
        ).sort(function(a, b){return a[2]-b[2]});
    
    const occ = findOccurrencies(degrees)

    let order = [];
    let d = 0;
    const copy = Object.assign([], degrees)

    while(copy.length !== 0) {
        
        const chunk = copy.splice(0, occ[d]).sort((a, b) => calculateDistance(a) - calculateDistance(b))
        order.push(chunk) 
        d++

    }

    let i = 0;
    let vaporization = [];

    while(vaporization.length < goal){
     
        const index = i % order.length;
        if(order[index].length>0) {
            const item = order[index].shift()
            vaporization.push(item)
        }
        i++

   }

   const absolutePosition = vaporization.map(e => [e[0]+center[0], e[1]+center[1]] )
   const result = absolutePosition[absolutePosition.length - 1]

   return result[0] * 100 + result[1]

}

console.log('part1', part1(asteroids)) // 347, [26,36]
console.log('part2', vaporization(asteroids, 200)) // 829

