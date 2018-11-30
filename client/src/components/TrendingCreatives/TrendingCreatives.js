import React, { Component } from 'react';
import './TrendingCreatives.scss';

import CarouselCreatives from '../../components/CarouselCreatives/CarouselCreatives';

// import Ashley from '../../images/Creatives/ashley-longshore.png';
// import Bedouin from '../../images/Creatives/bedouin.png';
// import BuddhistChef from '../../images/Creatives/buddhist-chef.png';
// import DavidBellemere from '../../images/Creatives/david-bellemere.png';
// import Mira from '../../images/Creatives/mira-kater.png';
// import MitchGobel from '../../images/Creatives/mitch-gobel.png';
// import PeggyGou from '../../images/Creatives/peggy-gou.png';
// import YogaGirl from '../../images/Creatives/yoga-girl.png';
// import GabbyBernstein from '../../images/Creatives/gabby-bernstein.png';
// import Satori from '../../images/Creatives/satori.png';


class TrendingCreatives extends Component {
    render() {
        return (
            <div className="trendingCreatives">
                <h1>Creatives</h1>
                <CarouselCreatives />
            </div>
            // <div className="trendingCreatives">
            //     <h1>Creatives</h1>
            //     <div className="creatives-content">
            //         <div>
            //             <img className="ashleylongshore trendings" src={Ashley} alt="ashley" />
            //             <p>Ashley Longshore</p>
            //         </div>
            //         <div>
            //             <img className="bedouin trendings" src={Bedouin} alt="bedouin" />
            //             <p>Bedouin</p>
            //         </div>
            //         <div>
            //             <img className="buddhistchef trendings" src={BuddhistChef} alt="buddhistchef" />
            //             <p>Buddhist Chef</p>
            //         </div>
            //         <div>
            //             <img className="davidbellemere trendings" src={DavidBellemere} alt="davidbellemere" />
            //             <p>David Bellemere</p>
            //         </div>
            //         <div>
            //             <img className="mira trendings" src={Mira} alt="mira" />
            //             <p>Mira Kater</p>
            //         </div>
            //         <div>
            //             <img className="mitchgobel trendings" src={MitchGobel} alt="mitchgobel" />
            //             <p>Mitch Gobel</p>
            //         </div>
            //         <div>
            //             <img className="peggygou trendings" src={PeggyGou} alt="peggygou" />
            //             <p>Peggy Gou</p>
            //         </div>
            //         <div>
            //             <img className="yogagirl trendings" src={YogaGirl} alt="yogagirl" />
            //             <p>Rachel Brathen</p>
            //         </div>
            //         <div>
            //             <img className="gabbybernstein trendings" src={GabbyBernstein} alt="gabbybernstein" />
            //             <p>Gabby Bernstein</p>
            //         </div>
            //         <div>
            //             <img className="satori trendings" src={Satori} alt="satori" />
            //             <p>Satori</p>
            //         </div>
            //     </div>
            // </div>
        );
    }
}

export default TrendingCreatives;