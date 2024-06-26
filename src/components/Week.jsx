

export const Week = () => {
    return (
        <section className="p4">
            <div className='border border-black rounded bg-gray04 p-2 text-left mb-2 flex justify-between gap-2'>
                <div className='bg-gray05 p-1 rounded min-w-[78px] text-center h-fit'>
                    <span >Domingo</span>
                    <div className='flex justify-center items-center'>
                        <span className='text-4xl'>10</span>
                        <span className='text-xs font-medium'
                                style={{ writingMode: "vertical-lr" }}>Jul</span>
                    </div>
                </div>
                <div className="flex flex-wrap gap-1 justify-end">
                    <span  className='border border-black px-2 rounded bg-gray03 inline-block h-fit'>task one</span>
                    <span>task two</span>
                    <span>task three</span>
                </div>
            </div>

        </section>
    )
}
