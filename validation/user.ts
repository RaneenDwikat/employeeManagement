import yup from 'yup'


export const userSchema = yup.object().shape({
    name: yup.string().required(),
    salary:yup.number().positive().default(1500).required()
})

