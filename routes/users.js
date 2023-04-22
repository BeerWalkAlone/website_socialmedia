import expess from "express"
import {
    getUser,
    getUserFriends,
    addRemoveFriend,
} from "../controllers/user.js"
import { verifyToken } from "../middleware/auth.js"

const router = expess.Router()

/*READ*/
router.get("/:id", verifyToken, getUser)
router.get("/:id/friends", verifyToken, getUserFriends)

/*UPDATE*/
router.patch("/:id/:friendsId", verifyToken,addRemoveFriend)
export default router