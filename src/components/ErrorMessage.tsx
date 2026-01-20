const ErrorMessage = ({ message }: { message: string | Error }) => {
    return (
        <main className="flex items-center justify-center">
            <div className="rounded-lg bg-white p-2 text-neutral-400">{message}</div>
        </main>
    );
};

export default ErrorMessage;
