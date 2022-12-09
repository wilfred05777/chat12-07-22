import React, { useState } from "react";
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e.target[0].value);
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      // Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          // Handle unsuccessful uploads
          setErr(true);
          console.log(error);
        },
        () => {
          // Handle successful uploads on complete

          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL
            });

            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL
            });

            await setDoc(doc(db, "userChats", res.user.id), {});
            navigate("/");
            // https://reactrouter.com/en/main/start/overview
          });
        }
      );
    } catch (err) {
      setErr(true);
    }

    // convert to  res = await createUserWithEmailAndPassword top

    //firebase.google.com/docs/auth/web/password-auth
    // https: createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;
    //     // ...
    //     console.log(user);
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // ..
    //   });

    // 1: https://firebase.google.com/docs/storage/web/upload-files
    // 2: https://firebase.google.com/docs/firestore/manage-data/add-data
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat Bot2022</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file" id="file">
            <img src={Add} alt="" />
            <span> Add an avatar</span>
          </label>
          <button>Sign Up</button>
          {err && <span>Something went wrong!</span>}
        </form>
        <p>
          You do have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
