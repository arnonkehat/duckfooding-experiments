import classNames from 'classnames';
import styles from './rive-player.module.scss';
import Rive from '@rive-app/react-canvas';

export interface RivePlayerProps {
    className?: string;
}

export const RivePlayer = ({ className }: RivePlayerProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Rive src="https://cdn.rive.app/animations/vehicles.riv" stateMachines="bumpy" />
        </div>
    );
};
