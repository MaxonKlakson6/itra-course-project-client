import React, { PureComponent, ReactNode } from 'react';

import { ErrorWrapper } from 'src/components/ErrorBoundary/styles';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  isError: boolean;
}

class ErrorBoundary extends PureComponent<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      isError: false,
    };
  }

  public static getDerivedStateFromError() {
    return {
      isError: true,
    };
  }

  render() {
    const { children } = this.props;
    const { isError } = this.state;

    if (isError) {
      return <ErrorWrapper>Something went wrong...</ErrorWrapper>;
    }

    return children;
  }
}

export default ErrorBoundary;
