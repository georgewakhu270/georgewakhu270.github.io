export default function ItemSpan({ text }) {
    return (
        <div className="p-2 flex items-center justify-center">
            <span className="border-t-2 border-solid w-full flex flex-grow border-black translate-y-[2px]"></span>
            <span className="m-2">{text}</span>
            <span className="border-t-2 border-solid w-full flex flex-grow border-black translate-y-[2px]"></span>
        </div>
    )
}