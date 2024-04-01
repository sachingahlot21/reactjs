import { createContext, useContext } from "react";

export const dataContext = createContext(
    {

        mainData: [

        ]
        ,
        addData: (data) => { }

    })

    export const  useData = () => {
        return useContext(dataContext)
    }

    export const DataProvider = dataContext.Provider