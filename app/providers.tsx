"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode, useState } from "react"
import { State, WagmiProvider } from "wagmi"
import { getConfig } from "./utils/config"

const Providers = (props: { children: ReactNode, initialState?: State }) => {
    const [config] = useState(() => getConfig())
    const [queryClient] = useState(() => new QueryClient())
    return (
        <WagmiProvider config={config} initialState={props.initialState}>
            <QueryClientProvider client={queryClient}>
                {props.children}
            </QueryClientProvider>
        </WagmiProvider>
    )
}

export default Providers