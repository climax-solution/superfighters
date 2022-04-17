import ArcText from 'arc-text';
import { useEffect } from 'react';

export default function Logo() {
    
    useEffect(() => {
        const mainTitle = document.getElementById('logo-title');
        const subTitle = document.getElementsByClassName('logo-subtitle');

        const logoText = new ArcText(mainTitle);
        logoText.arc(1000);

        for (let i = 0; i < subTitle.length; i ++) {
            const subLogoText = new ArcText(subTitle[i]);
            subLogoText.arc(800);
        }

    },[])

    return (
        <div className="logo">
            <h1 id="logo-title">SUPER FIGTHERS</h1>
            <p className='logo-subtitle'>The one reward pool with the fiercest</p>
            <p className='logo-subtitle'>daily return and the lowest dev fee</p>
            {/* <ReactArcText
                text={"SUPER FIGTHERS"}
                direction={1}
                arc={160}
                class={"logo-title"}
            /> */}
        </div>
    )
}