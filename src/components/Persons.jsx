import React from "react";
import { Variables } from "../Variables";
import {Link } from 'react-router-dom';




export class Persons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      person: [],
      modalTitel: "",
      details: "",
      idPerson: 0,
      name: "",
      phoneNumber: "",
      languages: "",
      cityName: "",
      countryName: "",
      nameFilter:"",
     
      personAfterFilter:[]
  
    };
  }


  
  refreshList() {
    fetch(Variables.API_URL + Variables.PERSONS)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ person: data.listPersons,personAfterFilter:data });
        console.log("===========data============");
        console.log(this.state);
      });
  }

  Delete(idPerson){
    fetch(Variables.DELETE + idPerson, {

      method: "DELETE",
      headars: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    
    })
    .then((response) => {
      return response.json();
    })
      .then((result)=>{
                  
        alert('deleted successful',result);
        this.refreshList();
    },(error)=>{
        alert('Faild',error);
    
    })
  }

  DetailsList(idPerson) {
    fetch(Variables.API_URL + Variables.BY_ID + idPerson, {
      method: "POST",
      hedar: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          idPerson: data.idPerson,
          name: data.name,
          phoneNumber: data.phoneNumber,
          languages: data.languages,
          cityName:data.cityName,
          countryName : data.countryName
        
        });
        console.log("===========details============");
        console.log(data);
      });
  }

  componentDidMount() {
    this.refreshList();
    this.DetailsList();
   
  }

  detailsClick(per) {
    this.setState({
      modalTitel: "Details",
    });
    this.DetailsList(per.personId);
  }

  deleteClick(per) {
    this.Delete(per.personId);
  }



  filterFn(){
    var nameFilter = this.state.nameFilter;
    var filerData = this.state.personAfterFilter.filter(
      function(el){
        return el.name.toString().toLowerCase().includes(
          nameFilter.toString().trim().toString()
        )
      }
    ); 
    this.state.person = filerData;
  }

  SershBar = (e)=>{
    this.state.nameFilter = e.target.value;
    this.filterFn();
  }

  render() {
  
    const {
      person,
      modalTitel,
      details,
      idPerson,
      name,
      phoneNumber,
      languages,
      cityName,
      countryName
    } = this.state;
   
 
  
    

    console.log("===========person============");
    console.log(person);
    console.log("===========details============");
    console.log(details);
    return (
      <div>
       <input className="form-control m-2"
       onChange={this.SershBar}
       placeholder="Filter by name..."/>
     
     <div className="col text-start">
     <Link className="btn btn-info link-light" to = "/NewPerson">
    Add new Person
    </Link>
    </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">PhoneNumber</th>
              <th scope="col">cityId</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {person.map((per, index) => (
              <tr key={index}>
                <td>{per.personId}</td>
                <td>{per.name}</td>
                <td>{per.phoneNumber}</td>
                <td>{per.cityId}</td>
                <button
                  className="btn btn-light btn_outline-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModel"
                  onClick={() => this.detailsClick(per)}
                >
                  Details
                </button>
                <button  
                    className="btn btn-light btn_outline-primary"
                  onClick={() => this.deleteClick(per)}
                >
                  Delete
                </button>
              </tr>
            ))}
          </tbody>
        </table>

        <div id="exampleModel" class="modal" tabindex="-1">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">{modalTitel}</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">City</th>
                        <th scope="col">Country</th>
                        <th scope="col">Language</th>
                       
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{idPerson}</td>
                        <td>{name}</td>
                        <td>{phoneNumber}</td>
                        <td>{cityName}</td>
                        <td>{countryName}</td>
                        <td>{languages}</td>
                      
                          
                 
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

