import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginUser = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful");
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  const createAccount = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created");
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",background:"#eee"}}>

      <div style={{background:"#fff",padding:"30px",borderRadius:"10px",width:"350px",textAlign:"center"}}>

        <h2>Transport Safety Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          style={{width:"100%",padding:"10px",marginTop:"10px"}}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          style={{width:"100%",padding:"10px",marginTop:"10px"}}
        />

        <button
          onClick={loginUser}
          style={{width:"100%",padding:"10px",marginTop:"15px",background:"#2b6de0",color:"#fff",border:"none"}}
        >
          Login
        </button>

        <button
          onClick={createAccount}
          style={{width:"100%",padding:"10px",marginTop:"10px",background:"#2e8b57",color:"#fff",border:"none"}}
        >
          Create Account
        </button>

      </div>

    </div>
  );
}

export default Login;