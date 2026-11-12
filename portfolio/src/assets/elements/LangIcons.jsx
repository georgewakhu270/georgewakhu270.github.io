export default function LangIcons ({item}) {
    const IconComponent = item.icon
    return (
        <div className="">
            {IconComponent && <IconComponent className="w-full" color={item.color} />}
        </div>
    )
}