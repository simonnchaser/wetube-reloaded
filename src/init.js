import "./database";
import "./models/video";
import app from "./server";

const PORT = 4000;

const handleListening = () =>
  console.log(`✅Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);

//init는 필요한 모든 것들을 import시키는 역할을 담당할거야
