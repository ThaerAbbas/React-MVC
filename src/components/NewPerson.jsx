import React from "react";
import { Variables } from "../Variables";



export class NewPerson extends React.Component {

    
  

    constructor(props) {
        super(props)
        
  this.state = {
    Name:"",
    PhoneNumber:""

        };

    }
   
        creatClick(){
            fetch(Variables.API_URL + Variables.ADD_NEW_PERSON,{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                body:JSON.stringify(
                    this.state.Name,
                    this.state.PhoneNumber

                )
            })
                .then(response => response.json())
                .then((result)=>{
                  
                    alert(result);
                },(error)=>{
                    alert('Faild');
                
                })
              
        }

componentDidMount(){
   
   
}
 changName = (e)=>{
    this.setState({Name: e.target.value});
 }
 changPhoneNumber = (e)=>{
    this.setState({PhoneNumber: e.target.value});
 }

render(){
    const{
        Name,
    PhoneNumber
    } =this.state;
       

        return (
            <div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Name</span>
                    <input type="text" className="form-control"
                    value={Name}
                    onChange={this.changName} />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Phone number</span>
                    <input type="text" className="form-control"
                    value={PhoneNumber}
                    onChange={this.changPhoneNumber} />
                </div>
             <button className="btn btn-primary float-start"
             onClick={()=> this.creatClick()}>Creat</button>
            </div>
        );
            
    }
}

