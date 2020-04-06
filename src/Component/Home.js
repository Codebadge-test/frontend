import React from 'react';
import Cookies from 'js-cookie'
const Home = () => {
    if(!Cookies.get("token"))
    return (
        <>
            <div>
                <h1>Codebadge Project</h1>
                <p>The project which stands for the rights of the developers.</p>
            </div>
        </>
    );
    else{
        return(
            <>
                <div>
                    
                </div>
            </>
        )
    }
}

export default Home;
