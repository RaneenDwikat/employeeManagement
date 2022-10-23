const yup=require('yup')

exports.taskSchema= yup.object().shape({
    title: yup.string().min(5).required(),
    description: yup.string().max(500).notRequired(),
    status:yup.string().oneOf(["cancelled","completed","pending"]).required()

})
