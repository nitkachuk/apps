import React, { useState } from "react";
import Loader from "../Components/Loader";


export const useLoader = (WrappedComponent: React.FC) => {
  const [ flag, setFlag ] = useState<boolean>(true)
  const loaderHandler = (isLoading: boolean) => {
    setFlag( isLoading )
  }
  const Component = flag ? <Loader /> : <WrappedComponent />

  return {
    loaderHandler,
    Component
  }
}