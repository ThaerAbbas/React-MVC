import React from "react";
import { Variables } from "../Variables";


export class Persons extends React.Component {

    
  

    constructor(props) {
        super(props)
        
  this.state = {
             person:[]
        };

    }
   
        refreshList(){
            fetch(Variables.API_URL + 'api/Persons/GetPersons')
                .then(response => response.json())
                .then(data => {
                    this.setState({ person : data.listPersons });
                    console.log("===========data============");
                    console.log( this.state);
                });
        }

componentDidMount(){
    this.refreshList();
   
}

render(){
    const{
        person
    } =this.state;
       
    console.log("===========person============");
    console.log( person);
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">PhoneNumber</th>
                            <th scope="col">cityId</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                  
                      {  person.map((per,index) => (
                        
                        <tr key={index}>
                            <td>{per.personId}</td>
                            <td>{per.name}</td>
                            <td>{per.phoneNumber}</td>
                            <td>{per.cityId}</td>
                         
                        </tr>
                       )) } 
                    </tbody>
                </table>
            </div>
        );
            
    }
}
//export default Persons;
