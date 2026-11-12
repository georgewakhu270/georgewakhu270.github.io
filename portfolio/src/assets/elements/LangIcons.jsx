export default function LangIcons({ item }) {
    const IconComponent = item.icon
    return (
        <div className="">
            {IconComponent &&
                <IconComponent className="w-full h-auto max-h-40 object-contain" color={item.color} />
            }
        </div>
    )
}