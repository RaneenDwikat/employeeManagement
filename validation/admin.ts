
import * as yup from 'yup';

export const  adminSchemaValidation= yup.object().shape({
    email:yup.string().email().required(),
    password:yup.string().min(8,'your password is too short').required('password required')
});


