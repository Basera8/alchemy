import '../../App.css';
import {useForm } from 'react-hook-form';
function Login(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='loginpage'>
            <div className='loginhead'>
                <h2>ALCHEMY</h2>
                <span>CAPITAL MANAGEMENT</span>
            </div>
        <div className='loginform'>
           <form onSubmit={handleSubmit(onSubmit)}>
            <div className="logindiv">
            
            <label>LOGIN AS </label>
            <div>
            <label><input
            {...register("loginAs")}
            type="radio"
            //value="hrAdmin"
            id="_hrAdmin"
            />HR Admin
            </label>
            <label>
            <input
            {...register("loginAs")}
            type="radio"
            //value="1234567"
            id="_distributor"
            />
            Distributor
            </label>
            </div>
        <div>
        <label>
        Email
        </label>
        <input defaultValue="abc@xyz.com" {...register("Email",{required:true})} />
        </div>
        <div>
       <label>Password</label>
      <input defaultValue="*********" {...register("password", { required: true })} />
      </div>
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      <div>
      <label><input
      {...register("rememberMe")}
      type="radio"
      value="rememberMe"
      id="_rememberMe"
      />Remember me</label>
       <a>Forgot password?</a></div>
      <input type="submit" />
   
    </div> 
    </form>
        </div>
        </div>)
}
export default Login