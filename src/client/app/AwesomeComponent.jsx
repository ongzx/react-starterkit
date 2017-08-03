import React from 'react';
import styles from './style.css';
import cx from 'classnames';

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
                <div className={cx(styles.buttonWrapper, styles.centered)}>
                    <button 
                        className={styles.likeButton} 
                        onClick={this.onLike}>
                        Like Me
                    </button>
                </div>
                <div className={styles.flexContainer}>
                    <div className={[styles.flexChild, styles.child1]} />
                    <div className={[styles.flexChild, styles.child2]} />
                    <div className={[styles.flexChild, styles.child3]} />
                </div>
            </div>
        )
    }
}

export default AwesomeComponent;