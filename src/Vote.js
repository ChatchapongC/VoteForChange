import React, { Component } from 'react';
import "./Vote.css";
import { ProgressBar } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Figure } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const campaignlist = [
    {
        id: 1,
        image:"https://pixabay.com/p-848904/?no_redirect",
        name: 'Free Nazanin Ratcliffe',
        description: 'My wife Nazanin Zaghari-Ratcliffe, 37 year old charity worker, was on holiday visiting her family in Iran. She was at the airport returning to the UK on the 3rd April when she was detained by the Iranian Revolutionary Guard. She has been transferred to an unknown location in Kerman Province',
        votes: 0,
        goal: 2000
    },
    {
        id: 2,
        image:'../public/default_image.jpeg',
        name: 'Save the environment - Stop giving plastic toys with fast food kids meals',
        description:'We are Ella and Caitlin aged 10 and 8, and we’ve been learning all about the environment at school and the problem of plastic. It made us very sad to see how plastic harms wildlife and pollutes the ocean, and we want to change this. That’s why we want Burger King and McDonald’s to think of the environment and stop giving plastic toys with their kids meals.',
        votes: 0,
        goal: 9000
    },
    {
        id: 3,
        image:'../public/default_image.jpeg',
        name: 'Stop taxing periods. Period. #EndTamponTax',
        description:"We need to make sure we no longer tax period products on luxurious, “non-essential” grounds, but not helicopters, the maintenance of our private jets, or crocodile steaks. Even President Obama has coined the tax 'shocking' and 'unfair'.",
        votes: 0,
        goal: 3500
    },
    {
        id: 4,
        image:'../public/default_image.jpeg',
        name: 'UNFREEZE NHS Annual pay rise - Pay us our dues',
        description:'The NHS treats more than 5 million people every year. This year has been the most arduous one to date within our lifetimes. The COVID-19 pandemic hit the whole of the UK hard. Key workers stepped up from many different vocations and skill sets to serve and protect; the NHS being the juggernaut behind the operational safety of the UK',
        votes: 0,
        goal: 6000
    },
    {
        id: 5,
        image:'../public/default_image.jpeg',
        name: 'Government must provide all teaching staff with adequate PPE',
        description:"I am a primary school teacher and a mother of 3 young children. The government will soon reopen primary schools during this pandemic. They have said that teachers don't need PPE.",
        votes: 0,
        goal: 5000
    }

]

class Vote extends Component {
    state = {
        members: []
    };

    componentDidMount() {
        this.setState({ members: campaignlist });
    }

    handleEvent = memberId => {
        //vote count
        const updateList = this.state.members.map(member => {
            if (member.id === memberId && member.votes < member.goal) {
                return Object.assign({}, member, {
                    votes: member.votes + 100
                });
    
            } else {
                return member;
            }
        });
        this.setState({
            members: updateList
        });
    };
    
    render() {
        return this.state.members.map( member => (
            <Campaign key={member.id}
            id={member.id}
            image={member.image}
            name={member.name}
            description={member.description}
            votes={member.votes}
            goal={member.goal}
            onVote={this.handleEvent} 
        />));    
    }
}

//Display list of campaign
class Campaign extends Component {
    handleClick = () => this.props.onVote(this.props.id);
    render() {
  
    return(

    <div className="campaign-ls">
        <tr>
        
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.image} />
        <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
        </Card.Body>
    </Card>
            {this.props.description}    
        </tr>
            <ProgressBar striped variant='warning' max={this.props.goal} now={this.props.votes} label={`${this.props.votes}/`+`${this.props.goal}`}  />
            <Button variant='warning' onClick={this.handleClick}>Vote this campaign</Button> 
    </div>
    );}
}


export default Vote;