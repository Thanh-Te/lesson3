import express from 'express';
const router = express.Router();
// Khai bao routers
// khai bao route cho path: /v1/post -GET
router.get("/v1/posts",(req,res)=>{
    res.end("Danh sach posts");
});
// KHai bao route cho path: v1/posts - POST
router.post("/v1/posts",(req,res)=>{
    res.end("Tao post");
});
export default router;