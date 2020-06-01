"use strict";
exports.__esModule = true;
function HashMapSolution(nums, k) {
    var HashMap = {}, len = nums.length;
    for (var i = 0; i < len; i++) {
        var currentValue = nums[i];
        if ((HashMap[currentValue] || HashMap[currentValue] === 0) && (i - HashMap[currentValue] <= k)) {
            return true;
        }
        else {
            HashMap[currentValue] = i;
        }
    }
    return false;
}
exports["default"] = HashMapSolution;
