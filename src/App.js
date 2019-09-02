import React from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import routes from './routes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
	return (
		<Router>
			<div className="container">
				<Menu />

				<div className="container">
					<div className="row mt-5 justify-content-center">
						<Switch>
							{routes &&
								routes.map((r, i) => {
									return <Route key={i} path={r.path} exact={r.exact} component={r.main} />;
								})}
						</Switch>
					</div>
				</div>
			</div>
		</Router>
	);
}

export default App;
