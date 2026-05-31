import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileSchema } from "./profileSchema";

import './profileform.css';

function ProfileForm() {

  // object created (useform to collect data)
  const {register,handleSubmit,formState: {errors} } = useForm({resolver : zodResolver(profileSchema)});

  function onSubmit(data){
    console.log(data);
  }

    
  return (
    <div>
      <div className="form-container">
        <h2>Profile Setting</h2>

        <form className="parent" onSubmit = {handleSubmit(onSubmit)}>
          <label>
            Role
            <select {...register("role")}>
              <option value="student">Student</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="other">Other</option>
            </select>

            <p>{errors.role?.message}</p>
          </label>

          <label>
            Daily Hours
            <input type="number" min="0" max="24" placeholder="Hours per day" {...register("goalHours")}/> <p>{errors.goalHours?.message}</p>
          </label>

          <input type="text" placeholder="Name" {...register("name")}/> <p>{errors.name?.message}</p>
          <input type="email" placeholder="Email" {...register("email")}/> <p>{errors.email?.message}</p>
          <input type="password" placeholder="Password" {...register("password")}/> <p>{errors.password?.message}</p>
          <input type="password" placeholder="Confirm Password" {...register("confirmPassword")}/> <p>{errors.confirmPassword?.message}</p>
          <button type="submit">Save Changes</button>
        </form>

      </div>
    </div>
  )
}

export default ProfileForm