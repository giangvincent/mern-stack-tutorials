import React, { Component } from 'react';
import Card from './components/Card';

class App extends Component {
  state = {
    cards: [
      {
        author: "test - 1",
        cover: "https://images.unsplash.com/photo-1520065786657-b71a007dd8a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80",
        description: "abcxyz",
        numLike: 100,
        numCmt: 123,
        numShare: 213,
      }
    ]
  }
  render() {
    return (
      <div className="grid grid-cols-1 gap-6 py-6 px-4 md:px-6 lg:px-8">
        {this.state.cards.map((card, index) => <Card data={card} />)}
      </div>
    );
  }
}

export default App;