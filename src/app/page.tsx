export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    Get started &nbsp;
                    <code className="font-mono font-bold">/docs</code>
                </p>
            </div>

            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
                <a href="/docs"
                   className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                   rel="noopener noreferrer">
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Access{" "} <span
                        className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"> -&gt; </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Swagger API Example
                    </p>
                </a>

                <a href="https://docs.bunhere.com/bun-scraping-api/api"
                   className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                   target="_blank"
                   rel="noopener noreferrer">
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Docs{" "} <span
                        className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"> -&gt; </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Find in-depth information about Bun API.
                    </p>
                </a>

                <a href="https://bunhere.com/"
                   className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                   target="_blank"
                   rel="noopener noreferrer">
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Readmore{" "} <span
                        className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"> -&gt; </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        bunhere.com
                    </p>
                </a>
            </div>
        </main>
    );
}
