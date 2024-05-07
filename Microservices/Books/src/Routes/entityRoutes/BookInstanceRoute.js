import { Router } from "express";
import bookInstanceController from "../../controllers/BookInstanceController.js";

const router = Router();

router.get("/bookInstance", bookInstanceController.getAll);
router.get("/bookInstance/:id", bookInstanceController.getOneById);
router.post("/bookInstance", bookInstanceController.saveOne);
router.put("/bookInstance/:id", bookInstanceController.updateOneById);
router.delete("/bookInstance/:id", bookInstanceController.deleteOneById);

export default router;
