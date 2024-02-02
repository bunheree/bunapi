'use client'
import { useEffect, useState } from "react"

type BatteryPercent = 100 | 75 | 50 | 25 | 0;

function Battery({ percent }: { percent: BatteryPercent }) {
    const [percentWidth, setPercentWidth] = useState('')
    const [batteryColor, setBatteryColor] = useState('')

    useEffect(() => {
        switch (percent) {
            case 100:
                setPercentWidth('w-full')
                setBatteryColor('bg-green-400')
            case 75:
                setPercentWidth('w-3/4')
                setBatteryColor('bg-green-400')
            case 50:
                setPercentWidth('w-1/2')
                setBatteryColor('bg-yellow-400')
            case 25:
                setPercentWidth('w-1/4')
                setBatteryColor('bg-gray-400')
            default:
                setPercentWidth('w-1')
                setBatteryColor('bg-red-400')
        }
    }, [])

    return (
        <div className="flex flex-wrap justify-center">
            <div className="w-48 flex justify-center">
                <div className="shadow w-1/2 rounded border-2 border-gray-400 flex my-1 relative">
                    <div className="border-r-8 h-6 rounded-r absolute flex border-gray-400 ml-24 mt-2 z-10"></div>
                    <div className={`cursor-default text-xs font-bold leading-none flex items-center justify-center m-1 py-4 text-center text-white ${batteryColor} ${percentWidth}`}>
                        {percent == 0
                            ?
                            <div className="absolute left-0 mx-8 text-red-400"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path></svg></div>
                            :
                            <div className="absolute left-0 mx-8 text-gray-700">{percent}%</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Battery