import '../styles/globals.css'
import Layout from '../Components/Layout'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { getUsersReducer } from '../Redux/reducers'

const store = createStore(getUsersReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
    <Layout>
    <Component {...pageProps} />
      </Layout>
    </Provider>

  )

  
}

export default MyApp
