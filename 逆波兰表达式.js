/**
 * Created by jane on 31/07/2017.
 * 中缀表达式转换成逆波兰表达式
 * 1 + 5 * 3 + (6 - 2) / 2 - 4
 * 输入['1', '5',  '*', '3', '+', '(', '6',  '-',  '2', ')', '/', '2',  '-', '4']
 * 输出[]
 */



function toPPN(origin) {
    'use strict'
    let ppn = [], operator = [];

    // 遍历中缀表达式转换成的数组
    for (let i = 0; i < origin.length; i++){
        const item = origin[i]
        // 判断该位置上的元素是否为数字
        if (!isNaN(item)){
            // 如果是数字， item推入ppn
            ppn.push(item)
        } else if (item === '(' || operator.length === 0) {
            // 如果是'('或者operator为空数组, item推入operator
            operator.push(item)
        } else if (0){
            
        }
    }




    return ppn
}


function compareOperatorPriority(a, b) {


    
}