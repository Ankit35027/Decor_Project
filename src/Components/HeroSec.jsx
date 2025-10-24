import "./hero.css"
import { useState,useEffect } from "react"
export default function HeroSec(){
    return(
        <>
        <div className="hero">
            <div className="deco">
                <img src="https://www.bbassets.com/media/uploads/p/l/40317108_1-mansaa-decorative-led-string-2-mt-20-leds-multicolour-home-mandir-decor-moroccan-balls.jpg" alt="" />

            </div>
            <div className="content">
                <h1>STYLE STARTS AT HOME</h1>
                <h2>Curated modern décor for the trendsetters and tastemakers</h2>
                <p>Pick the décor that speaks your vibe — let’s make your space unforgettable!</p>
                <button>
                Let's Go
                </button>
            </div>
            
        </div>
        </>
    )
}