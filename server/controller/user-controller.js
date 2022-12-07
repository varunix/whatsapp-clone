import User from "../model/User.js";


export const addUser = async (req, res) => {
    try {
       let findUser = await User.find({ sub: req.body.sub })?.[0];

       if(findUser) {
           res.status(200).json({ msg: 'User already exists' });
           return;
       }

       const newUser = new User(req.body);
       await newUser.save();
       return res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json(error.message);
    }
}
