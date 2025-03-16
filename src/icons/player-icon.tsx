import SvgIcon, { SvgProps } from './svg-icon';

export default function PlayerIcon(props: SvgProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 16 16">
      <path
        strokeWidth="0"
        d="M8 3a1 1 0 1 0 0-3 1 1 0 0 0 0 3ZM15 4v2h-4v10H9v-5H7v5H5V6H1V4h14Z"
      />
    </SvgIcon>
  );
}
