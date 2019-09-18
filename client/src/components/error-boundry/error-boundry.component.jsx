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
      return (
        <ErrorImageOverlay>
		  <ErrorImageContainer imageUrl='https://i.imgur.com/oEUksmz.png' />
		  <ErrorImageText>
		  <h2>Don’t Cry Over Spilled Page</h2>
		  
		  Gulp. You hold back tears as the white liquid spreads across the floor from your sad looking carton. You should have bought the chocolate milk, it was clearly the better choice. And then maybe you wouldn’t have so carelessly smacked it across the room when you emphatically pointed at a bird outside. Too late now. You wipe the single tear from your eye and go fetch the mop.
		  </ErrorImageText>
        </ErrorImageOverlay>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
