import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import de composants
import './App.scss';
import Home from './home/Home';
import RequireAuthorization from '../logic/authorization/RequireAuth';
import ErrorPage from './errorPage/ErrorPage';

function App() {
	return (
		<div className="body">
			<Routes>
				{/* Identification de l'utilisateur */}
				<Route path="/" element={<RequireAuthorization />}>
					{/* Liste des routes accessibles post identification */}
					<Route path="/" element={<Home />} />
					<Route path="/*" element={<ErrorPage />} />
				</Route>
				<Route path="/*" element={<ErrorPage />} />
			</Routes>
		</div>
	);
}

export default App;
