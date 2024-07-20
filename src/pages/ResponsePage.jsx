import { useEffect, useState } from "react";

const ResponsePage = () => {
  const [email, setEmail] = useState("");
  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) setEmail(email);
  });
  return <>{email ? <>Welcome : {email}</> : <> Pls Make Sure You Are Logged in</>}</>;
};

export default ResponsePage;
