import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./pages/Layout";
import Home from './components/Home';
import ProjectView from './components/ProjectView';
import { leaderboards_detailed, demo_detailed } from './util/Content';
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
				<Route path="/teambuild" element={<ProjectView images={demo_detailed.images} description={demo_detailed.description} projectName={demo_detailed.projectName} tags={demo_detailed.tags} theme={demo_detailed.theme}/>}/>
				<Route path="/leaderboards" element={<ProjectView images={leaderboards_detailed.images} description={leaderboards_detailed.description} projectName={leaderboards_detailed.projectName} tags={leaderboards_detailed.tags} theme={leaderboards_detailed.theme}/>}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
