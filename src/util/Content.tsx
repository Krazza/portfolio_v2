import demoImage from "../assets/images/demopr_01.png";
import myPic from "../assets/images/me.png";
import { ProjectProps } from "../components/HorizontalSection";

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

export const testProjectArray = [testProject, testProject, testProject, testProject, testProject, testProject]