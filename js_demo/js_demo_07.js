/**
 * Created by zhengjin on 2018/1/27.
 */

// demo 01, task execution order
let isDemo01Run = false
if (isDemo01Run) {
    (function () {
        console.log('1')

        // async task
        setTimeout(function () {
            console.log('2')
        }, 0)

        // async micro task
        Promise.resolve().then(function () {
            console.log('3')
        }).then(function () {
            console.log('4')
        })

        console.log('5')
    })()
}

// demo 02, object property
let isDemo02Run = false
if (isDemo02Run) {
    (function () {
        let obj1 = {
            data: ['Jan', 'Feb', 'Mar']
        }
        console.log('object1 data:', obj1.data.join(', '))

        let obj2 = {
            data: (() => {
                return ['Jan', 'Feb', 'Mar']
            })()
        }
        console.log('object2 data:', obj2.data.join(', '))

        let obj3 = {
            data () {
                return ['Jan', 'Feb', 'Mar']
            }
        }
        console.log('object3 data:', obj3.data().join(', '))
    })()
}

// demo 03, instance access
let isDemo03Run = false
if (isDemo03Run) {
    (function () {
        inst = {
            count: 1,
            cal: {
                increment (num) {
                    // cannot use this.count
                    inst.count = inst.count + num
                },
                decrement (num) {
                    inst.count = inst.count - num
                }
            }
        }

        inst.cal.increment(5)
        console.log('count:', inst.count)
        inst.cal.decrement(3)
        console.log('count:', inst.count)
    })()
}

// demo 04, es6 operator ...
let isDemo04Run = false
if (isDemo04Run) {
    (function () {
        // #1
        let myAdd = function (x, y, z) {
            return x + y + z
        }
        let tmpArr = [1, 2, 3]
        console.log('results:', myAdd(...tmpArr))

        // #2
        let myFilterOdd = function (...items) {
            return items.filter(item => item % 2 === 0)
        }
        console.log('results', myFilterOdd(1, 2, 3, 4, 5).join(', '))

        // #3, jslint error
        // jshint:
        // https://www.cnblogs.com/tadini/p/5279335.html
        // http://www.htmlhifive.com/conts/web/view/library/JSLint_JSHint
        // let obj1 = { k1: 'value1' }
        // let obj2 = { k2: 'value2' }
        // let tmpObj = {
        //     desc: 'objects combine',
        //     ...obj1,
        //     ...obj2
        // }
        // console.log('results:', JSON.stringify(tmpObj))
    })()
}

// demo 05, reuse object
let isDemo05Run = false
if (isDemo05Run) {
    (function () {
        getDataByType = (dataObj) => {
            if (typeof dataObj.data === 'function') {
                return dataObj.data()
            }
            return dataObj.data
        }

        myPrintData = (dataObj) => {
            let data = getDataByType(dataObj)
            console.log("object:", JSON.stringify(data))
        }

        myAddDataAndPrint = (dataObj) => {
            let data = getDataByType(dataObj)
            data.count++
            console.log("object:", JSON.stringify(data))
        }

        console.log('shared object:')
        sharedDataObj = {
            data: {
                state: "done",
                count: 0
            }
        }
        sharedDataObj.data.count++
        myAddDataAndPrint(sharedDataObj)
        myPrintData(sharedDataObj)

        console.log('non-shared object:')
        nonSharedDataObj = {
            data () {
                return {
                    state: "done",
                    count: 0
                }
            }
        }
        nonSharedDataObj.data().count++
        myAddDataAndPrint(nonSharedDataObj)
        myPrintData(nonSharedDataObj)
    })()
}


console.log(__filename, 'DONE.')
