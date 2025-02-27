import Video from "../models/video";
//database는 JS밖에 존재하기 때문에 0.001초라도 기다림의 시간이 필요하다고
//따라서 2가지 방식 사용 가능 1.callback 2.promise

/*
Video.find({}, (error, videos) => {
  if (error) {
    return res.render("server-error");
  }
  return res.render("home", { pageTitle: "Home", videos });
});
*/

export const home = async (req, res) => {
  try {
    console.log("start"); //1st
    const videos = await Video.find({});
    console.log("finished"); //2nd
    console.log(videos); //3rd
    return res.render("home", { pageTitle: "Home", videos }); //4th
  } catch {
    return res.render("server-error");
  }
};

export const upload = (req, res) => res.send("Upload Video");
export const watch = (req, res) => {
  const { id } = req.params;
  return res.render("watch", { pageTitle: `Watching` });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render("edit", { pageTitle: `Editing` });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("Upload", { pageTitle: "Upload Video" });
};

export const postUpload = (req, res) => {
  const { title, rating, comments, createAt, views } = req.body;
  return res.redirect("/");
};
