import React from 'react'
import Accordion from './Accordion'

function About(props) {
    return(
        <div className="About">
            <Accordion
                title="What is the purpose of the site"
                content="The purpose is to deliver a lot of recipes from api"
            />
            <Accordion
                title="How do I can find recipe?"
                content="You should go to drop down menu in the section Menu then select Search recipes button"
            />
            <Accordion
                title="From what site you take api?"
                content="<a href=https://www.edamam.com target=_blank>https://www.edamam.com/</a>"
            />
            <Accordion
                title="The Impact of Nutrition on Your Health"
                content="
        Unhealthy eating habits have contributed to the obesity epidemic in the United States: about one-third of U.S. adults (33.8%) are obese <br/>
        and approximately 17% (or 12.5 million) of children and adolescents aged 2—19 years are obese.<br/> 1 Even for people at a healthy weight,<br/>
        a poor diet is associated with major health risks that can cause illness and even death. <br/>   These include heart disease, hypertension <br/>
        (high blood pressure), type 2 diabetes, osteoporosis, and certain types of cancer. By making smart food choices, you can help protect yourself from <br/>
        these health problems.<br/>
        The risk factors for adult chronic diseases, like hypertension and type 2 diabetes, are increasingly seen in younger ages, often a result of unhealthy eating <br/>
        habits and increased weight gain. Dietary habits established in childhood often carry into adulthood, so teaching children how to eat healthy at a young age will help<br/>
        them stay healthy throughout their life.<br/>
        The link between good nutrition and healthy weight, reduced chronic disease risk, and overall health is too important to ignore. By taking steps to eat healthy, you'll be<br/>
        on your way to getting the nutrients your body needs to stay healthy, active, and strong. As with physical activity, making small changes in your diet can go a long way,<br/>
        and it's easier than you think!<br/>"
            />

        </div>
    )
}

export default About