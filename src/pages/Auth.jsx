import React from 'react'

const Auth = () => {
  const styles = {
    page: {
      width: "100%",
      height: "100vh",
      backgroundImage: "url(' background.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: "40px",
    },
    title: {
      fontFamily: "Georgia, serif",
      fontSize: "40px",
      fontWeight: "bold",
      color: "black",
      marginBottom: "30px",
    },
    card: {
      width: "430px",
      backgroundColor: "#0b132b",
      color: "white",
      padding: "40px",
      borderRadius: "6px",
      textAlign: "center",
      boxShadow: "0px 0px 20px rgba(0,0,0,0.4)",
    },
    icon: {
      fontSize: "40px",
      marginBottom: "10px",
    },
    heading: {
      fontSize: "28px",
      marginBottom: "25px",
    },
    input: {
      width: "100%",
      height: "38px",
      marginTop: "15px",
      borderRadius: "4px",
      border: "none",
      paddingLeft: "12px",
      fontSize: "15px",
    },
    passwordRow: {
      fontSize: "12px",
      display: "flex",
      justifyContent: "space-between",
      marginTop: "5px",
      padding: "0 5px",
    },
    forgot: {
      color: "#cfcfcf",
      textDecoration: "none",
    },
    loginBtn: {
      width: "100%",
      height: "42px",
      marginTop: "20px",
      backgroundColor: "#0f7b0f",
      border: "none",
      color: "white",
      fontSize: "17px",
      borderRadius: "4px",
      cursor: "pointer",
    },
    divider: {
      margin: "18px 0",
      fontSize: "14px",
  
    },
    googleBtn: {
      width: "100%",
      height: "42px",
      backgroundColor: "white",
      color: "black",
      border: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "16px",
    },
    googleLogo: {
      width: "22px",
    },
    register: {
      marginTop: "20px",
      fontSize: "15px",
    },
    registerLink: {
      color: "blue",
      textDecoration: "none",
      fontWeight: "bold",
    },
  };



  return (
    <div style={styles.page}>
      <h1 style={styles.title}>BOOK STORE</h1>

      <div style={styles.card}>
        <div style={styles.icon}>
          <i className="fa fa-user"></i>
        </div>

        <h2 style={styles.heading}>Login</h2>

        <form>
          <input type="email" placeholder="Email Id" style={styles.input} />
          <input type="password" placeholder="password" style={styles.input} />

          <div style={styles.passwordRow}>
            <small>Never share your password with others</small>
            <a href="#" style={styles.forgot}>Forget Password</a>
          </div>

          <button type="button" style={styles.loginBtn}>
            Login
          </button>
        </form>

        <div style={styles.divider}>
          ----------------------- or -----------------------
        </div>

        <button style={styles.googleBtn}>
          <img
            src="https://imgs.search.brave.com/Z08bV_EfLLO-GDZ9lbeiLS8ubzadLSURG0Wbm6jNMPM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvZ29vZ2xlLWxv/Z28taWNvbi1zZXQt/Z29vZ2xlLWljb24t/c2VhcmNoaW5nLWlj/b25zLXZlY3Rvcl85/ODE1MzYtNDU0Lmpw/Zz9zZW10PWFpc19o/eWJyaWQmdz03NDAm/cT04MA"
            alt="Google"
            style={styles.googleLogo}
          />
          Sign in with Google
        </button>

        <p style={styles.register}>
          Are you a New User ?{" "}
          <a href="/register" style={styles.registerLink}>Register</a>
        </p>
      </div>
    </div>
  )
}

export default Auth