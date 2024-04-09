import classNames from 'classnames';
import styles from './lottie-player.module.scss';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

export interface LottiePlayerProps {
    className?: string;
    showControls: boolean;
}

export const LottiePlayer = ({ className, showControls }: LottiePlayerProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Player
                autoplay
                loop
                src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
                style={{ height: '300px', width: '300px' }}
            >
                <Controls visible={showControls} buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player>
        </div>
    );
};
