import { Component } from "react";
import AppRoutes from "./routes/AppRoutes";
import ErrorState from "./components/common/ErrorState";

class AppErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    return this.state.hasError ? <ErrorState title="UXSim could not render this view" description="Refresh the page or return to the dashboard." /> : this.props.children;
  }
}

function App() {
  return <AppErrorBoundary><AppRoutes /></AppErrorBoundary>;
}

export default App;