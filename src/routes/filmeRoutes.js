import { Router } from "express"
import {
    store,
    index,
    show,
    update,
    destroy,
    signup,
    login
} from "../controller/filmesController"

import check_token from "../middleware/check_token"
import check_role from "../middleware/check_role"

const router = Router()

router.post("/", check_token,check_role(["ADM","USU"]), store)
router.get("/", check_token,check_role(["ADM","USU"]), index)
router.get("/:id", check_token,check_role(["ADM"]), show)
router.put("/:id", check_token,check_role(["ADM"]), update)
router.delete("/:id", check_token,check_role(["ADM"]), destroy)


export default router