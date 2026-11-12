export default function LangIcons ({item}) {
    const IconComponent = item.icon
    return (
        <div className="">
            {IconComponent && <IconComponent />}
        </div>
    )
}