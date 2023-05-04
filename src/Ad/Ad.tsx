import './Ad.css'

export function Ad(props: {flavor: string, fontSize: number, darkTheme: boolean}) {
    return (
        <div className="individualAd">
        <div className={props.darkTheme ? 'lightTheme' : 'darkTheme'} style={{fontSize: `${props.fontSize}px`}}>
            Vote For 
            <div className='ad-flavor'>{props.flavor}</div>
        </div>
        </div>
    )
}