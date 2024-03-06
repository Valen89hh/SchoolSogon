import { createContext, useContext, useState } from "react"


//Definimos el tipo de datos compartidos
interface ContextData{
    stateSideBar: boolean
    setStateSideBar: (param: boolean) => void
}

//Crear un contexto con un valor inicial
const SideBarContext = createContext<ContextData | undefined>(undefined)

//Componente proveedor que envuelve los elementos que compartiar datos
const SideBarProvider = ({children}: {children: React.ReactNode}) =>{
    //Stado compartido
    const [stateSideBar, setStateSideBar] = useState(false)

    //Valores comparidos
    const contextValue: ContextData = {
        stateSideBar,
        setStateSideBar
    }

    return <SideBarContext.Provider value={contextValue}>
        {children}
    </SideBarContext.Provider>
}

//Función para proveer los datos compartidos
const useSideBarContext = ()=>{
    const context = useContext(SideBarContext);

    if(!context){
        throw new Error(
            "useSideBarContext solo debe ser utilizado dentro SideBarProvider"
        )
    }

    return context
}

export {SideBarProvider, useSideBarContext}