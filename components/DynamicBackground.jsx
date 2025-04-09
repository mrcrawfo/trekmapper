'use client';

import { useState, useEffect } from 'react';

export default function DynamicBackground() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        // Define the scroll event handler
        const handleScroll = () => {
            const scrollPercentage = window.scrollY / (window.innerHeight + window.scrollY);
            setScrollPosition(scrollPercentage);
        };
    
        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);
    
        // Cleanup the event listener when the component is unmounted
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="fixed inset-0 h-full bg-gradient-to-b from-background-primary to-background-secondary mix-blend-screen pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d={`M0 ${80 + scrollPosition * 10} Q25 ${75 + scrollPosition * 15}, 50 ${70 + scrollPosition * 20}, 75 ${65 + scrollPosition * 25}, 100 ${60 + scrollPosition * 30}`} fill="none" stroke="rgba(32, 137, 245, 0.1)" strokeWidth="0.5" />
            <path d={`M0 ${85 + scrollPosition * 8} Q25 ${75 + scrollPosition * 13}, 50 ${72 + scrollPosition * 18}, 75 ${68 + scrollPosition * 22}, 100 ${65 + scrollPosition * 25}`} fill="none" stroke="rgba(32, 137, 245, 0.15)" strokeWidth="0.5" />
            <path d={`M0 ${82 + scrollPosition * 12} Q25 ${80 + scrollPosition * 14}, 50 ${75 + scrollPosition * 19}, 75 ${70 + scrollPosition * 24}, 100 ${68 + scrollPosition * 26}`} fill="none" stroke="rgba(32, 137, 245, 0.12)" strokeWidth="0.5" />
            <path d={`M0 ${88 + scrollPosition * 7} Q25 ${82 + scrollPosition * 12}, 50 ${78 + scrollPosition * 17}, 75 ${73 + scrollPosition * 21}, 100 ${70 + scrollPosition * 24}`} fill="none" stroke="rgba(32, 137, 245, 0.08)" strokeWidth="0.5" />
            <path d={`M0 ${86 + scrollPosition * 9} Q25 ${84 + scrollPosition * 11}, 50 ${80 + scrollPosition * 15}, 75 ${75 + scrollPosition * 20}, 100 ${73 + scrollPosition * 22}`} fill="none" stroke="rgba(32, 137, 245, 0.18)" strokeWidth="0.5" />
            <path d={`M0 ${90 + scrollPosition * 6} Q25 ${85 + scrollPosition * 10}, 50 ${82 + scrollPosition * 13}, 75 ${78 + scrollPosition * 17}, 100 ${75 + scrollPosition * 20}`} fill="none" stroke="rgba(32, 137, 245, 0.05)" strokeWidth="0.5" />
            <path d={`M0 ${84 + scrollPosition * 11} Q25 ${83 + scrollPosition * 12}, 50 ${77 + scrollPosition * 18}, 75 ${72 + scrollPosition * 23}, 100 ${71 + scrollPosition * 24}`} fill="none" stroke="rgba(32, 137, 245, 0.14)" strokeWidth="0.5" />
            <path d={`M0 ${87 + scrollPosition * 8} Q25 ${86 + scrollPosition * 9}, 50 ${83 + scrollPosition * 12}, 75 ${80 + scrollPosition * 15}, 100 ${77 + scrollPosition * 18}`} fill="none" stroke="rgba(32, 137, 245, 0.11)" strokeWidth="0.5" />
            <path d={`M0 ${89 + scrollPosition * 7} Q25 ${87 + scrollPosition * 9}, 50 ${85 + scrollPosition * 11}, 75 ${82 + scrollPosition * 14}, 100 ${80 + scrollPosition * 16}`} fill="none" stroke="rgba(32, 137, 245, 0.07)" strokeWidth="0.5" />
            <path d={`M0 ${91 + scrollPosition * 5} Q25 ${89 + scrollPosition * 7}, 50 ${87 + scrollPosition * 9}, 75 ${85 + scrollPosition * 11}, 100 ${83 + scrollPosition * 13}`} fill="none" stroke="rgba(32, 137, 245, 0.09)" strokeWidth="0.5" />
        </svg>
        {/* <div className="relative h-full">
            {[...Array(20)].map((_, i) => {
                const opacity = 0.05 + (i * 0.01);
                const yOffset = 60 + (i * 2)
                // const yOffset = scrollPosition;
                const speed = 1 + (i * 0.1);
                
                return (
                    <svg 
                    key={i}
                    className="absolute inset-0 w-full h-full"
                    style={{
                        transform: `translateY(calc(var(--scroll) * ${speed}px))`,
                        transition: 'transform 0.1s ease-out'
                    }}
                    preserveAspectRatio="none"
                    viewBox="0 0 100 100"
                    >
                    <path
                        d={`M0 ${yOffset} Q25 ${yOffset-3}, 50 ${yOffset-5}, 75 ${yOffset-8}, 100 ${yOffset-10}`}
                        fill="none" 
                        stroke={`rgba(32, 137, 245, ${opacity})`}
                        strokeWidth="0.5"
                    />
                    </svg>
                );
            })}
            <script
            dangerouslySetInnerHTML={{
                __html: `
                document.addEventListener('scroll', () => {
                    document.documentElement.style.setProperty('--scroll', window.pageYOffset);
                });
                `
            }}
            />
        </div> */}
        </div>
    );
}
