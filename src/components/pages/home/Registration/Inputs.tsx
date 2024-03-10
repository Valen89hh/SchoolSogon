import { UbigeoType, UbigeoSelectType } from "@/components/domain/local/UbigeoModels";
import Image from "next/image";
import { useState } from "react";

interface InputProps {
    type?: string,
    value: string,
    placeHolder: string,
    onValueChange: (param: string) => void,
    onFocus?: () => void
}

const InputText: React.FC<InputProps> = ({
    type = "text",
    value,
    placeHolder,
    onValueChange,
    onFocus
}) => {
    return (<div onFocus={onFocus} className="rounded-full bg-white py-2 px-6">
        <input type={type} value={value} onChange={(e) => onValueChange(e.target.value)}
            className="font-light text-secondary-dark placeholder:text-secondary-light w-full outline-none"
            placeholder={placeHolder}
        />
    </div>);
}





interface InputSelectOptionProps {
    selectOption: UbigeoType,
    setSelectOption: (param: UbigeoType) => void
    listOptions: UbigeoType[],
    visbleOptions: UbigeoSelectType,
    typeOptions: UbigeoSelectType
    setVisbleOptions: (param: UbigeoSelectType) => void,
    placeholder: string

}

const InputSelectOption: React.FC<InputSelectOptionProps> = ({
    selectOption,
    setSelectOption,
    listOptions,
    visbleOptions,
    typeOptions,
    setVisbleOptions,
    placeholder
}) => {

    const [searchOption, setSearchOption] = useState("")


    return (<div className="relative ">
        <div className={`${selectOption ? "text-secondary-dark" : "text-secondary-light"}  rounded-full bg-white py-2 px-6  cursor-pointer font-[300] flex  justify-between items-center`}
            onClick={() => {
                console.log()
                console.log(visbleOptions == typeOptions && visbleOptions != "")
                setVisbleOptions(visbleOptions === "" || visbleOptions != typeOptions ? typeOptions : "")
            }}
        >
            {selectOption ? selectOption.name : placeholder}
            <Image src={"/icons/dropArrow.svg"} alt="drop" width={18} height={18} />
        </div>
        <div className={`absolute top-full z-10 left-0 mt-2 w-full px-5 ${visbleOptions == typeOptions ? "block" : "hidden"}`}>
            <ul onFocus={() => console.log("Focus")} className="bg-white border-solid border-secondary-light rounded-md  border-[1px] max-h-40 overlv overflow-y-auto font-light text-secondary-light">
                <div className="flex px-2 gap-2 outline-none sticky top-0 bg-white py-2">
                    <Image
                        src="/icons/Search.svg"
                        alt='User'
                        height={15}
                        width={15}
                    />
                    <input type="text" className="w-full font-light outline-none " placeholder="Buscar" value={searchOption} onChange={(e) => setSearchOption(e.target.value)} />
                </div>
                {listOptions.map((opt, i) => (

                    <li
                        key={i}
                        className={`bg-white hover:bg-secondary-light
                         hover:text-white  p-2
                         ${opt?.name.toLowerCase().startsWith(searchOption.toLowerCase()) ? "block" : "hidden"}`}
                        onClick={() => {
                            setSelectOption(opt)
                            setVisbleOptions("")
                            setSearchOption("")
                        }}
                    >
                        {opt?.name}
                    </li>
                ))}


            </ul>
        </div>
    </div>);
}


export { InputText, InputSelectOption };