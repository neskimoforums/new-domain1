export default function FloatingCall() {
    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex items-center">
            {/* The "We're Live Now" Label */}
            <div className="bg-green-400 text-white font-bold px-4 py-2 rounded-l-md -mr-5 text-[14px] pr-8 shadow-lg pointer-events-none">
                📞 We're Live Now
            </div>

            {/* THE MAIN GROUP - Hovering anything inside this triggers the states */}
            <div className="relative flex items-center justify-center w-20 h-20 group">

                {/* STATIC RINGS - These do NOT float. 
                    They hide and stop animating when the group is hovered. */}
                <div className="absolute inset-0 border-2 border-green-400 rounded-full animate-heartbeat group-hover:opacity-0 group-hover:[animation-play-state:paused] transition-all duration-200 pointer-events-none"></div>

                <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-80 transition-all duration-200 pointer-events-none"></div>

                {/* FLOATING WRAPPER - Only the button and dot move up/down */}
                <div className="relative flex items-center justify-center w-full h-full animate-float group-hover:[animation-play-state:paused]">

                    {/* MAIN BUTTON 
                        - No heartbeat normally.
                        - Fast heartbeat + Light color ONLY on hover.
                    */}
                    <a
                        href="tel:+16465364302"
                        className="bg-green-400 hover:bg-green-300 w-18 h-18 rounded-full shadow-2xl relative z-10 flex items-center justify-center border-2 border-white/10 transition-colors duration-200 hover:animate-heartbeat-fast"
                    >
                        <span className="text-3xl">☎️</span>
                    </a>

                </div>
                {/* ORANGE DOT - Follows float, pulses fast on hover */}
                <div className="absolute bottom-2 right-2 w-4 h-4 bg-orange-600 rounded-full z-20 opacity-90 animate-heartbeat pointer-events-none"></div>

            </div>
        </div>
    );
}