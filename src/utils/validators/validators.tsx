import React from "react";

export const required = (value:string)=> {
   return  value  ? undefined: 'Invalid Message'
}

export const maxLengthValidator = (max: number) => (value: string) => {
    return (value && value.length > max) ? `Must be ${max} characters or less`: undefined
}