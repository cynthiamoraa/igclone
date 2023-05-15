

module.exports = (req, res, next) => {
    const {authorization} = req.headers
    if(!authorization){
        return res.status(401).json({error: "You must be logged in"})
    }
    const token = authorization.replace("Bearer ", "")

}