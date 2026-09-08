import validator from 'validator';

export const validateUserData = (data) => 
{
    const errors = {};

    if (!data.name || validator.isEmpty(data.name.trim()))
    {
        errors.name = 'Name is required';
    }

    if (!data.email || !validator.isEmail(data.email)) 
    {
        errors.email = 'Valid email is required';
    }

    if (!data.password || !validator.isLength(data.password, { min: 6 })) {
        errors.password = 'Password must be at least 6 characters long';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};