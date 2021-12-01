import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userReducer } from './reducers/userReducers'
import { msgReducer } from './reducers/msgReducer'
import { productsReducer } from './reducers/productReducers'
import { loaderReducer } from './reducers/loaderReducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const middleware = [thunk]
const reducer = combineReducers({
    user: userReducer,
    products: productsReducer,
    messagess: msgReducer,
    loader: loaderReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user', 'products']
}



let initialState = {

}



export const store = createStore(persistReducer(persistConfig, reducer), initialState, composeWithDevTools(applyMiddleware(...middleware)))
export const persistor = persistStore(store)

