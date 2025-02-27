import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/wetube");

const db = mongoose.connection;

const handleError = (error) => console.log("❌ DB Error", error);
const handleOpen = () => console.log("✅ Connected to DB");

db.on("error", handleError);
db.once("open", handleOpen);

//fucntion을 import한것도 아니고 db를 import한 것도 아니야 그냥 파일 자체를 import 해줬어
//그리고 그 파일은 import되는 순간, 자동적으로 실행이 될거야. js가 자동으로 실행시켜주지
