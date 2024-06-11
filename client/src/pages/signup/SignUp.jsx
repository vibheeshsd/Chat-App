import React, { useState } from "react";
import GenderCheckBox from "./GenderCheckBox";
import { Link } from "react-router-dom";
import useSignUp from "../../hooks/useSignUp";

const SignUp = () => {

  const [inputs, setInputs] = useState({
      fullName : "",
      userName : '',
      password : '',
      confirmPassword : '',
      gender : ''
  })

  const {loading, signup} = useSignUp()

  const handleCheckBoxChange = (gender) =>{
    setInputs({...inputs, gender});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs)
  }

  return (
    <div className=" flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className=" w-full p-6 rounded-lg shadow-md bg-gray-600 bg-clip-padding ">
        <h1 className=" text-3xl font-semibold text-center text-white">
          SignUp
          <span className="text-white"> Wassup</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className=" label p-2">
              <span className="text-base label-text text-white">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full input input-bordered h-10"
              value={inputs.fullName}
              onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
            />
          </div>
          <div>
            <label className=" label p-2">
              <span className="text-base label-text text-white">
                UserName
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter UserName"
              className="w-full input input-bordered h-10"
              value={inputs.userName}
              onChange={(e) => setInputs({...inputs, userName:e.target.value})}
            />
          </div>
          <div>
            <label className=" label p-2">
              <span className="text-base label-text text-white">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e) => setInputs({...inputs, password:e.target.value})}
            />
          </div>
          <div>
            <label className=" label p-2">
              <span className="text-base label-text text-white">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Password again"
              className="w-full input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({...inputs, confirmPassword:e.target.value})}
            />
          </div>
          <GenderCheckBox onCheckBoxChange = {handleCheckBoxChange}  selectedGender = {inputs.gender}/>
          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-white"
          >
            Already have an account? Login
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2" disabled = {loading}>
              {loading ? <span className=" loading loading-spinner"></span> : "Sign Up"}  
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;









// STARTER CODE FOR THIS FILE
// import React from "react";
// import GenderCheckBox from "./GenderCheckBox";

// const SignUp = () => {
//   return (
//     <div className=" flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className=" w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding ">
//         <h1 className=" text-3xl font-semibold text-center text-white">
//           SignUp
//           <span className="text-white"> Wassup</span>
//         </h1>

//         <form>
//           <div>
//             <label className=" label p-2">
//               <span className="text-base label-text text-white">
//                 Full Name
//               </span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Full Name"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className=" label p-2">
//               <span className="text-base label-text text-white">
//                 UserName
//               </span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter UserName"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className=" label p-2">
//               <span className="text-base label-text text-white">
//                 Password
//               </span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className=" label p-2">
//               <span className="text-base label-text text-white">
//                 Confirm Password
//               </span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password again"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <GenderCheckBox/>
//           <a
//             href="/#"
//             className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-white"
//           >
//             Already have an account? Login
//           </a>
//           <div>
//             <button className="btn btn-block btn-sm mt-2">SignUp</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
