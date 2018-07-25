import React, {Component} from 'react'

class Msg extends Component {

    state ={
        msgTitle: 'Say Something:',
        msg: ''
    }

    changeHandler = (event) => {
        this.setState({
            msg: event.target.value
        })
    }

    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 offset-sm-2">
                            <h4 className="mb-title my-2">{this.state.msgTitle}</h4>
                            <input  type="text" class="form-control mb-2" onChange={this.changeHandler} value={this.state.msg}/>
                        </div>
                        <div className="col-sm-8 offset-sm-2 my-3">
                            <h5 className="msg-text">{this.state.msg}</h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Msg