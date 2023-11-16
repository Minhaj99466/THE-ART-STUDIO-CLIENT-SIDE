import icon from '../../../../assets/userAssets/Critical thinking-cuate.svg'
import './loading.css'
export const Loading = () => {
    return (
        <>
            <div className="h-96 flex justify-center items-center animate-pulse ">
                <img  src={icon} className="w-40 h-40" />
            </div>
        </>
    )
}