import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./pages/Layout";
import Home from './components/Home';
import ProjectView from './components/ProjectView';
import { leaderboards_detailed, demo_detailed, gtd_detailed } from './util/Content';
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
				<Route path="/gtd" element={<ProjectView images={gtd_detailed.images} description={gtd_detailed.description} projectName={gtd_detailed.projectName} tags={gtd_detailed.tags} theme={gtd_detailed.theme}/>}/>
				<Route path="/teambuild" element={<ProjectView images={demo_detailed.images} description={demo_detailed.description} projectName={demo_detailed.projectName} tags={demo_detailed.tags} theme={demo_detailed.theme} github={demo_detailed.github}/>}/>
				<Route path="/leaderboards" element={<ProjectView images={leaderboards_detailed.images} description={leaderboards_detailed.description} projectName={leaderboards_detailed.projectName} tags={leaderboards_detailed.tags} theme={leaderboards_detailed.theme} github={leaderboards_detailed.github}/>}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
