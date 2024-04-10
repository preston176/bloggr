import { Oval } from 'react-loader-spinner'

const Loading = () => {
    return (
        <div className="fixed inset-0 grid place-items-center bg-white z-30">
            {<Oval
                visible={true}
                height="80"
                width="80"
                color="#083bbc"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass="" />
            }
        </div>
    )
}

export default Loading
