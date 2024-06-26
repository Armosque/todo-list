

export const Month = () => {
    return (
        <section className="p4">
        <div className='border border-black rounded bg-gray04 p-2 text-left mb-2 flex justify-between gap-2'>
            <div className='bg-gray05 p-1 rounded min-w-[78px] text-center h-fit'>
                <span className='text-4xl' >Jul</span>
                <span className='text-xs font-medium'
                            style={{ writingMode: "vertical-lr" }}>2020</span>
                
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
