import { useEffect, useState } from 'react';
import Loading from '../Sheard/Loading/Loading';


const useSeller = (email) => {

  const [isSeller, setIsSeller] = useState(null);
  const [sellerLoading, setSellerLoader] = useState(true);

  useEffect(() => {

    fetch(
      `https://car-sell-buy-server-kowsarahammd80.vercel.app/sellerState/${email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setIsSeller(data);
        setSellerLoader(false);
      });

  }, [email]);



  return [isSeller, sellerLoading];

};

export default useSeller; 