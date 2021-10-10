import React, { Component } from 'react';
import './App.css';
import { Grid, Col, Row } from 'react-bootstrap';
import Hello from './Components/Hello';
import Header from './Components/Header';
import FoodForm from './Components/FoodForm';
import TableData from './Components/TableData';

class App extends Component {
  constructor() {
    super();
    this.state = {
            text: '',
            isEdit: 0,
            data: [],
             
             total: {price: 0, return_price: 0}
         };
  }
  handleAddPerson(data) {
    const newPerson = {
        id: this.state.data.length + 1,
        country: data[0],
        usedtype: data[1],
        price: data[2],
        return_price: data[3]
    }
    
    let tot_price = this.state.total.price + Number(data[2]);
    let tot_return_price = this.state.total.return_price + Number(data[3]);

    this.setState({data: this.state.data.concat(newPerson)});
    this.setState({total: {price: tot_price, return_price: tot_return_price} });
  }
  handleOnDelete(item) {
      const persons = this.state.data;
      for(var i=0;i < persons.length; i++) {
          if(persons[i].id === item.id) {
              console.log(persons[i].id);
              persons.splice(i, 1);
         for(var j=0;j < persons.length; j++) {
             persons[j].id--;
         }     
          }
      }
      
      let tot_price = this.state.total.price - Number(item.price);
      let tot_return_price = this.state.total.return_price - Number(item.return_price);

      this.setState({data: persons});
      this.setState({total: {price: tot_price, return_price: tot_return_price} });
  }
  
  render() {
    return (
      <div> 
      
      <Hello />
      <Grid>
        <Row className="show-grid">
            <Col xs={12}>        
                <FoodForm {...this.state}
                
                
                onAddPerson={this.handleAddPerson.bind(this)} />
              </Col>
  	</Row>
    </Grid>
      <Grid>
        <Row className="show-grid">
            <Col xs={12}>        
                <TableData {...this.state} 
                
                deletePerson={this.handleOnDelete.bind(this)} />
              </Col>
  	</Row>
    </Grid>
      
      
      </div>
    );
  }
}

export default App;
