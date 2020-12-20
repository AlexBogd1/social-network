import React from "react";

export type FieldValidatorType = (value: string) => string | undefined

export const required: FieldValidatorType = (value)=> {
   return  value  ? undefined: 'Invalid Message'
}

export const maxLengthValidator = (max: number) => (value: string) => {
    return (value && value.length > max) ? `Must be ${max} characters or less`: undefined
}