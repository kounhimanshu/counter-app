
function ResetButton({ resetMethod }) {
    return (
        <>
            <button className='resetButton'
                onClick={resetMethod}>
                Reset
            </button>
        </>
    )
}
export default ResetButton