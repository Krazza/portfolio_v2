import demoImage from "../assets/images/demopr_res.png";
import myPic from "../assets/images/me.png";
import { ProjectProps } from "../components/HorizontalSection";
import gtdImg from "../assets/images/gtd_res.png";
import leaderboardsImg from "../assets/images/Leaderboards_res.png";
import oldportfolioImg from "../assets/images/srcnn_res.png";
import colleagueImg_02 from "../assets/images/colleagueFeedback_res.png";
import habitImg from "../assets/images/Habits_tab_res.png";
import space from "../assets/images/ss_res.png";
import wip from "../assets/images/WIP_res.png";
import { ProjectImage, ProjectViewProps } from "../components/ProjectView";

import leaderboards_b from "../assets/detailedViewImages/Leaderboards_b.png";
import demoIMG_01 from "../assets/detailedViewImages/demoIMG_01.png";
import demoIMG_02 from "../assets/detailedViewImages/demoIMG_02.png";
import demoIMG_03 from "../assets/detailedViewImages/demoIMG_03.png";
import demoIMG_04 from "../assets/detailedViewImages/demoIMG_04.png";

import grdIMG_01 from "../assets/detailedViewImages/gtd_b_01.png";
import grdIMG_02 from "../assets/detailedViewImages/gtd_b_02.png";
import grdIMG_03 from "../assets/detailedViewImages/gtd_b_03.png";
import grdIMG_04 from "../assets/detailedViewImages/gtd_b_04.png";

import habitIMG_01 from "../assets/detailedViewImages/habit_b_01.png";
import habitIMG_02 from "../assets/detailedViewImages/habit_b_02.png";
import habitIMG_03 from "../assets/detailedViewImages/habit_b_03.png";
import habitIMG_04 from "../assets/detailedViewImages/habit_b_04.png";

import teamIMG_01 from "../assets/detailedViewImages/team_b_01.png";
import teamIMG_02 from "../assets/detailedViewImages/team_b_04.png";
import teamIMG_03 from "../assets/detailedViewImages/team_b_05.png";
import teamIMG_04 from "../assets/detailedViewImages/team_b_06.png";
import teamIMG_05 from "../assets/detailedViewImages/team_b_07.png";

import oldIMG_01 from "../assets/detailedViewImages/old_b.png";

import space_01 from "../assets/detailedViewImages/singular_space_01_b.png";
import space_02 from "../assets/detailedViewImages/singular_space_02_b.png";
import space_03 from "../assets/detailedViewImages/singular_space_03_b.png";

export const teamBuildPic = {
    pic : demoImage,
    alt : "team building tool"
}

export const greetPic = {
    pic : myPic,
    alt : "silly me"
}

// WEB PROJECTS 
export const gtdPR : ProjectProps = {
    img : gtdImg,
    alt : "game team website",
    projectName : "Game Team Website",
    detailedViewLink : "/gtd"
}

export const leaderboardsPR : ProjectProps = {
    img : leaderboardsImg,
    alt : "Valorant Leaderboard project",
    projectName : "Riot Games leaderboard project",
    github : "https://github.com/Krazza/Leaderboards_VAL",
    live : "https://leaderboards-5b8x.onrender.com/",
    detailedViewLink : "/leaderboards"
}

export const teamBuildPR : ProjectProps = {
    img : demoImage,
    alt : "Team building tool",
    projectName : "Team building tool",
    github : "https://github.com/Krazza/Demo_task",
    detailedViewLink : "/teambuild"
}

export const habitTrackerPR : ProjectProps = {
    img : habitImg,
    alt : "Habit Tracker app",
    projectName : "Habit tracker app",
    github : "https://github.com/Krazza/HabitTrackerApp",
    detailedViewLink : "/habits"
}

export const oldPortfolioPR : ProjectProps = {
    img : oldportfolioImg,
    alt : "Old portfolio website",
    projectName : "Old website",
    github : "https://github.com/Krazza/PortfolioProject_React",
    live : "https://symphonious-squirrel-2e92aa.netlify.app/",
    detailedViewLink : "/oldwebsite"
}

export const colleaguePR : ProjectProps = {
    img : colleagueImg_02,
    alt : "Colleague feedback system",
    projectName : "Colleague feedback system",
    github : "https://github.com/Krazza/Exove_Colleague_Feedback",
    detailedViewLink : "/exove"
}

// GAME PROJECTS 

export const singularSpace : ProjectProps = {
    img : space,
    alt : "Singular Space",
    projectName : "Singular Space",
    youtube : "https://youtu.be/Trj1f0gH81Q?si=nCRhRQw37NyZ9WQl",
    detailedViewLink : "/space"
}

export const personalProject : ProjectProps = {
    img : wip,
    alt : "work in progress",
    projectName : "Coming soon",
    detailedViewLink : "/"
}

// BIG
const ldbrIMG : ProjectImage = {
    image : leaderboards_b,
    alt : "leaderboard table"
}

export const leaderboards_detailed : ProjectViewProps = {
    images : [ldbrIMG],
    projectName : "Leaderboards app (RIOT Games) 🕹️",
    description : "A personal MERN-stack project created to compare in-game ratings and player statistics of our small friend group. Build using unofficial game API and official Riot Games API. MongoDB stores the unique player identifiers which are needed to make game-related requests. Each time user visits the leaderboard page, a request (using player identifiers) fetching player data from the backend is made. If cache data exists, server returns it in the response, otherwise, a request to Henrik API is made. Once frontend has the required data, it is displayed on the leaderboard.",
    tags : [ "JavaScript", "React", "Node.JS", "MongoDB" ],
    theme : "light",
    github : "https://github.com/Krazza/Leaderboards_VAL",
    live : "https://leaderboards-5b8x.onrender.com/"
}

