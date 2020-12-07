import { DateTime } from 'luxon';

export default (props) => {
    if (!props.timestampMillis) {
        return null;
    }

    const lastUpdateTime = DateTime.fromMillis(parseInt(props.timestampMillis)).toRelative();

    return (
        <span className='last-updated'>{'Last updated ' + lastUpdateTime}</span>
    );
};