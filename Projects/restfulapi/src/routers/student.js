const express = require("express")
const Student = require("../models/students")

// 1: create a new router
const router = new express.Router()


// create a new students through promises

// router.post("/students",(req,res) => {
//     console.log(req.body);
//     const user = new Student(req.body)
//     user.save().then(()=>{
//         res.status(201).send(user)
//     }).catch((e) => {
//         res.status(400).send(e)
//     })

    // res.send("hello from the other sides")


// Response Handling: You should send only one response per request. 
// In this case, either res.status(201).send(user) if the operation is successful, 
// or res.status(400).send(e) if there's an error.

// Removed Duplicate Response: The res.send("hello from the other sides") 
// is redundant and causes the error, so it has been removed.

// })


// post method through async await

router.post("/students",async(req,res) => {
    const user = new Student(req.body)

    try{
        const createUser =await user.save()
        res.status(201).send(createUser)
    }catch(e){       
        res.status(400).send(e)
    }
})

// get the students 
router.get("/students", async(req,res)=>{
    try{
        const studentData = await Student.find()
        res.status(201).send(studentData)
    }catch(e){
        res.status(400).send(e)
    } 
})

// get the student by ID
router.get("/students/:id", async (req, res) => {
    try {
        const studentData = await Student.findById(req.params.id);

        if (!studentData) {
            return res.status(404).send();  // Send 404 if the student is not found
        }

        res.status(200).send(studentData);  // Use 200 for successful data retrieval
    } catch (e) {
        res.status(400).send(e);  
    }
});

// get the student by name
router.get("/students/name/:name", async (req, res) => {
    try {
        const _name = req.params.name
        const studentData = await Student.findOne({name : _name});

        if (!studentData) {
            return res.status(404).send();  // Send 404 if the student is not found
        }

        res.status(200).send(studentData);  // Use 200 for successful data retrieval
    } catch (e) {
        res.status(400).send(e);  
    }
});



// update the students by its id
router.patch("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const studentData = await Student.findByIdAndUpdate(_id, req.body, {
            new: true,  // Return the updated document
            runValidators: true,  // Ensure validation is run on the update
        });

        if (!studentData) {
            return res.status(404).send();  // If no document was found, send a 404 response
        }

        res.send(studentData);
    } catch (e) {
        res.status(400).send(e);
    }
});

// update the students by its name
router.patch("/students/name/:name", async (req, res) => {
    try {
        const _name = req.params.name;
        const studentData = await Student.findOneAndUpdate({name:_name}, req.body, {
            new: true,  // Return the updated document
            runValidators: true,  // Ensure validation is run on the update
        });

        if (!studentData) {
            return res.status(404).send();  // If no document was found, send a 404 response
        }

        res.send(studentData);
    } catch (e) {
        res.status(400).send(e);
    }
});

// delete the student by its name
router.delete("/students/name/:name",async (req,res) => {

    const _name = req.params.name
    const deleteStudent = await Student.findOneAndDelete({name : _name})

    try{
    if (!deleteStudent) {
        return res.status(404).send();
    } else {
        res.status(200).send(deleteStudent); // Use 200 status code for successful deletion
    }
    } catch (e) {
        res.status(400).send(e);
    }

})

// delete the student by its id
router.delete("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteStudent = await Student.findByIdAndDelete(_id);

        if (!deleteStudent) {
            return res.status(404).send();
        } else {
            res.status(200).send(deleteStudent); // Use 200 status code for successful deletion
        }
    } catch (e) {
        res.status(400).send(e);
    }
});




module.exports = router