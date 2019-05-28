import React, { PureComponent } from 'react';
import { Loading } from 'bongga-react-simple-chatbot';
import Response from '../Response';
import { connect } from 'react-redux';
import { receiveOptions } from '../../redux/modules/options';

class Data extends PureComponent {
  state = {
    loading: false,
    result: [],
  }

  getAgentResponse = async () => {
    const { steps, triggerNextStep } = this.props;
    const { subject } = steps;

    // const query = encodeURI(subject.value);
    // const resp = await API.queryAgent(query);
    const data = `
    Pregunta: ${subject.value}.
    Respuesta: Aquí va la respuesta de DialogFlow, API o de donde venga.`;

    triggerNextStep({ value: data, trigger: 'options-step-one' });
  }

  async componentDidMount() {
    const { option, triggerNextStep, setOptions } = this.props;

    if(option) {
      setOptions([
        {
          id: 1,
          name: 'Bird'
        },
        {
          id: 2,
          name: 'Eagle'
        },
        {
          id: 3,
          name: 'Tiger'
        }
      ]);
      triggerNextStep({ value: undefined, trigger: 'options-step-three' });
    } else {
      this.getAgentResponse();
    } 
  }

  render() {
    const { canSearch } = this.props;
    const { loading, result } = this.state;

    if(canSearch) {
      return loading
      ? <Loading />
      : result.length === 0
        ? <Response>No hay resultados</Response>
        : <div style={{ maxWidth: '100%' }}>
          <Response>Resultados encontrados:</Response>
          {
            result.map((item, i) => (
              <div key={i}>
                <Response
                  dangerouslySetInnerHTML={{ __html: item.response }}
                />
              </div>
            ))
          }
        </div>
    }

    return <Loading />
  }
}

const actionsToProps = dispatch => ({
  setOptions: (data) => dispatch(receiveOptions(data)),
})

export default connect(null, actionsToProps)(Data);
