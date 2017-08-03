process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = [];
var result = new Array(3);
const maxWidthCapacity = 1100;
const maxWeightCapacity = 1000;

process.stdin.on('data', function(chunk) {
    input.push(chunk.replace(/\n$/, '').split(" "));
});

process.stdin.on('end', function() {

    input.sort(function(a,b) {
        if (parseInt(a[1]) === parseInt(b[1])) {
            return parseInt(b[2]) - parseInt(a[2]);
        } 
        return parseInt(b[1]) - parseInt(a[1]);
    });

    let containerWidth = 0;
    let containerWeight = 0;
    let containerNo = 0;

    for (var i = 0; i < input.length; i++) {
        let bestWidthCombination = parseInt(input[0][1]);
        result[containerNo] = input[0][0];

        containerWidth = parseInt(input[i][1]);
        containerWeight = parseInt(input[i][2]);

        for (var a = 1; a < input.length; a++) {

            if (a !== i) {
                containerWidth += parseInt(input[a][1]);
                containerWeight += parseInt(input[a][2]);

                if (containerWidth <= maxWidthCapacity && containerWeight <= maxWeightCapacity ) {

                    if (containerWidth > bestWidthCombination) {
                        
                        result[containerNo] += " " + input[a][0];
                        bestWidthCombination = containerWidth;
                    } 
                } else {
                    containerWidth -= parseInt(input[a][1]);
                    containerWeight -= parseInt(input[a][2]);
                    // containerNo++;
                    // break;
                }
            }
        }

        

        console.log("bestCombination: " + bestWidthCombination);
        console.log("A: " + result[0]); 
        console.log("B: " + result[1]); 
        console.log("C: " + result[2]); 
        // containerWidth += input[i][1];
        // containerWeight += input[i][2];
        
        // if (containerWidth > maxWidthCapacity && containerWeight > maxWeightCapacity) {
        //     i++;
        //     result[containerNo].push(input[i][0]);
            
        // } else {
            
        // }

    }

    console.log(input);

    // console.log("A: "+result[0]);
    // console.log("B: "+result[1]);
    // console.log("C: "+result[2]);
});



function calculateEachContainerWeight() {

}