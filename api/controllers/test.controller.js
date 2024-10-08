import jwt from 'jsonwebtoken';
export  const shouldBeLoggedIn = async (req, res, next) => {

    console.log(req.userId)
    // const token =req.cookies.token;
    // if(!token) return res.status(401).json({message:"Unauthenticated access"});

    // jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
    //     if(err) return res.status(403).json({message:"Token is not Valid!"});
    // });
    res.status(200).json({message:"You are Authenticated!"});
    
}
export  const shouldBeAdmin = async (req, res, next) => {
    const token =req.cookies.token;

    if(!token) return res.status(401).json({message:"Not Authenticated!"});

    jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
        if(err) return res.status(403).json({message:"Token is not Valid!"});
        if(!payload.isAdmin) return res.status(403).json({message:"You are not an Admin!"});
    });
    res.status(200).json({message:"You are Authenticated!"});

}