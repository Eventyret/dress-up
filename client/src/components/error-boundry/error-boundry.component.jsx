import React from 'react';
import { ErrorImageContainer, ErrorImageText, ErrorImageOverlay } from './error-boundry.styles';

class ErrorBoundry extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false
    };
  }
  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }
  render() {
    if (this.state.hasErrored) {
      return <div>Something went wrong</div>;
    }
    return this.props.children;
  }
}


export default ErrorBoundry;