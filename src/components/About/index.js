import React from 'react';
import selfPortrait from '../../assets/images/self-portrait.png';

function About() {
    return (
        <section>
            <h1 id='about'>About Me!</h1>
            <img src={selfPortrait} className='self-portrait' style={{ width: "50%" }} alt='Self portrait' />
            <div className='about-me-desc'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
                    condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
                    mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum.
                    Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique
                    justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea
                    dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh.
                    Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
                </p>
            </div>
        </section>
    );
}

export default About;