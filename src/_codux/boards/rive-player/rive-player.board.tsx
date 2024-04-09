import { createBoard } from '@wixc3/react-board';
import { RivePlayer } from '../../../components/rive-player/rive-player';

export default createBoard({
    name: 'RivePlayer',
    Board: () => <RivePlayer />,
    isSnippet: true,
});