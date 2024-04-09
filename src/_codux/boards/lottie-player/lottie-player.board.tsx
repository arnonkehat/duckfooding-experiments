import { createBoard } from '@wixc3/react-board';
import { LottiePlayer } from '../../../components/lottie-player/lottie-player';

export default createBoard({
    name: 'LottiePlayer',
    Board: () => <LottiePlayer showControls={false} />,
    isSnippet: true,
});
