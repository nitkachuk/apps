import React from "react";
import Loader from "../Components/Loader";

export const HOC = (WrappedComponent) => {
    return class extends React.Component  {
      render()  {
        return this.props.loading ? <Loader /> : <WrappedComponent />
      }
    }
}