import React, { Component } from 'react'
import UserService from '../servicees/UserServices'

class UpdateUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            age: '',
            team: ''
        }
        this.changenameHandler = this.changenameHandler.bind(this);
        this.changeageeHandler = this.changeageeHandler.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    componentDidMount(){
        UserService.getUserById(this.state.id).then( (res) =>{
            let user = res.data;
            this.setState({name: user.name,
                age: user.age,
                team : user.team
            });
        });
    }

    updateUser = (e) => {
        e.preventDefault();
        let user = {name: this.state.name, age: this.state.age, team: this.state.team};
        console.log(JSON.stringify(user));
        console.log(this.state.id);
        UserService.updateUser(user, this.state.id).then( res => {
            this.props.history.push('/users');
        });
    }
    
    changenameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeageeHandler= (event) => {
        this.setState({age: event.target.value});
    }

    changeteamHandler= (event) => {
        this.setState({team: event.target.value});
    }

    cancel(){
        this.props.history.push('/users');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update User</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Name: </label>
                                            <input placeholder="name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changenameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> age: </label>
                                            <input placeholder="age" name="age" className="form-control" 
                                                value={this.state.age} onChange={this.changeageeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> team </label>
                                            <input placeholder="team" name="team" className="form-control" 
                                                value={this.state.team} onChange={this.changeteamHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateUser}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                </div>
            </div>
        )
    }
}

export default UpdateUser