import {createStore,combineReducers} from "redux"
import tab from "./reducer/tab"
const reducer=combineReducers({
    tab
})
const store = createStore(reducer)
export default store