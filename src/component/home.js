import React from "react";
import axios from 'axios';
import { Card, Col, Row } from 'antd';
import 'antd/dist/antd.css';


 
let oldvalue=1
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        users: []
    };

    
   
  }
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        console.log(res)
        const users = res.data;
        this.setState({ users });
      })
  }
 
  render() {
    return (
      <div>
          
        {
          this.state.users
            .map(person =>
<div  style={{ padding: "30px",
  background: "#ececec"}}>
    <Row gutter={16}>
      <Col span={6}>
        <Card title={person.name} bordered={false}>
         Email: {person.email}
         <br/>
        Website: {person.website}
        <br/>
        Phone: {person.phone}
        </Card>
      </Col>

      
     
    </Row>
  </div>
    

              
              
            )
        }
      

      
    
      </div>

      
    );
  }
}
 
export default Home;