const demo_img_01 : ProjectImage = {
    image : demoIMG_01,
    alt : "team selection view"
}
const demo_img_02 : ProjectImage = {
    image : demoIMG_02,
    alt : "application view"
}
const demo_img_03 : ProjectImage = {
    image : demoIMG_03,
    alt : "pending application view"
}
const demo_img_04 : ProjectImage = {
    image : demoIMG_04,
    alt : "detailed team view"
}


export const demo_detailed : ProjectViewProps = {
    images : [demo_img_01, demo_img_02, demo_img_03, demo_img_04],
    projectName : "Team building tool 👔",
    description: "An assignment created in about 10 hours of work. Planned as a support tool at hackathons and conventions to help people organize and look for teams. Users can apply for open positions in different teams, and teams can view submitted applications.",
    tags : ["JavaScript", "React", "JSON-server"],
    theme : "dark",
    github : "https://github.com/Krazza/Demo_task"
}

const gtd_img_01 : ProjectImage = {
    image : grdIMG_01,
    alt : "hero page"
}
const gtd_img_02 : ProjectImage = {
    image : grdIMG_02,
    alt : "about the course"
}
const gtd_img_03 : ProjectImage = {
    image : grdIMG_03,
    alt : "meet the team"
}
const gtd_img_04 : ProjectImage = {
    image : grdIMG_04,
    alt : "testimonials"
}

export const gtd_detailed : ProjectViewProps = {
    images : [gtd_img_01, gtd_img_02, gtd_img_03, gtd_img_04],
    projectName : "Game team website 👔",
    description: "Contributed to this project as a part of my Front-end internship with TUTORS Oy. A website meant to introduce newcomers to a game developing division of the company.",
    tags : ["TypeScript", "React", "Vite", "Figma", "Github Actions"],
    theme : "dark",
}

const habit_img_01 : ProjectImage = {
    image : habitIMG_01,
    alt : "habits"
}
const habit_img_02 : ProjectImage = {
    image : habitIMG_02,
    alt : "tasks"
}
const habit_img_03 : ProjectImage = {
    image : habitIMG_03,
    alt : "mood"
}
const habit_img_04 : ProjectImage = {
    image : habitIMG_04,
    alt : "error page"
}

export const habit_detailed : ProjectViewProps = {
    images : [habit_img_01, habit_img_02, habit_img_03, habit_img_04],
    projectName : "Habit tracker app (MVP)🎯",
    description: "Habit-Tracker is an application that helps you to keep up with your daily habits. Made in a team as a part of a school project.",
    tags : ["JavaScript", "React", "Figma", "Bootstrap", "Firebase", "Firestore"],
    theme : "light",
    github : "https://github.com/Krazza/HabitTrackerApp",
}


const team_img_01 : ProjectImage = {
    image : teamIMG_01,
    alt : "log in page"
}
const team_img_02 : ProjectImage = {
    image : teamIMG_02,
    alt : "admin desk"
}
const team_img_03 : ProjectImage = {
    image : teamIMG_03,
    alt : "questionaire 1"
}
const team_img_04 : ProjectImage = {
    image : teamIMG_04,
    alt : "questionaire 2"
}

const team_img_05 : ProjectImage = {
    image : teamIMG_05,
    alt : "feedback screen"
}

export const team_detailed : ProjectViewProps = {
    images : [team_img_05, team_img_01, team_img_02, team_img_03, team_img_04,],
    projectName : "Exove team feedback app",
    description: `As a final assignment for our vocational course at Business College Helsinki, we were tasked with creating a system for giving and collecting colleague feedback. Requiremnts for the system were provided by Exove, a partner company to the Business College Helsinki.`,
    tags : ["TypeScript", "React", "Figma", "MongoDB", "LDAP"],
    theme : "dark",
    github : "https://github.com/Krazza/Exove_Colleague_Feedback",
}

const old_img_01 : ProjectImage = {
    image : oldIMG_01,
    alt : "old website home page"
}

export const old_detailed : ProjectViewProps = {
    images : [old_img_01],
    projectName : "Personal website",
    description: "Old portfolio website.",
    tags : ["JavaScript", "React"],
    theme : "dark",
    github : "https://github.com/Krazza/PortfolioProject_React",
    live : "https://symphonious-squirrel-2e92aa.netlify.app/",
}

const space_img_01 : ProjectImage = {
    image : space_01,
    alt : "space battle"
}
const space_img_02 : ProjectImage = {
    image : space_02,
    alt : "spaceship"
}
const space_img_03 : ProjectImage = {
    image : space_03,
    alt : "space fortress"
}

export const space_detailed : ProjectViewProps = {
    images : [space_img_03, space_img_02, space_img_01],
    projectName : "Singular Space",
    description: "Mobile multiplayer real time strategy game. For more details, visit the youtube link mentioned below or contact me personally, thank you.",
    tags : ["UE 4", "Blueprints", "C++", "Maya/3D Max"],
    theme : "light",
    youtube : "https://www.youtube.com/watch?v=Trj1f0gH81Q"
}

export const WebProjects = [gtdPR, leaderboardsPR, teamBuildPR, habitTrackerPR, colleaguePR, oldPortfolioPR];
export const GameProjects = [singularSpace, personalProject, personalProject, personalProject, personalProject, personalProject];
export const MobileViewGameProjects = [singularSpace];
