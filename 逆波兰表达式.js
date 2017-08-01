/**
 * Created by jane on 31/07/2017.
 * todo: test
 * 四则运算中缀表达式转换成逆波兰表达式
 * 1 + 5 * 3 + (6 - 2) / 2 - 4
 * 输入['1', '+', '5',  '*', '3', '+', '(', '6',  '-',  '2', ')', '/', '2',  '-', '4']
 * 输出[]
 */

function toPPN(origin) {
    'use strict'
    if (Object.prototype.toString.call(origin) !== '[object Array]') {
        console.error('非法输入, 请输入格式正确的中缀表达式数组')
        return []
    }
    let ppn = [], operator = [];
    // 遍历中缀表达式转换成的数组
    for (let i = 0; i < origin.length; i++) {
        const item = origin[i]
        // 校验原始输入的元素是否符合要求
        if (isNaN(item) && (['+', '-', '*', '-', '(', ')']).indexOf(item) < 0){
            console.error('中缀表达式的组成元素不符合规则, 请检查修正')
            return []
        }

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
            // 比较运算符的优先级, 如果item低于operator栈顶符号优先级, operator弹出尾元素并推入到ppn
            while (operator.length && needPop(item, operator[operator.length - 1])) {
                ppn.push(operator.pop())
            }

            operator.push(item)
        }
    }

    // 最后, 逐次弹出operator尾元素入栈到ppn
    while (operator.length) {
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


console.log(toPPN([1, 'sda']))