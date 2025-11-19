import "./Letter.css"

export default function Letter({ content }: { content: string }) {

    return <div style={{
        background: "repeat url(/paper-transparent.png) 0 0",
        backgroundColor: "#EBEBEB",
        backgroundRepeat: "repeat"
    }} className="text-black paper">

        {content}

    </div>

}