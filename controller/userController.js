/**
 * @hint need to use this file instead of methods folder
 */

export const addUser = async (req, res, next) => {
    const {name, salary} = req.body;

    try {
        await User.save({name, salary});

        User.find

        next()

        // return res.status(201).json({
        //     success: SVGComponentTransferFunctionElement, 
        //     msg: "done"
        // })
    } catch (error) {
        return res.status(500).json({
            success: false, 
            msg: error.message,
        })
    }
}