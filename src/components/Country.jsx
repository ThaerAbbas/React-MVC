import React from "react";
import { Variables } from "../Variables";


export class Country extends React.Component {

    
  

    constructor(props) {
        super(props)
        
  this.state = {
    country:[]
        };

    }
   
        refreshList(){
            fetch(Variables.API_URL + Variables.COUNTRY)
                .then(response => response.json())
                .then(data => {
                    this.setState({ country : data.lisCountry });
                    console.log("===========data============");
                    console.log( this.state);
                });
        }

componentDidMount(){
    this.refreshList();
   
}

render(){
    const{
        country
    } =this.state;
       
    console.log("===========person============");
    console.log( country);
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                        
                            
                        </tr>
                    </thead>
                    <tbody>
                  
                      {  country.map((per,index) => (
                        
                        <tr key={index}>
                            <td>{per.id}</td>
                            <td>{per.name}</td>
                         
                         
                        </tr>
                       )) } 
                    </tbody>
                </table>
            </div>
        );
            
    }
}

