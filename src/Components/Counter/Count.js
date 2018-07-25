import React, {Component} from 'react'

class Counter extends Component {

    state = {
        count: 0
    }

    decrementHandeler = () => {
        if (this.state.count >-0) {
            this.setState({
                count: this.state.count -1,
                msg: 'Decrement...'
            })
        } else{
            this.setState({
                msg:'You Can\'t Be Less Than 0 '
            })
        }
    }

    incrementHandeler = () => {
        if (this.state.count < +10) {
            this.setState({
                count: this.state.count +1,
                msg: 'Increment...'
            })
        } else {
            this.setState({
                msg:'You Can\'t Be More Than 10'
            })
        }
    }

    render(){
        return(
          
            <div>
                <div className="container py-3">
                    <div className="row">
                    <div className="col-sm-3 offset-sm-0">
                        <button type="submit" class="btn btn-outline-danger btn-lg" onClick={this.decrementHandeler}> - </button>
                    </div>
                    <div className="col-sm-6 offset-sm-0">
                        <button type="button" class="btn btn-outline-warning btn-lg btn-block"><b>{this.state.count}</b></button>
                        <br/>
                        <p className="msg">{this.state.msg}</p>
                    </div>
                    <div className="col-sm-3 offset-sm-0">
                        <button type="submit" class="btn btn-outline-success btn-lg" onClick={this.incrementHandeler}> + </button>
                    </div>
                </div>
            </div>
        </div>
            
        )
    }
}

export default Counter