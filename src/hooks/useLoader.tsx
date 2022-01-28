import React, { useRef } from "react";
import Loader from "../Components/Loader";

export const useLoader = WrappedComponent => props => {
  return props.loading? <Loader /> : <WrappedComponent />
}