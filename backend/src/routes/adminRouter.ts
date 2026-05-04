import { Router } from "express";
import {
    createAdminProduct,
    deleteAdminProduct,
    getImageKitAuth,
    listAdminProducts,
    updateAdminProduct,
} from "../controllers/adminController";
import { requireAdmin } from "../middleware/requireAdmin";

const router = Router();

router.use(requireAdmin);

router.get("/imagekit/auth", getImageKitAuth);
router.get("/products", listAdminProducts);
router.post("/products", createAdminProduct);
router.patch("/products/:id", updateAdminProduct);
router.delete("/products/:id", deleteAdminProduct);

export default router;
