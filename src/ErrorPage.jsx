import ErrorImg from './assets/errorImg.png'

function ErrorPage(){
    return (
        <div className="errorPage flex items-center w-full h-full">
            <div className="imageWrapper w-full h-max border-b-2 flex justify-center">
                <img src={ErrorImg} className='h-100 ' alt="Error" />
            </div>
        </div>
    );
}

export default ErrorPage