import './Feedback.scss';
import feedback from '../../assets/feedback/feedback.svg';
import avatar from '../../assets/feedback/avatar.svg';
import star from '../../assets/feedback/star.svg';


const FeedBack = () => {
    return (
        <div class="feedback">
            <img src={feedback} />
            <div class="text-container">
                <h1>Buyer`s feedback</h1>
                <p>
                    Whoe front da of piate heard ah ought. His defective nor
                    convinced residense won. Conenction has put impossible own
                    apartments boisterous.
                </p>
                <div class="avatar">
                    <div class="img-container">
                        <img src={avatar} />
                    </div>
                    <div class="avatar-details">
                        <h6>Selena Hakim</h6>
                        <p>UI Designer</p>
                        <div class="stars">
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedBack;
