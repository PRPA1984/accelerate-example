import { Router } from "express";
import bookController from "../../controllers/BookController.js";

const router = Router();

router.get("/book", bookController.getAll);
router.get("/book/:id", bookController.getOneById);
router.post("/book", bookController.saveOne);
router.put("/book/:id", bookController.updateOneById);
router.delete("/book/:id", bookController.deleteOneById);

export default router;
