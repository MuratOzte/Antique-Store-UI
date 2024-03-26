import './Subscribe.scss';

import gramaphone from '../../assets/subscribe/gramophone.svg';
import send from '../../assets/subscribe/send.svg';

const Subscribe = () => {
    return (
        <div class="subscribe">
            <div class="text-section">
                <h1>Subscribe our newletter</h1>
                <p>
                    Reciev latest news, update, and many other things every
                    week.
                </p>
                <div class="custom-input">
                    <input type="text" placeholder="Enter Your email adress" />
                    <div class="send-button">
                        <img src={send} alt="send" />
                    </div>
                </div>
            </div>
            <div class="image-section">
                <img src={gramaphone} />
            </div>
        </div>
    );
};

export default Subscribe;
