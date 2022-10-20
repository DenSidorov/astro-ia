import { useState } from 'preact/hooks';

export default function Visible() {

    const [count, setCount] = useState(42)

    return (
        <div className="border p-3">
            <div className="text-lg">
                {count}
            </div>

            <button
                className="border p-1 bg-red-300"
                onClick={() => setCount(count+1)}
            >
                Increment
            </button>
        </div>
    )
}