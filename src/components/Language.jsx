import React from "react";
import { Variables } from "../Variables";


export class Language extends React.Component {

    
  

    constructor(props) {
        super(props)
        
  this.state = {
    language:[]
        };

    }
   
        refreshList(){
            fetch(Variables.API_URL + Variables.LANGUAGE)
                .then(response => response.json())
                .then(data => {
                    this.setState({ language : data.lisLanguage });
                    console.log("===========data============");
                    console.log( this.state);
                });
        }

componentDidMount(){
    this.refreshList();
   
}

render(){
    const{
        language
    } =this.state;
       
    console.log("===========person============");
    console.log( language);
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">personId</th>
                           
                            
                        </tr>
                    </thead>
                    <tbody>
                  
                      {  language.map((per,index) => (
                        
                        <tr key={index}>
                            <td>{per.langId}</td>
                            <td>{per.name}</td>
                            <td>{per.personId}</td>
                         
                         
                        </tr>
                       )) } 
                    </tbody>
                </table>
            </div>
        );
            
    }
}

