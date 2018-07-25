import React, {Component} from 'react'

class MyApp extends Component {

    state = {
        welcomeTitle: 'React Awesome!',

        Name: 'User Name',
        userName: 'Sujon',
        Phone: 'Phone Number',
        userPhone: '01786717240', 
        activeValue: 'en',

        buttonName: 'English'
    }

    btnclickHandeler = () => {

        if (this.state.activeValue === 'en') {
            this.setState({
                welcomeTitle: 'রিয়াক্ট অসাধারণ !',

                Name: 'ব্যবহারকারীর নাম',
                userName: 'সুজন',
                Phone: 'মোবাইল নাম্বার',
                userPhone: '০১৭৮৬৭১৭২৪০',
                activeValue: 'bd',

                buttonName: 'বাংলা'

            })
        } else if (this.state.activeValue === 'bd') {
            this.setState({
                welcomeTitle: 'React Awesome!',

                Name: 'User Name',
                userName: 'Sujon',
                Phone: 'Phone Number',
                userPhone: '01786717240',
                activeValue: 'en',

                buttonName: 'English'
            })
        }

    }

    render(){
        return(
            <div>
                <h1>{this.state.welcomeTitle}</h1>
                <hr/>
                <p><strong>{this.state.Name}:</strong> {this.state.userName}</p>
                <p><strong>{this.state.Phone}:</strong>  {this.state.userPhone}</p>
                <button type="button" class="btn btn-primary" onClick={this.btnclickHandeler}>{this.state.buttonName}</button>
            </div>
        )
    }
}


export default MyApp