const router = require('express').Router();
let User = require('../models/user.model');
const auth = require("../middleware/auth");

router.route('/').get((req,res)=>{
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error:'+err))
});

router.route('/add').post((req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const newUser = new User({username,password});

    newUser.save()
    .then(()=> res.json('User added !'))
    .catch(err => res.status(400).json('Error: '+err))
})

// Hash the plain text password before saving
router.post("/login", async (req, res) => {
    console.log("req,session ", req.body);
    const { username, password } = req.body;
    try {
      const user = await User.findByCredentials(username, password);
      console.log('user ',user);
      const token = await user.generateAuthToken();
      console.log('user ',user);

      res.send(token);
    } catch (e) {
      res.status(400).send(e);
    }
  });

  router.get("/me",auth, async (req, res) => {
      console.log('dasdasdsadsa XXXX',req);

    try {
      const user = await User.getLoggedUser(req);
      console.log('user XXXX',user);

      if (!user) {
        return res.status(404).send();
      }
      const {username } = user;
      res.send({username});
    } catch (e) {
      res.status(500).send();
    }
  });
  
  

module.exports = router;