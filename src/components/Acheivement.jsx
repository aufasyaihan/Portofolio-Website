import achievements from "../lib/Achievement";
import Card from "./Card";

export default function Achievement() {
    return (
        <div className="flex flex-col px-10 pt-10 md:px-24 ">
            <h1 className="font-bold text-4xl text-darkBlue-900 underline underline-offset-8 decoration-sky-500">
                Achievements
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-5 mt-5">
                {achievements.map((achievement) => (
                    <Card key={achievement.id} img={achievement.image}>
                        <div className="w-full">
                            <h1 className="font-bold">{achievement.title}</h1>
                            <p className="font-light text-gray-500">by {achievement.issuer}</p>
                            <p className="text-right text-gray-500">
                                {achievement.year}
                            </p>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
