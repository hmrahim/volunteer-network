import { useEffect, useState } from "react";

const useData = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, services);
  return [services,setServices]
};

export default useData
