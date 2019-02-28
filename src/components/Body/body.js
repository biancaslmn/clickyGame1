import React from   'react';
import Navbar from '../navBar/NavBar';

import './body.css';
import Card from '../Card/card';
const characters = [
    {
        id: 0,
        picture: "https://img.dealspluscdn.com/ai/200x200/dealimage/stores/orig/0/new/apple.com_1550004973.png" 
    },
    {
        id: 1,
        picture: "https://static.turbosquid.com/Preview/001245/316/HA/apple-logo-3D-model_200.jpg" 
    },
    {
        id: 2,
        picture: "https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/0015/7847/brand.gif?itok=LsN3DWaP"
    },
    {
        id: 3,
        picture: "https://cdn.japantimes.2xx.jp/wp-content/uploads/2018/11/b-techregs-a-20181120-200x200.jpg"
    },
    {
        id: 4,
        picture: "https://hips.hearstapps.com/clv.h-cdn.co/assets/cm/15/08/54ea7c172bb74_-_fresh-apple-relish-3328-200.jpg"
    },
    {
        id: 5,
        picture:'https://www.giftofcuriosity.com/wp-content/uploads/2015/10/Apple-outline-3-green-01-200x200.png'
    }
]

class Body extends React.Component{
    state = {
        characters : characters,
        clicked: [],
        score: 0,
        show: false,
        message: "",
        topScore: 0

    }
    handleShow = () => {
        if(this.state.show){
            this.setState({
                show: false
            })
        }else {
            this.setState({
                show: true
            })
        }
    }
    shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    handleClick = (id) => {
        console.log("In handle click")
        if(this.state.clicked.includes(id)){
            // alert("You Lose")
            this.setState({
                score: 0, 
                clicked: [],
                message:"This image was cliqued already!",
                topScore:this.state.topScore

                
            })
        }else {
            const newArr = this.shuffle(this.state.characters);
            this.setState({
                clicked: [...this.state.clicked, id],
                score: this.state.score + 1,
                characters: newArr,
                topScore:this.state.score,
                message:""
                
                
            }, function(){
                if(this.state.score === newArr.length){
                    this.setState({
                        clicked:[],
                        topScore: this.state.score,
                        message: "Good job! you got all pictures correct!",
                        score: 0



                    })
                }
                console.log(this.state.clicked);
            // }, function() {
            //     if(this.state.topScore=== characters.length){
            //         topScore = 0;
            //         message = "Good job! you got all pictures correct!";
                    
            //     }

                
            

            }) 

        }
     
       
    }
    render(){
        return (
        <div >
            <Navbar 
            text={'Cliquey Game'}
            message={this.state.message}
            topScore= {<div> {this.state.topScore} </div>}
            
            score={this.state.score}  />
            <div className='wrapper'>

        <div className = 'body'> 
           
           
            {
                this.state.characters.map((element, index) => {
                    return <Card id={element.id} handleClick = {this.handleClick} picture={element.picture}  name={element.name }/>
                })
            }
           
        </div>
        </div>
        </div>
    
        )
    }
   
}

export default Body;