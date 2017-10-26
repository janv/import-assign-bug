// import m = require('./m') // index.ts(1,1): error TS1202: Import assignment cannot be used when targeting ECMAScript modules. Consider using 'import * as ns from "mod"', 'import {a} from "mod"', 'import d from "mod"', or another module format instead.
import * as m from 'm' // index.ts(2,20): error TS2497: Module '"/Users/jan/development/tstest2/m"' resolves to a non-module entity and cannot be imported using this construct.

m('123')