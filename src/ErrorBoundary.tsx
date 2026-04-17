import React from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('GameGlance ErrorBoundary caught:', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.5rem',
          padding: '2rem',
          background: 'var(--bg-primary)',
          color: 'var(--text-primary)',
        }}>
          <div style={{ fontSize: '3rem' }}>💥</div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Something went wrong</h1>
          <p style={{
            color: 'var(--text-secondary)',
            textAlign: 'center',
            maxWidth: '500px',
            lineHeight: 1.6,
          }}>
            An unexpected error occurred while rendering. This is usually caused by malformed character data.
          </p>
          <code style={{
            padding: '0.75rem 1.25rem',
            background: 'var(--bg-input)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            fontSize: '0.8rem',
            color: 'var(--accent-rose)',
            maxWidth: '600px',
            overflow: 'auto',
            wordBreak: 'break-word',
          }}>
            {this.state.error?.message || 'Unknown error'}
          </code>
          <button
            onClick={() => {
              this.setState({ hasError: false, error: null });
              window.history.pushState({}, '', '/');
              window.location.reload();
            }}
            style={{
              padding: '0.75rem 2rem',
              background: 'linear-gradient(135deg, var(--accent-indigo), var(--accent-purple))',
              color: '#fff',
              border: 'none',
              borderRadius: 'var(--radius-lg)',
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontWeight: 600,
              fontSize: '0.95rem',
              transition: 'all 0.25s ease',
            }}
          >
            ← Return to Home
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
