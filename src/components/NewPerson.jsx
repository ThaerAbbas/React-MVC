import React from "react";
import { Variables } from "../Variables";



export class NewPerson extends React.Component {

    
  

    constructor(props) {
        super(props)
        
  this.state = {
    name:"",
    PhoneNumber:""

        };

    }
   
        creatClick(){
            
            fetch(Variables.ADD_NEW_PERSON,{
                method: "POST",
                headars: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                body: JSON.stringify({
                    name:   this.state.name,
                    PhoneNumber:  this.state.PhoneNumber
                })
                 
            })
                .then(response => response.json())
                .then((result)=>{
                  
                    console.log('add person with succses',result);
                },(error)=>{
                    console.log('Faild',error);
                
                })
              
        }

componentDidMount(){
   
   
}
 changName = (e)=>{
    this.setState({name: e.target.value});
 }
 changPhoneNumber = (e)=>{
    this.setState({PhoneNumber: e.target.value});
 }

render(){
    const{
        name,
        PhoneNumber
    } =this.state;
       

        return (
            <div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Name</span>
                    <input type="text" className="form-control"
                    value={name}
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

