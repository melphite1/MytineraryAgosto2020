const Joi = require("@hapi/joi")



const validator = {
    validateUser: (req, res, next) => {

        const schema = Joi.object({
            name: Joi.string().required().trim(),
            lastname: Joi.string().required().trim(),
            email: Joi.string().email().trim(),
            password: Joi.string().trim().pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*[!"#$%&@*´¨()[\]]).{5,}/).required(),
            username: Joi.string().trim().min(4).required(),
            picurl: Joi.string().trim().required(),
            country: Joi.string()
        })

        const validation = schema.validate(req.body)
        if (validation.error !== undefined) {
            return res.json({
                success: false,
                error: "La contraseña tiene que tener mayusculas, minusculas y numeros",
                message: validation.error
            })
        }
        console.log("me valide")
        next()
    }
}


module.exports = validator