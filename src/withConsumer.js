import React from 'react';
import { Consumer } from './context/decks';

export default function withConsumer(WrappedComponent) {
  return class withConsumer extends React.Component {
    constructor(props) {
      super(props);
    }

    static navigationOptions = ({ navigation: { state } }, props) => {
      return {
        // title: state.params.title || '',
        title: '',
      };
    }

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <Consumer>
        {(store) => <WrappedComponent {...this.props} store={store} />}
      </Consumer>;
    }
  };
}