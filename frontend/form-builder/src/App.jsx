import "./App.css";
import ReactRoutes from "./Routes";
import { history } from "./store/config";

function App() {
	return (
		<div className="app">
			<ReactRoutes history={history} />
		</div>
	);
}

export default App;
