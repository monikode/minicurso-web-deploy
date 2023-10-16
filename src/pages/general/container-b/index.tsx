import "/node_modules/primeflex/primeflex.css"


export function ContainerB() {

    const style = `
    w-full h-full h-screen flex flex-column border-orange-500
    surface-overlay
    border-3
    border-round
    font-bold m-2
    p-2
    flex
    align-items-start
    justify-content-center
    gap-3
    
    `

    const firstRowStyle = `
    justify-content-center
    flex
    flex-row
    w-full
    mb-3
    gap-3
    `

    const secondRowStyle = `
    justify-content-between
    flex
    flex-row
    w-full
    gap-3
    `

    const thirdRowStyle = `
    justify-content-between
    flex
    flex-row
    w-full
    gap-3
    `

    const blockStyle = `
    w-3 bg-blue-600
    h-3rem
    `

    const blockStyleB = `
    w-4 bg-green-600
    h-3rem
    `

    const blockStyleC = `
    w-12 bg-green-600
    h-3rem
    `

    return (
        <div className={style}>
            <div className={firstRowStyle}>
                <div className={blockStyle}></div>
                <div className={blockStyle}></div>
            </div>

            <div className={secondRowStyle}>
                <div className={blockStyleB}></div>
                <div className={blockStyleB} ></div>
                <div className={blockStyleB}></div>
            </div>

            <div className={thirdRowStyle}>
                <div className={blockStyleC}></div>
            </div>


        </div>

    )
}
