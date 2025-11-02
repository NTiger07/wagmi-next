"use client"
import { useConnect } from "wagmi"


const Connect = () => {
    const { connectors, connect } = useConnect()
    return (
        <div className="flex flex-col gap-3">
            {connectors.map((connector) => (
                <span
                    className="cursor-pointer p-3 bg-amber-700 rounded"
                    key={connector.uid}
                    onClick={() => connect({connector})}
                >
                    {connector.name}
                </span>
            ))}
        </div>
    )
}

export default Connect