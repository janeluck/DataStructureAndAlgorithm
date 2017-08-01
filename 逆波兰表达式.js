/**
 * Created by jane on 31/07/2017.
 * todo: lodash， test
 * 中缀表达式转换成逆波兰表达式
 * 1 + 5 * 3 + (6 - 2) / 2 - 4
 * 输入['1', '+', '5',  '*', '3', '+', '(', '6',  '-',  '2', ')', '/', '2',  '-', '4']
 * 输出[]
 */



function toPPN(origin) {
    'use strict'
    let ppn = [], operator = [];
    // 遍历中缀表达式转换成的数组
    for (let i = 0; i < origin.length; i++) {
        const item = origin[i]
        // 判断该位置上的元素是否为数字
        if (!isNaN(item)) {
            // 如果是数字， item推入ppn
            ppn.push(item)
        } else if (item === '(' || operator.length === 0) {
            // 如果是'('或者operator为空数组, item推入operator
            operator.push(item)
        } else if (item === ')') {
            // 如果是')', operator从末尾弹出运算符并推入ppn直到'('
            do {
                ppn.push(operator.pop())
            } while (operator[operator.length - 1] !== '(')
            // operator弹出'('
            operator.pop()
        } else if (!needPop(item, operator[operator.length - 1])) {
            operator.push(item)
        } else {
            while (operator.length && needPop(item, operator[operator.length - 1])) {
                ppn.push(operator.pop())
            }
            operator.push(item)
        }
    }

    while(operator.length){
        ppn.push(operator.pop())
    }

    return ppn
}


function needPop(a, b) {
    // b: operator的尾元素
    if (b === '(') return false
    if ((a === '*' || a === '/') && (b === '+' || b === '-')) return false
    return true

}


console.log(toPPN(['1', '+', '5',  '*', '3', '+', '(', '6',  '-',  '2', ')', '/', '2',  '-', '4']))