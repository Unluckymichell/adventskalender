import "./Letter.css"

export default function Mystery({ message }: { message: string }) {

    return <div className="bg-red-800 text-white text-2xl font-semibold border shadow-md p-4 rounded-xl">

        {message}

    </div>

}