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
    detailedViewLink : "/leaderboards"
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
    detailedViewLink : "/leaderboards"
}

export const oldPortfolioPR : ProjectProps = {
    img : oldportfolioImg,
    alt : "Old portfolio website",
    projectName : "Old website",
    github : "https://github.com/Krazza/PortfolioProject_React",
    live : "https://symphonious-squirrel-2e92aa.netlify.app/",
    detailedViewLink : "/leaderboards"
}

export const colleaguePR : ProjectProps = {
    img : colleagueImg_02,
    alt : "Colleague feedback system",
    projectName : "Colleague feedback system",
    github : "https://github.com/Krazza/Exove_Colleague_Feedback",
    detailedViewLink : "/leaderboards"
}

// GAME PROJECTS 

export const singularSpace : ProjectProps = {
    img : space,
    alt : "Singular Space",
    projectName : "Singular Space",
    youtube : "https://youtu.be/Trj1f0gH81Q?si=nCRhRQw37NyZ9WQl",
    detailedViewLink : "/leaderboards"
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
    projectName : "Valorant Leaderboards (RIOT Games)",
    description : "MongoDB stores the unique player identifiers which are needed to make game-related requests. Each time user visits the leaderboard page, a request (using player identifiers) fetching player data from the backend is made. If cache data exists, server returns it in the response, otherwise, a request to Henrik API is made. Once frontend has the required data, it is displayed on the leaderboard.",
    tags : [ "JavaScript", "React", "Node.JS", "MongoDB" ],
    theme : "light"
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
    projectName : "Team building tool",
    description: "An assignment created in about 10 hours of work. Planned as a support tool at hackathons and conventions to help people organize and look for teams. Users can apply for open positions in different teams, and teams can view submitted applications.",
    tags : ["JavaScript", "React", "JSON-server"],
    theme : "dark"
}

export const WebProjects = [gtdPR, leaderboardsPR, teamBuildPR, habitTrackerPR, colleaguePR, oldPortfolioPR];
export const GameProjects = [singularSpace, personalProject, personalProject, personalProject, personalProject, personalProject];
