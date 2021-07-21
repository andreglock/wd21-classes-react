import linda1 from './../img/linda1.jpg'
import linda2 from './../img/linda2.jpg'
import linda3 from './../img/linda3.jpg'
import linda4 from './../img/linda4.jpg'
import linda5 from './../img/linda5.jpg'

export default function Index() {
    return <div id="content" className="indexContent">
        <header>
            <h1>Codelicious Classes</h1>
        </header>
        <main>
            <div>
                <h2>Flexbox games:</h2>
                <a className="block" href="https://flexboxfroggy.com/" target="blank">Level one: Flexfroggy</a>
                <a className="block" href="https://www.flexboxdefense.com/" target="blank">Level two: Flexbox Defense</a>
            </div>
            <div>
                <h2>Other CSS games:</h2>
                <a className="block" href="https://flukeout.github.io/" target="blank">CSS Diner</a>
                <a className="block" href="https://cssgridgarden.com/" target="blank">CSS Garden</a>
            </div>
            <div>
                <h2>CSS Designing Tools:</h2>
                <a className="block" href="https://bennettfeely.com/clippy/" target="blank">Clip-path maker</a>
                <a className="block" href="https://cssgradient.io/" target="blank">Gradient Maker</a>
                <a className="block" href="https://paletton.com/" target="blank">Color Pallet Generator</a>
            </div>
            <img src={linda1} alt="Linda"/>
            <img src={linda2} alt="Linda"/>
            <img src={linda3} alt="Linda"/>
            <img src={linda4} alt="Linda"/>
            <img src={linda5} alt="Linda"/>
        </main>
    </div>
}