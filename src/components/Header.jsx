// eslint-disable-next-line react/prop-types
export const Header = ({ tab, setTab, resetApp }) => {
    return (
        <header className="border-b border-slate-950 mb-4">
            <nav className="max-w-[60%] m-auto">
                <ul className="flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap text-center gap-3 text-base m-auto text-gray02 [&>li]:py-4 [&>li]:w-full sm:[&>li]:w-auto [&>li]:cursor-pointer">
                    <li className={tab === 'day' ? 'current' : ''}
                        onClick={() => setTab('day')}>Day</li>
                    <li className={tab === 'week' ? 'current' : ''}
                        onClick={() => setTab('week')}>Week</li>
                    <li className={tab === 'month' ? 'current' : ''}
                        onClick={() => setTab('month')}>Month</li>
                    <li className={tab === 'year' ? 'current' : ''}
                        onClick={() => setTab('year')}>Year</li>
                    <li 
                        className={`${tab === 'reset' ? 'current2' : ''} py-2 hover:text-blue-400`} 
                        onClick={resetApp}>
                        Reset
                    </li>
                </ul>
            </nav>
        </header>
    )
}
