import express from "express";
import { join, login } from "../controllers/userController";
import { trending, search } from "../controllers/videoController";
//자바스크립트에서는 모든 파일이 자기만의 세계를 가져
//우리가 만들고 있는 파일들은 하나의 모듈이야,그리고 그것들은 독립되어 있어
//그러니 한 파일안에서도 돌아가는 환경을 코드로 만들어야지

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;
//여기 globalRouter처럼 default로 export를 한다면
//내가 원하는 어떤 이름으로 던지 import할 수 있었어
//하지만 export const를 하면 실제 이름 그대로 import해야 한다고

//누구든 globalRouter.js를 import하면, globalRouter자체를 import하게 될거라구
//globalController가 따로 필요하지는 않아
//생각해보자 누가 회원가입을 할까? 유저(user)이지 그러니 그건 유저 컨트롤러에 들어갈거야
//Home으로 가면 뭐가 보이지? 동영상(video)이지 그러니 그건 비디오 컨트롤러에 들어갈거야
//Global Router는 url을 깔끔하게 하기위해 쓰는거일 뿐이야. 그 이외의 이유는 없다구
