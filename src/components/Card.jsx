/* eslint-disable react/prop-types */


export default function Card({img, children, cardClass, ...props}){
    return (
        <div className={`flex flex-col gap-4 items-center border-2 rounded-xl p-4 divide-y-2 divide-gray-300 shadow-md ${cardClass}`}>
            <img src={img} {...props} className="rounded"/>
            {children}
        </div>
    )
}