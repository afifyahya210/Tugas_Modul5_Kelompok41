import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const isLoginTrue = JSON.parse(localStorage.getItem("login"));

  const userNotLogin = () => (
    <>
      <h2>Silahkan tekan tombol diatas untuk Login</h2>
      <h4>
        Jika anda sudah punya akun, silahkan <Link to="/login">Login</Link>
      </h4>
      <h4>
        Anda tidak punya akun? silahkan {" "}
        <Link to="/register">Daftar</Link>
      </h4>
    </>
  );
  return (
    <div style={{ marginTop: "100px" }}>
      {isLoginTrue && isLoginTrue.userLogin ? (
        <h2>Selamat datang</h2>
      ) : (
        <>{userNotLogin()}</>
      )}
    </div>
  );
};

export default Home;
