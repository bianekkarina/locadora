import { Router } from "express"
import {
    store,
    index,
    show,
    showComplete,
    update,
    destroy,
} from "../controller/aluguelController.js"

import check_token from "../middleware/check_token.js"
import check_role from "../middleware/check_role.js"

const router = Router()


router.post("/", check_token,check_role(["ADM","USU"]), store)
router.get("/", check_token,check_role(["ADM","USU"]), index)
router.get("/:id", check_token,check_role(["ADM"]), show)
router.get("/complete/:id", check_token,check_role(["ADM", "USU"]), showComplete)
router.put("/:id", check_token,check_role(["ADM"]), update)
router.delete("/:id", check_token,check_role(["ADM"]), destroy)


export default router
