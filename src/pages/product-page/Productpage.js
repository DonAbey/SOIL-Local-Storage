import React from 'react'
import {useScrollToTop} from "../../fragments/customHook/useScrollToTop";

const Productpage = () => {
  useScrollToTop();

  return (
    <div className="text-center mt-5">
    <h2>Product Page</h2>
  </div>
    )
}

export default Productpage