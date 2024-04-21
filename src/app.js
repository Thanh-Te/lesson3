import express from 'express';
import v1Router from './routers/v1.router.js';
//Init express
const app = express();
// Khai bao router

// khai bao route cho path: /v1/post -GET
// app.get("/v1/posts",(req,res)=>{
//     res.end("Danh sach posts");
// });
// // KHai bao route cho path: v1/posts - POST
// app.post("/v1/posts",(req,res)=>{
//     res.end("Tao post");
// });

// // khai bao route cho path: /v1/post/:id -GET
// app.get("/v1/posts/:id",(req,res)=>{
//     const params = req.params;
//     const id = params.id;
//     res.end("Lay post"+ id);
// });

// // khai bao route cho path: /v1/post/:id -PUT
// app.put("/v1/posts/:id",(req,res)=>{
//     const params = req.params;
//     const id = params.id;
//     res.end("Update post"+ id);
// });

// // khai bao route cho path: /v1/post/:id -DELETE
// app.delete("/v1/posts/:id",(req,res)=>{
//     const params = req.params;
//     const id = params.id;
//     res.end("Delete post"+ id);
// });
// // Cach 2:
// app.route("/v2/posts")
// .get((req,res)=>{
//     res.end("Danh sach post")
// })
// .post((req,res)=>{
//     res.end("Tao post")
// });

// // Cach 3:
// const v3Router = express.Router();
// // Get
// v3Router.get("/v3/posts",(req,res)=>{
//     res.end("Danh sach post")
// });
// app.use("/",v3Router);
//run app express
app.use("/",v1Router);
app.listen(3000,()=>{
    console.log("App is running on port 3000");
});