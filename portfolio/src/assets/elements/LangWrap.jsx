import LangIcons from "./LangIcons"

export default function LangWrap({ title, items }) {
    return (

        <div className="">
            <h1 className="">{title}</h1>
            <div className="flex w-full justify-center">
                {items.map((item, index) => (
                    <div className="w-1/4" key={index}> <LangIcons  item={item}/></div>
                    
                ))}
            </div>
        </div>

    )
}