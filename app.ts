import {testStr} from 'F:/Github/deno-typescript/utils.ts'
// const testStr= require('./utils')
function test(test:string){
    console.log(test)
    return test+' haha deno, you foo'
}
test(testStr)