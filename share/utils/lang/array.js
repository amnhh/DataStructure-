"use strict";
exports.__esModule = true;
/**
 * 交换 list 中 idx1 和 idx2 的位置
 * @param list
 * @param idx1
 * @param idx2
 */
exports.swap = function (list, idx1, idx2) {
    var tmp = list[idx1];
    list[idx1] = list[idx2];
    list[idx2] = tmp;
};
/**
 * js 原生 sort 封装，升序
 * @param list
 */
exports.nativeSort = function (list) { return list.sort(function (v1, v2) { return v1 - v2; }); };
/**
 * js 原生 sort 封装，降序
 * @param list
 */
exports.nativeSortReverse = function (list) { return exports.nativeSort(list).reverse(); };
