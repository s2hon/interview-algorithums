//a+b=c

let nums = [2,7,11,15]
let target = 9
//output [0,1] since 2+7=9

var twoSum = function(nums, target) {
    for (let i=0; nums.length < i; i++) {
        if (target !== nums[i] && target - nums[i]> 0) {
            let num1 = target - nums[i]
            console.log(num1)
            for (let j=0; nums.length < j; j++) {
                if (num1 === nums[j]){
                    return [indexof(num1), indexof(nums[j])]
                }
            }
        }
    }
};

twoSum ();