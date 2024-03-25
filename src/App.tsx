import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./pages/Layout";
import Home from './components/Home';
import ProjectView from './components/ProjectView';
import { leaderboards_detailed, demo_detailed, gtd_detailed, habit_detailed, team_detailed, old_detailed, space_detailed } from './util/Content';
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
				<Route path="/oldwebsite" element={<ProjectView images={old_detailed.images} description={old_detailed.description} projectName={old_detailed.projectName} tags={old_detailed.tags} theme={old_detailed.theme} github={old_detailed.github} live={old_detailed.live}/>}/>
				<Route path="/exove" element={<ProjectView images={team_detailed.images} description={team_detailed.description} projectName={team_detailed.projectName} tags={team_detailed.tags} theme={team_detailed.theme} github={team_detailed.github}/>}/>
				<Route path="/habits" element={<ProjectView images={habit_detailed.images} description={habit_detailed.description} projectName={habit_detailed.projectName} tags={habit_detailed.tags} theme={habit_detailed.theme} github={habit_detailed.github}/>}/>
				<Route path="/gtd" element={<ProjectView images={gtd_detailed.images} description={gtd_detailed.description} projectName={gtd_detailed.projectName} tags={gtd_detailed.tags} theme={gtd_detailed.theme}/>}/>
				<Route path="/teambuild" element={<ProjectView images={demo_detailed.images} description={demo_detailed.description} projectName={demo_detailed.projectName} tags={demo_detailed.tags} theme={demo_detailed.theme} github={demo_detailed.github}/>}/>
				<Route path="/leaderboards" element={<ProjectView images={leaderboards_detailed.images} description={leaderboards_detailed.description} projectName={leaderboards_detailed.projectName} tags={leaderboards_detailed.tags} theme={leaderboards_detailed.theme} github={leaderboards_detailed.github} live={leaderboards_detailed.live}/>}/>
				<Route path="/space" element={<ProjectView images={space_detailed.images} description={space_detailed.description} projectName={space_detailed.projectName} tags={space_detailed.tags} theme={space_detailed.theme} youtube={space_detailed.youtube}/>}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
