import LangIcons from "./LangIcons"

export default function LangWrap({ title, items }) {
    return (
        <div className="">
            <h1 className="">{title}</h1>
            <div className="flex flex-wrap w-full justify-center gap-4">
                {items.map((item, index) => (
                    <div className="w-full sm:w-1/4" key={index}>
                        <LangIcons item={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}