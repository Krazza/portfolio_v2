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

export const teamBuildPic = {
    pic : demoImage,
    alt : "team building tool"
}

export const greetPic = {
    pic : myPic,
    alt : "silly me"
}

export const testProject : ProjectProps = {
    img : demoImage,
    alt : "team building tool", 
    projectName: "Team building tool",
    youtube : "123",
    github : "123",
    live : "123"
}


// WEB PROJECTS 
export const gtdPR : ProjectProps = {
    img : gtdImg,
    alt : "game team website",
    projectName : "Game Team Website",
}

export const leaderboardsPR : ProjectProps = {
    img : leaderboardsImg,
    alt : "Valorant Leaderboard project",
    projectName : "Riot Games leaderboard project",
    github : "https://github.com/Krazza/Leaderboards_VAL",
    live : "https://leaderboards-5b8x.onrender.com/"
}

export const teamBuildPR : ProjectProps = {
    img : demoImage,
    alt : "Team building tool",
    projectName : "Team building tool",
    github : "https://github.com/Krazza/Demo_task"
}

export const habitTrackerPR : ProjectProps = {
    img : habitImg,
    alt : "Habit Tracker app",
    projectName : "Habit tracker app",
    github : "https://github.com/Krazza/HabitTrackerApp"
}

export const oldPortfolioPR : ProjectProps = {
    img : oldportfolioImg,
    alt : "Old portfolio website",
    projectName : "Old website",
    github : "https://github.com/Krazza/PortfolioProject_React",
    live : "https://symphonious-squirrel-2e92aa.netlify.app/"
}

export const colleaguePR : ProjectProps = {
    img : colleagueImg_02,
    alt : "Colleague feedback system",
    projectName : "Colleague feedback system",
    github : "https://github.com/Krazza/Exove_Colleague_Feedback"
}

// GAME PROJECTS 

export const singularSpace : ProjectProps = {
    img : space,
    alt : "Singular Space",
    projectName : "Singular Space",
    youtube : "https://youtu.be/Trj1f0gH81Q?si=nCRhRQw37NyZ9WQl"
}

export const personalProject : ProjectProps = {
    img : wip,
    alt : "work in progress",
    projectName : "Coming soon",
}


export const WebProjects = [gtdPR, leaderboardsPR, teamBuildPR, habitTrackerPR, colleaguePR, oldPortfolioPR];
export const GameProjects = [singularSpace, personalProject, personalProject, personalProject, personalProject, personalProject];

export const testProjectArray = [testProject, testProject, testProject, testProject, testProject, testProject]