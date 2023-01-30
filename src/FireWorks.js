import React, {useEffect} from 'react';
import { Fireworks } from "@fireworks-js/react";

function FireWorks({fireworks, setFireWorks}) {

    useEffect(() => {
        const delay = 10;
        let fireWorksTimer = setTimeout(() => setFireWorks(false), delay * 1000);
        return () => {
            clearTimeout(fireWorksTimer);
        };
    },[fireworks, setFireWorks])

    return (
        <div>
            <Fireworks
                options={{
                    autoresize: true,
                    opacity: 0.2,
                    acceleration: 1.05,
                    friction: 0.97,
                    gravity: 1.5,
                    particles: 50,
                    traceLength: 3,
                    traceSpeed: 50,
                    explosion: 50,
                    intensity: 80,
                    flickering: 50,
                    lineStyle: 'round',
                    rocketsPoint: {
                        min: 50,
                        max: 100
                    },
                    lineWidth: {
                        explosion: {
                            min: 3,
                            max: 3
                        },
                        trace: {
                            min: 5,
                            max: 10
                        }
                    },
                }}
                style={{
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    position: "fixed",
                    zIndex: -1,
                    background: "#212f52"
                }}
            />

        </div>
    );
}

export default FireWorks;