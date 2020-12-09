import { DateTime } from 'luxon';

const Component = (props) => {
  if (!props.timestampMillis) {
    return null;
  }

  const lastUpdateTime = DateTime.fromMillis(
    parseInt(props.timestampMillis)
  ).toRelative();

  return (
    <span className="last-updated">{'Last updated ' + lastUpdateTime}</span>
  );
};

export default Component;
