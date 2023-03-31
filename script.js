
import { flatMapDepth } from "lodash";

const app = [1,[2,[32],4],4542,453]

// [1,2,32,4,..] ha thanh 1 cap

const newApp = flatMapDepth(app,{},3)

newApp.apply()
Lodas.VERSION
console.log(
    Lodas.VERSION);