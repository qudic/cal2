import React, { Component } from 'react';
import { Form, FormControl, Button, Table} from 'react-bootstrap';
//import Select from 'react-select';

class FoodForm extends Component {

  countrys = [
    {name: '네델란드', value: '네델란드'}, 
    {name: '노르웨이', value: '노르웨이'},
    {name: '독일', value: '독일'},
    {name: '덴마크', value: '덴마크'},
    {name: '룩셈부르크', value: '룩셈부르크'},
    {name: '모나코', value: '모나코'},
    {name: '몰타', value: '몰타'},
    {name: '벨기에', value: '벨기에'},
    {name: '불가리아', value: '불가리아'},
    {name: '스웨덴', value: '스웨덴'},
    {name: '슬로베니아', value: '슬로베니아'},
    {name: '아이슬란드', value: '아이슬란드'},
    {name: '아일랜드', value: '아일랜드'},
    {name: '영국', value: '영국'},
    {name: '오스트리아', value: '오스트리아'},
    {name: '프랑스', value: '프랑스'},
    {name: '핀란드', value: '핀란드'},
  ]

  usedtypes = [ 
    {name: '호텔', value: '호텔'}, 
    {name: '식당', value: '식당'},
    {name: '엔터', value: '엔터'},
    {name: '전시회', value: '전시회'},
    {name: '교육/세미타', value: '교육/세미나'},
    {name: '대중교통', value: '대중교통'},
    {name: '택시', value: '택시'},
    {name: '렌터카', value: '렌터카'},
    {name: '유류대', value: '유류대'}
  ]

  rates = [
    [6,0,0,21,21,9,9,21,0],
    [12,0,0,25,25,12,12,0,0],
    [7,19,19,19,19,19,19,19,0],
    [25,25,0,25,25,0,0,0,0],
    [3,3,17,17,17,3,3,17,17],
    [5.5,10,0,20,20,0,0,0,0],
    [7,18,0,18,18,0,0,0,0],
    [6,0,0,21,21,6,6,15.5,0],
    [9,20,0,20,20,20,0,0,20],
    [25,10,25,25,25,6,12,12.5,25],
    [0,0,0,22,22,9.5,12,0,0],
    [11,0,0,24,24,0,0,0,0],
    [9,0,0,23,23,0,0,0,0],
    [20,20,20,20,20,0,0,20,20],
    [10,10,0,20,20,10,20,20,0],
    [10,10,0,20,20,0,0,0,20],
    [10,0,0,24,24,0,10,24,20]
  ]

  

  
  addPerson(e) {

    let x = 0, y = 0;
    
    if (this.country.value === '네델란드')
      x = 0;
    else if (this.country.value === '노르웨이')
      x = 1;
    else if (this.country.value === '독일')
      x = 2;  
      else if (this.country.value === '덴마크')
      x = 3;  
      else if (this.country.value === '룩셈부르크')
      x = 4;  
      else if (this.country.value === '모나코')
      x = 5;  
      else if (this.country.value === '몰타')
      x = 6;  
      else if (this.country.value === '벨기에')
      x = 7;  
      else if (this.country.value === '불가리아')
      x = 8;  
      else if (this.country.value === '스웨덴')
      x = 9;  
      else if (this.country.value === '슬로베니아')
      x = 10;  
      else if (this.country.value === '아이슬란드')
      x = 11;  
      else if (this.country.value === '아일랜드')
      x = 12;  
      else if (this.country.value === '영국')
      x = 13;  
      else if (this.country.value === '오스트리아')
      x = 14;  
      else if (this.country.value === '프랑스')
      x = 15;  
      else if (this.country.value === '핀란드')
      x = 16;  







    if (this.usedtype.value === '호텔')
      y = 0;
    else if (this.usedtype.value === '식당')
      y = 1;
    else if (this.usedtype.value === '엔터')
      y = 2; 
    else if (this.usedtype.value === '전시회')
      y = 3;    
    else if (this.usedtype.value === '교육/세미나')
      y = 4;    
    else if (this.usedtype.value === '대중교통')
      y = 5;
    else if (this.usedtype.value === '택시')
      y = 6; 
    else if (this.usedtype.value === '렌터카')
      y = 7;    
    else if (this.usedtype.value === '유류대')
      y = 8;    
    

    e.preventDefault();
    const country = this.country.value;
    const usedtype = this.usedtype.value;
    const price = this.price.value;
    const return_price = this.rates[x][y] * this.price.value * 0.01;
    if(!country || !usedtype || !price) {
        alert("Please fill all fields.");
        return;
    }
    
    
      const newPerson = [country, usedtype, price, return_price];
      this.props.onAddPerson(newPerson);  
    
    
  }
  render() {   

    return (
      <Form onSubmit={this.addPerson.bind(this)}>
        
        <Table responsive>
    <thead>
      <tr>
      
        <th>나라</th>
        <th>사용처</th>
        <th>사용금액</th>
        <th></th>

      </tr>
      
    </thead>
    <tbody>
    <tr>
      
      <td style={{width:'30%'}}>
        <FormControl 
          value={this.props.country} 
          inputRef={ref => this.country = ref} 
          componentClass="select" placeholder="나라 선택">
          {this.countrys.map((e, key) => {
            return <option key={key} value={e.value}>{e.name}</option>
          })}
        </FormControl>
      </td>
      <td style={{width:'30%'}}>
        <FormControl
          value={this.props.usedtype} 
          inputRef={ref => this.usedtype = ref} 
          componentClass="select" placeholder="사용처 선택">
          {this.usedtypes.map((e, key) => {
            return <option key={key} value={e.value}>{e.name}</option>
          })}
        </FormControl>
      </td>
      <td style={{width:'26%'}}>
        <FormControl 
          value={this.props.price} 
          inputRef={ref => this.price = ref} 
          type="number" placeholder="사용금액" />
      </td>
      <td>
        <Button id="button-submit" bsStyle="primary" type="submit">
          &nbsp;&nbsp;+&nbsp;&nbsp;
        </Button>
      </td>
      
    </tr>
    </tbody>
  </Table>



      
            
    
            
            
    
            
    
      </Form>
    );
  }
}
  


export default FoodForm;


