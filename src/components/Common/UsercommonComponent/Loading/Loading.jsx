import icon from '../../../../assets/userAssets/mainImage2.jpeg'
import './loading.css'
export const Loading = () => {
    return (
        <>
            <div className="h-screen flex justify-center items-center animate-pulse zoomInOut">
                <img src={icon} className="" />
            </div>
        </>
    )
}