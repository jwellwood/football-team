import React, { Component, ErrorInfo } from 'react';
import { PageContainer } from 'shared/layout/containers';
import { CustomButton } from 'components/buttons';

interface State {
  errorMessage: string;
}

class ErrorBoundary extends Component<{}, State> {
  state: State = {
    errorMessage: '',
  };
  static getDerivedStateFromError(error: Error) {
    return { errorMessage: error.toString() };
  }
  componentDidCatch(error: Error, info: ErrorInfo) {
    this.logErrorToServices(error.toString(), info.componentStack);
  }
  // A fake logging service for now // TODO
  logErrorToServices = console.log;
  render() {
    if (this.state.errorMessage) {
      return (
        <PageContainer>
          There was a problem. Check your network connection and try refreshing
          the page.
          <CustomButton onClick={() => window.location.reload()}>
            Refresh
          </CustomButton>
        </PageContainer>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
