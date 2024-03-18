import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./pages/Layout";
import Home from './components/Home';
import ProjectView from './components/ProjectView';
import './styles/App.css';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout/>}>
					<Route index element={<Home/>}/>
					<Route path="/blog"/>
				</Route>
				<Route path="/gameportfolio"/>
				<Route path="/webportfolio"/>
				<Route path="/projectTest" element={<ProjectView/>}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
