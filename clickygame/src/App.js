import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    message: "Click an image to begin!",
    score: 0,
    highscore: 0,
    friends: friends,
    unselectedfriends: friends
  };

shuffleArray = () => {
  for (let i = this.state.friends.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.state.friends[i], this.state.friends[j]] = [this.state.friends[j], this.state.friends[i]];
  }
  console.log("New Array:  "+this.state.friends[0].id);
  this.setState({ friends });  
}

imageClick = id => {
  const findFriend = this.state.unselectedfriends.find(item => item.id === id);
  console.log(findFriend);
  if(findFriend === undefined) {
    this.setState({
      message: "You guessed incorrectly!",
      highscore: (this.state.score > this.state.highscore) ? this.state.score : this.state.highscore,
      score: 0,
      friends: friends,
      unselectedfriends: friends
    })
  }
  else{
    const newFriends = this.state.unselectedfriends.filter(item => item.id !== id);            
    this.setState({ 
        message: "You guessed correctly!",
        score: this.state.score + 1,
        friends: friends,
        unselectedfriends: newFriends
    });
  }
  this.shuffleArray();
}
  render() {
    return (
      <div>
        <Navbar
          message={this.state.message}
          score={this.state.score}
          highscore={this.state.highscore}
        />
        <Wrapper>            
            <Title />
            {
              this.state.friends.map(friend => (
                  <FriendCard
                      id={friend.id}
                      key={friend.id}
                      image={friend.image}
                      imageClick={this.imageClick} 
                      score={this.state.score}
                  />
                ))
            }
            <Footer />
        </Wrapper>
        </div>
    );
}
}

  // Map over this.state.friends and render a FriendCard component for each friend object
  

export default App;
