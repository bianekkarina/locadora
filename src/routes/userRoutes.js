import { Router } from "express"
import {
    store,
    index,
    show,
    update,
    destroy,
    signup,
    login
} from "../controller/userController"

import check_token from "../middleware/check_token"
import check_role from "../middleware/check_role"
import via_cep from "../middleware/via_cep"

const router = Router()

router.post("/", check_token,check_role(["ADM"]), via_cep, store)
router.get("/", check_token,check_role(["USU"]), index)
router.get("/:id", check_token,show)
router.put("/:id", check_token, via_cep, update)
router.delete("/:id", check_token, destroy)

router.post("/signup", signup)
router.post("/login", login)

export default router