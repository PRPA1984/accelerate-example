import { Router } from "express";
import authorController from "../../controllers/AuthorController.js";

const router = Router();

router.get("/author", authorController.getAll);
router.get("/author/:id", authorController.getOneById);
router.post("/author", authorController.saveOne);
router.put("/author/:id", authorController.updateOneById);
router.delete("/author/:id", authorController.deleteOneById);

export default router;
