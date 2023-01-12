import connectWallet from "../assets/img/connect-wallet.svg";
import uploadArt from "../assets/img/upload.svg";
import publishArt from "../assets/img/publish-art.svg";
import MArketPlace from "../assets/img/market-place.svg";
const CreateAndSell = () => {
    return ( 
        <section className="create-and-sell">
            <h2>Create & Sell NFT</h2>
            <ul>
                <li>
                <img src={connectWallet} alt="Connect Wallet" />
                <h3>Connect Wallet</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie, tortor consectetur bibendum.</p>
                </li>
                <li>
                <img src={uploadArt} alt="Upload Art" />
                <h3>Upload Art</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie, tortor consectetur bibendum.</p>
                </li>
                <li>
                <img src={publishArt} alt="Publish Art" />
                <h3>Publish Art</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie, tortor consectetur bibendum.</p>
                </li>
                <li>
                <img src={MArketPlace} alt="Market Place" />
                <h3>Market Place</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie, tortor consectetur bibendum.</p>
                </li>
            </ul>
        </section>
     );
}
 
export default CreateAndSell;