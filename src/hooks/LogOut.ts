
export const LogoOut = () =>{
  localStorage.removeItem("user")
  window.location.reload()  
}