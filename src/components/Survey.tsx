import React from "react";
import Image from "next/image";
const Survey = () => {
    return(
        <div className="container pt-40">
            <div className="grid lg:grid-cols-[50%,1fr] gap-20">
                <div>
                   <Image className="w-[100%] h-auto lg:w-auto lg:h-[90vh]" src="/survey.jpg" width={1000} height={600} alt="survey image" />
                </div>
                <div className="self-center">
                    <h2 className="text-4xl md:text-6xl font-bold">Survey</h2>
                    <h2 className="text-4xl md:text-6xl font-bold pt-3">
                        About Our <span className="text-accent">Food</span>
                    </h2>
                    <p className="text-gray-700 pt-16">
                    Survey Our Food invites you to share your thoughts on our delicious offerings. Your feedback helps us enhance your dining experience, ensuring every meal is a delight. Join us in creating the perfect menu!
                    </p>
                    <p className="text-gray-700 pt-8">
                    At Survey Our Food, we value your opinion! Help us improve by sharing your experiences with our dishes. Your feedback is essential in crafting the perfect menu to satisfy every palate!
                        
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Survey;