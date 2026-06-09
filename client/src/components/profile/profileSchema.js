import { z } from "zod";

export const profileSchema = z.object({

    name : z.string()
          .min(2,"Name should be at least 2 char")
          .max(50,"Name should be less than 50 char"),
    email : z.string()
          .email("Invalid email adress"),
    password : z.string()
          .min(6,"Password should be minimum 6 character")
          .regex(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
          "Password must contain uppercase, lowercase and a number"
          ),
    confirmPassword : z.string()
          .min(6,"Password should be minimum 6 character"),
    role : z.enum(["student","developer","designer","other"],{message : "Please select from the options"}) ,
    goalHours : z.coerce.number()
           .min(1,"should be at least 1 hr")
           .max(24,"should be less than 24 hr")

})
.refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"]
    })