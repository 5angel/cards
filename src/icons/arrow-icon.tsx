import SvgIcon, { SvgProps } from './svg-icon';

export default function ArrowIcon(props: SvgProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 12h14m0 0-6-6m6 6-6 6"
      />
    </SvgIcon>
  );
}
