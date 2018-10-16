import React from 'react';
import cowsayBrowser from 'cowsay-browser';
import faker from 'faker';
import '../../../style/main.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    document.title = 'LIME GREEN ERRTHANG';
    this.state = {
      cowsayRender: cowsayBrowser.say({ text: 'Wyatt is cool beans' }),
      content: 'CLICK THE BUTTON, SILLY!',
      secretState: 'Super Secret Stuff',
    };
    this.updateText = this.updateText.bind(this);
    this.updateCow = this.updateCow.bind(this);
  }

  updateText() {
    this.setState(() => {
      const newText = faker.lorem.words(3);
      return {
        content: newText,
        cowsayRender: cowsayBrowser.say({ text: newText }),
      };
    });
  }

  updateCow(event) {
    const currentText = this.state.content;
    const { value } = event.target;
    this.setState(() => {
      if (value === 'say') {
        return {
          cowsayRender: cowsayBrowser.say({ text: currentText }),
        };
      } 
      return {
        cowsayRender: cowsayBrowser.think({ text: currentText }),
      };
    });
  }

  render() {
    return (
      <div>
        <h2>Generate Cowsay Lorem</h2>
        <pre>
          { this.state.cowsayRender }
          <p>Content in state: { this.state.content }</p>
          <p>Secret state: { this.state.secretState }</p>
        </pre>
        <button onClick={this.updateText}>CLICK ME</button>
      </div>
    );
  }
}
export default App;
