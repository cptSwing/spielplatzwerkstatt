import { classNames } from 'cpts-javascript-utilities';

const LoadingMessage = () => {
    return (
        <main className="flex items-center justify-center">
            <LoadingSpinner classes="text-theme-primary" />
        </main>
    );
};

export default LoadingMessage;

export const LoadingSpinner = ({ classes }: { classes?: string }) => {
    return <div className={classNames('size-10 animate-spin bg-[currentColor] [mask:url("/svg/ArrowPathRoundedOutline.svg")]', classes && classes)} />;
};
