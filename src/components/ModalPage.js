import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class ModalPage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {   
     
    }

    render() {      

        const males = this.props.names.map(user => { if(user.gender === 'Male') return user; }).filter(el => { return el !== null && el !== '' && el !== undefined; });
        const females = this.props.names.map(user => { if(user.gender === 'Male') return user; }).filter(el => { return el !== null && el !== '' && el !== undefined; });

        let name = '';
        var x= Math.random();
        if(x === 0) {
          var item = males[Math.floor(Math.random() * males.length)];
          name = item.name;
        } else {
          var item = males[Math.floor(Math.random() * females.length)];
          name = item.name;
        }

        let jobItem = this.props.jobs[Math.floor(Math.random() * this.props.jobs.length)];

        return  (
            <div style={{height:100, width:100}}>
              <Modal isOpen={true} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}>
                <ModalHeader>Family Info</ModalHeader>
                <ModalBody>
                  Welcome, {name} <br></br>
                  You are a {jobItem.JobTitle} with a salary of ${jobItem.Salary} and a weekly food budget of ${jobItem.FoodBudget}<br></br><br></br>
                  Our family unit has {this.props.adultsModal.length} adults with caloric needs of {this.props.adultCals}.<br></br>
                  Our family unit has {this.props.kidsModal.length} kids with caloric needs of {this.props.kidsCals}.<br></br>
                </ModalBody>
                <ModalFooter>
                <Button color = "primary" onClick={() => {
                            this.props.callback(this.props.context, jobItem.FoodBudget)
                        }}>Ok</Button>&nbsp;
                </ModalFooter>
              </Modal>
            </div>
          );
    }
}
export default ModalPage;
