import { Context, useContext, createContext } from "react";

export const CmntContext = createContext(
    {
        cmnts: [{
            id: 1,
            cmnt : 'first todo',
            time: "1 month ago", 
            name: 'amyrobson', 
            likes: '12', 
            cmnt: 'cmnt',
             profile: 'img.src'
        }],
        addCmnt: (id) => { },
        editCmnt: (id, cmnt) => { },
        deleteCmnt: (id) => { },
        replyCmnt: (id) => { }



    })

export const useCmnt = () => {
    return useContext(CmntContext)
}

export const CmntProvider = CmntContext.Provider