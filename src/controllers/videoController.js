export const trending = (req, res) => {
  const videos = [
    {
      title: "Video #1",
      rating: 5,
      comments: 2,
      createAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
    {
      title: "Video #2",
      rating: 4,
      comments: 3,
      createAt: "3 minutes ago",
      views: 69,
      id: 2,
    },
    {
      title: "Video #3",
      rating: 3,
      comments: 4,
      createAt: "4 minutes ago",
      views: 49,
      id: 3,
    },
  ];
  res.render("home", { pageTitle: "Home", videos });
};
export const search = (req, res) => res.send("Search Video");

export const upload = (req, res) => res.send("Upload Video");
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
export const deleteVideo = (req, res) => {
  res.send("Delete Video");
};
//이놈 어떻게 videoRouter로 가져오지
//왜냐하면 파일은 한가지 default export를 가질 수 밖에 없으니까
