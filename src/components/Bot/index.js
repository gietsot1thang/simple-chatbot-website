import React, { PureComponent } from 'react';
import ChatBot from 'bongga-react-simple-chatbot';
import { checkSteps, getDefaultSteps } from '../../utils/steps';
import { connect } from 'react-redux';

class Bot extends PureComponent {
  state =  {
    steps: null,
    open: false,
    reset: false,
  }

  onEnd = ({ steps, values }) => {
    const { onReset } = this.props;

    setTimeout(() => {
      this.setState({ open: false, reset: true }, () => {
        if(onReset) onReset();
      });
    }, 2000);
  }

  onToggle = ({ opened }) => {
    this.setState(state => ({ open: !state.open }))
  }

  componentDidUpdate(props, state) {
    if(props.options !== this.props.options) {
      const data = this.props.options.map(item => ({
        value: item.id,
        label: item.name,
        trigger: ({ value, steps }) => 'another-subject'
      }));

      const step = { id: 'options-step-three', options: data };
      this.setState({ steps: checkSteps(state.steps, step) });
    }
  }

  async componentDidMount() {
    this.setState({ steps: getDefaultSteps() });
  }

  render() {
    const { steps, open, reset } = this.state;

    if(!steps) return null;

    return (
      <ChatBot
        reset={reset}
        floating
        opened={open}
        placeholder="¿Qué duda tienes?"
        headerTitle="Betto"
        steps={steps}
        handleEnd={this.onEnd}
        toggleFloating={this.onToggle}
      />
    );
  }
}

const stateToProps = state => ({
  options: state.options.data,
})

const actionsToProps = dispatch => ({
 
})

export default connect(stateToProps, actionsToProps)(Bot);
