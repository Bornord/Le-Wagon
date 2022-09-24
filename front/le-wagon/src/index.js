import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { configureStore } from '@reduxjs/toolkit';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { persistStore } from 'redux-persist';
// import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
// import thunk from 'redux-thunk';
// import storage from 'redux-persist/lib/storage';

// Import de composants
import './pages/App.scss';
import App from './pages/App';
// import ErrorPage from './pages/errorPage/ErrorPage';

// // configuration de la persistance redux
// const reducers = combineReducers({});
// const persistConfig = {
// 	key: 'root',
// 	storage,
// };
// const persistedReducer = persistReducer(persistConfig, reducers);
// const store = configureStore({
// 	reducer: persistedReducer,
// 	devTools: process.env.NODE_ENV !== 'production',
// 	middleware: [thunk],
// });
// const persistor = persistStore(store);

// Config du projet react
const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

// C'est parti, on y va !
root.render(
	<div className="App">
		{/* <Provider store={store}> */}
		{/* <PersistGate loading={null} persistor={persistor}> */}
		<BrowserRouter>
			<Routes>
				<Route path="/*" element={<App />} />
			</Routes>
		</BrowserRouter>
		{/* </PersistGate>
		</Provider> */}
	</div>
);
