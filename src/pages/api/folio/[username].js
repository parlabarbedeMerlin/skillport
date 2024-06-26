import { mw } from "@/api/mw"
import UserModel from "@/utils/database/model/userModel"

const handler = mw(async (req, res) => {
  if (req.method === "GET") {
    const { username } = req.query
    const user = await UserModel.findOne({ username })

    if (!user) {
      res.status(404).json({ message: "User not found" })
    }

    if (user.publishedFolio) {
      res.status(200).json({ message: "User found", folio: user.publishedFolio })
    }

    res.status(404).json({ message: "Folio not found" })
  }

  res.status(404).json({ message: "User not found" }, req)
})

export default handler
