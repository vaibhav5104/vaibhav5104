
const validate = (schema) =>async (req,res,next) => {

    try{
        const parseBody = await schema.parseAsync(req.body)
        req.body = parseBody
        next()
    }catch(err){
        // console.log(e);
        const status = 422
        const message = "FIll the details properly"
        const extraDetails = err.errors[0].message

        const error = {
            status,message,extraDetails,
        }

        console.log(error);
        // res.status(400).json({msg : message})
        next(error)
    }

}

module.exports = validate