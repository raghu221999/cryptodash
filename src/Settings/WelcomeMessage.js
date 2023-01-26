import React from "react";
import { AppContext } from "../App/AppProvider";

export default function({firstVisit}) {
  return(
    <AppContext.Consumer>
      {({firstVisit}) =>
      firstVisit ? <div>
        Welcome to CrytoDash, Select Your Coins to Beign.{' '}
      </div> : null
    }
    </AppContext.Consumer>
  )
}