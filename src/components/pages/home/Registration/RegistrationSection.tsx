


import ButtonPrimary from "@/components/widgets/buttons/ButtonPrimary";
import ContainerCenter from "@/components/widgets/containers/ContainerCenter";
import ContainerFlow from "@/components/widgets/containers/ContainerFlow";
import Title from "@/components/widgets/texts/Title";
import { FormEvent, useEffect, useState } from "react";
import { InputSelectOption, InputText } from "./Inputs";
import { DepartamentoModel, DistritoModel, ProvinciaModel, UbigeoType, UbigeoSelectType } from "@/components/domain/local/UbigeoModels";
import dataDepartamentos from "@/data/ubigeo/departamentos.json"
import dataDistritos from "@/data/ubigeo/distritos.json"
import dataProvincias from "@/data/ubigeo/provincias.json"


const RegistrationSection = () => {

    const [fullName, setFullName] = useState("")
    const [numberPhone, setNumberPhone] = useState("")
    const [parentsName, setParentsName] = useState("")


    const [departamento, setDepartamento] = useState<UbigeoType>(null)
    const [provincias, setProvincias] = useState<UbigeoType>(null)
    const [distritos, setDistritos] = useState<UbigeoType>(null)


    const [listDepartamentos, setListDetpartamento] = useState<DepartamentoModel[]>(dataDepartamentos)
    const [listProvincias, setLIstProvincias] = useState<ProvinciaModel[]>(dataProvincias)
    const [listDistritos, setListDistritos] = useState<DistritoModel[]>(dataDistritos)


    const [visibleOptions, setVisibleOptions] = useState<UbigeoSelectType>("")



    useEffect(() => {
        const lt = dataProvincias.filter((dp) => dp.department_id == departamento?.id)
        if (lt.length > 0) {
            console.log(lt)
            console.log("Entrando")
            setLIstProvincias(lt)
        }
    }, [departamento])

    useEffect(() => {
        const lt = dataDistritos.filter((dp) => dp.province_id == provincias?.id)
        if (lt.length > 0) {
            console.log(lt)
            console.log("Entrando")
            setListDistritos(lt)
        }
    }, [provincias])

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("Enviando")
    }

    return (
        <ContainerFlow className="bg-secondary px-3 py-5">
            <ContainerCenter>
                <div className="flex flex-col justify-center items-center mb-6">
                    <Title text="Registro" color="text-white" />
                    <span className="text-white font-light ">Formulario de registro PPDB</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-[7rem] ">
                    <img src="/drawable/registration/register.svg" alt="srwe" />
                    <form onSubmit={handleSubmit} action="#" className="flex-col flex gap-4 ">
                        <InputText
                            placeHolder="Nombres y Apellidos"
                            value={fullName}
                            onValueChange={setFullName}
                            onFocus={() => {
                                setVisibleOptions("")
                            }}
                        />
                        <InputText
                            placeHolder="Nombre del Apoderado"
                            value={parentsName}
                            onValueChange={setParentsName}
                            onFocus={() => {
                                setVisibleOptions("")
                            }}
                        />
                        <InputText
                            placeHolder="Numero Telefonico"
                            value={numberPhone}
                            onValueChange={setNumberPhone}
                            onFocus={() => {
                                setVisibleOptions("")
                            }}
                        />
                        <InputSelectOption
                            typeOptions="departamento"
                            selectOption={departamento}
                            setSelectOption={setDepartamento}
                            listOptions={listDepartamentos}
                            setVisbleOptions={setVisibleOptions}
                            visbleOptions={visibleOptions}
                            placeholder="Selecciona tu Departamento"
                        />
                        <InputSelectOption
                            selectOption={provincias}
                            setSelectOption={setProvincias}
                            listOptions={listProvincias}
                            typeOptions="provincia"
                            setVisbleOptions={setVisibleOptions}
                            visbleOptions={visibleOptions}
                            placeholder="Selecciona tu Provincia"
                        />
                        <InputSelectOption
                            selectOption={distritos}
                            setSelectOption={setDistritos}
                            listOptions={listDistritos}
                            typeOptions="distrito"
                            setVisbleOptions={setVisibleOptions}
                            visbleOptions={visibleOptions}
                            placeholder="Seleciona tu Distrito"
                        />
                        <ButtonPrimary onClick={() => { }} className="w-full py-2 mt-10 font-light text-[1.2rem] ">
                            Registrate ahora
                        </ButtonPrimary>
                    </form>
                </div>
            </ContainerCenter>
        </ContainerFlow>
    );
}

export default RegistrationSection;