const ErrorMessage = ({ message }: { message: string | Error }) => {
    return (
        <main>
            <div className="absolute text-neutral-400">{message}</div>
        </main>
    );
};

export default ErrorMessage;
