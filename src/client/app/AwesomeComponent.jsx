import React from 'react';
import styles from './style.css';

class AwesomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            likesCount: 0
        }
        this.onLike = this.onLike.bind(this);
    }

    onLike() {
        let newLikesCount = this.state.likesCount + 1;
        this.setState({
            likesCount: newLikesCount
        })
    }

    render() {
        return (
            <div>
                Likes: <span>{this.state.likesCount}</span>
                <div className={styles.buttonWrapper}>
                    <button 
                        className={styles.likeButton} 
                        onClick={this.onLike}>
                        Like Me
                    </button>
                </div>
            </div>
        )
    }
}

export default AwesomeComponent;