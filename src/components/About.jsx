import Card from "./Card";
import code from '../assets/icons/code.svg'

export default function About(){
    return (
        <div className="flex flex-col px-10 mx-16 ">
            <h1 className="font-bold text-4xl text-darkBlue ">About Me</h1>
            <div className="flex flex-wrap sm:flex-wrap md:flex-nowrap gap-5 mt-5">
                <Card img={code}/>
                <Card />
                <Card />
            </div>
        </div>
    )
}