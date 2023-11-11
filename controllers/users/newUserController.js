const User = require("../../models/User")

const post = async (req, res) => {
    // Check if username not exist
    const checkUser = await User.findOne({
        where : {
            username : req.body.username
        }
    })

    if(checkUser) return res.json({ ok : false })

    // Create user
    const newUser = await User.create({
        username : req.body.username,
        password : req.body.password
    })

    res.json({ok : true, user : newUser})
}

module.exports = {
    post
}