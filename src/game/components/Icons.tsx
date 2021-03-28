
import './Icon.scss';


interface IconsProps {
    style: React.CSSProperties | undefined;

}

export const Circle = ({ style }: IconsProps) => {
    return (
        <div className='icon-wrapper'>
            <svg
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 341.333 341.333"
                className='icon icon--circle'
                fill='currentColor'
                style={style}
            >
                <path
                    d="M170.667,0C76.41,0,0,76.41,0,170.667s76.41,170.667,170.667,170.667s170.667-76.41,170.667-170.667S264.923,0,170.667,0z
			 M170.667,298.667c-70.692,0-128-57.308-128-128s57.308-128,128-128s128,57.308,128,128S241.359,298.667,170.667,298.667z"/>

            </svg>
        </div>
    )
}


export const Cross = ({ style }: IconsProps) => {
    return (
        <div className='icon-wrapper'>
            <svg
                version="1.1"
                id="Capa_1"
                viewBox="0 0 348.333 348.334"
                className='icon icon--cross'
                fill='currentColor'
                style={style}
            >
                <path d="M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85
		c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563
		c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85
		l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554
		L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z" />
            </svg>
        </div>
    )
}