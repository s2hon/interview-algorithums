var smallerNumbersThanCurrent = function (nums) {
    const sorted = [...nums].sort((a, b) => a - b);
    console.log(sorted);

    console.log(sorted.indexOf(2));
    console.log(sorted.indexOf(8));
    console.log(sorted.indexOf(3));

    return nums.map(num => sorted.indexOf(num));

    [8,1,2,2,3]

    [ 1, 2, 2, 3, 8 ]

    };

console.log(smallerNumbersThanCurrent([8,1,2,2,3]))