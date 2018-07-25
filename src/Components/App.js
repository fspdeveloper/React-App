import React, {Component} from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


import MyApp from './My-App/MyApp'
import Msg from './Msg-Box/MsgBox'
import Counter from './Counter/Count'

class App extends Component {

    render(){
        return(
            <div className="app">
                <MyApp/>
                <br/>
                <hr/>
                <br/>
                <Msg/>
                <br/>
                <hr/>
                <br/>
                <Counter/>
            </div>
        )
    }
}


export default App