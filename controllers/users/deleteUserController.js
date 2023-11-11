const User = require("../../models/User")

const post = async (req, res) => {
    // Check if user exist
    const checkUser = await User.findOne({
        where : {
            username : req.body.username
        }
    })

    if(!checkUser) return res.json({ ok : false })

    // Delete
    await checkUser.destroy()
    res.json({ok : true})
}

module.exports = {
    post
}