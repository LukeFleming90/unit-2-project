/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////

const express = require('express');
const Fruit = require('../models/fruit');

/////////////////////////////////////////////
// Create Route
/////////////////////////////////////////////

const router = express.Router();

/////////////////////////////////////////////
// Router Middleware
/////////////////////////////////////////////

// Authorization Middleware

router.use((req, res, next) => {
    if (req.session.loggedIn) {
      next();
    } else {
      res.redirect("/user/login");
    }
});

////////////////////////////////////////////
// Routes
////////////////////////////////////////////

// Index Route

router.get("/", (req, res) => {
    // find all the fruits
    Fruit.find({ username: req.session.username })
      // render a template after they are found
      .then((fruits) => {
        console.log(fruits);
        res.render("fruits/Index", { fruits });
      })
      // send error as json if they aren't
      .catch((error) => {
        console.log(error);
        res.json({ error });
      });
});

// router.get('/', (req,res) => {
//     Fruit.find({})
//     .then((fruits) => {
//         res.render("fruits/Index", { fruits })
//     })
//     .catch((error) => {
//         res.status(400).json({ error})
//     })
// })

// New Route

router.get('/new', (req,res) => {
    res.render('fruits/New')
})

// Delete Route

router.delete('/:id', (req,res) => {
    const { id } = req.params;
    Fruit.findByIdAndDelete(id)
    .then(() => {
        res.redirect('/fruits')
    })
    .catch((error) => {
        res.status(400).json({ error });
    })
})

// Update Route

router.put('/:id', (req,res) => {
    const { id } = req.params;
    req.body.readyToEat = req.body.readyToEat === 'on' ? true : false

    Fruit.findByIdAndUpdate(id, req.body, { new: true })
    .then(() => {
        res.redirect(`/fruits/${id}`)
    })
    .catch((error) => {
        res.status(400).json({ error })
    })
})

// Create Route

router.post("/", (req, res) => {
    // check if the readyToEat property should be true or false
    req.body.readyToEat = req.body.readyToEat === "on" ? true : false;
    // add username to req.body to track related user
    req.body.username = req.session.username;
    // create the New fruit
    Fruit.create(req.body)
      .then((fruits) => {
        // redirect user to Index page if successfully created item
        res.redirect("/fruits");
      })
      // send error as json
      .catch((error) => {
        console.log(error);
        res.json({ error });
      });
});

// router.post('/', (req,res) => {
//     req.body.readyToEat = req.body.readyToEat === 'on' ? true : false

//     Fruit.create(req.body)
//     .then((createdFruit) => {
//         res.redirect(`/fruits/${createdFruit._id}`)
//     })
//     .catch((error) => {
//         res.status(400).json({ error })
//     })
// })

// Edit Route

router.get('/:id/edit', (req,res) => {
    const { id } = req.params;
    Fruit.findById(id)
    .then((fruit) => {
        res.render('fruits/Edit', { fruit })
    })
    .catch((error) => {
        res.status(400).json({ error })
    })
})

// Show Route

router.get('/:id', (req,res) => {
    // const id = req.params.id
    const { id } = req.params;

    Fruit.findById(id)
    .then((fruit) => {
        res.render('fruits/Show', { fruit })
    })
    .catch((error) => {
        res.status(400).json({ error })
    })

})

module.exports = router;