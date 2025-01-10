export const trending = (req, res) => res.send("Home page Videos");
export const search = (req, res) => res.send("Search Video");
//이놈 어떻게 globalRouter로 가져오지

export const upload = (req, res) => res.send("Upload Video");
export const see = (req, res) => {
  console.log(req.params);
  return res.send("Watch Video");
};
export const edit = (req, res) => res.send("Edit Video");
export const deleteVideo = (req, res) => res.send("Delete Video");
//이놈 어떻게 videoRouter로 가져오지

//왜냐하면 파일은 한가지 default export를 가질 수 밖에 없으니까
