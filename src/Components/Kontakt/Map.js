import React from 'react';

export default function OurMap({laptop}) {
    const containerStyle = !laptop ?{
        position: 'relative',
        width: '100%',
        paddingBottom: '120%',  // Aspect ratio: (height / width) * 100 = (400 / 520) * 100 = 76.92%
        overflow: 'hidden',
        maxWidth: "100%",
    } :   {
        position: 'relative',
        width: '100%',
        // Aspect ratio: (height / width) * 100 = (400 / 520) * 100 = 76.92%
        overflow: 'hidden',
        height: "100%",
        minWidth: "100%"
    };

    const iframeStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        border: 'none'
    };

    const linkStyle = {
        position: 'absolute',
        bottom: '10px',
        right: '10px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: '2px 5px',
        borderRadius: '3px',
        textDecoration: 'none',
        fontSize: '10px'
    };

    return (
        <div style={containerStyle}>
        
            <iframe 
                style={iframeStyle}
                frameborder="0" 
                scrolling="no" 
                marginheight="0" 
                marginwidth="0" 
                id="gmap_canvas" 
                src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Lipsk%C3%A1%202444/4%20Brno+(Jirkova%20tesla)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            </iframe>
        
        </div>
    );
}
