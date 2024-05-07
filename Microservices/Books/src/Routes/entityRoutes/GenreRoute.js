import { Router } from "express";
import genreController from "../../controllers/GenreController.js";

const router = Router();

router.get("/genre", genreController.getAll);
router.get("/genre/:id", genreController.getOneById);
router.post("/genre", genreController.saveOne);
router.put("/genre/:id", genreController.updateOneById);
router.delete("/genre/:id", genreController.deleteOneById);

export default router;
