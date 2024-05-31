/* eslint-disable react/prop-types */


export default function Card({img, children, ...props}){
    return (
        <div className="flex flex-col gap-4 items-center border-2 rounded-xl p-4 divide-y-2 divide-gray-300 shadow-md w-full md:w-1/3">
            <img src={img} {...props} width="75px" className=''/>
            {children}
        </div>
    )
}