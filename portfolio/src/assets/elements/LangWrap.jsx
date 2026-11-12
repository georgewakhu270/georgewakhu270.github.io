import LangIcons from "./LangIcons"

export default function LangWrap({ title, items }) {
    return (

        <div className="">
            <h1 className="">{title}</h1>
            <div className="">
                {items.map((item, index) => (
                    <LangIcons key={index} item={item}/>
                ))}
            </div>
        </div>

    )
}