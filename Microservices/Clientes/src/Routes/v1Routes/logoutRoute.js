import { Router } from "express";
	import validateAuth from "../../middlewares/validateAuth.js";

const router = Router();

router.get("/logout/:id",
	[validateAuth],
  (req, res)=>{res.send('NOT IMPLEMENTED')});


export default router;
