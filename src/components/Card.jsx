/* eslint-disable react/prop-types */


export default function Card({img}){
    return (
        <div className="flex flex-col gap-4 items-center border-2 rounded-xl p-4 divide-y-2 divide-gray-300 shadow-md">
            <img src={img} alt="code" width="75px" className=''/>
            <p className='pt-4 text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id asperiores ullam magni. Quaerat fugit quam, illum inventore delectus, excepturi voluptatem totam ipsa qui et esse eaque, aspernatur id corrupti voluptates.</p>
        </div>
    )
}