
const Button = ({ onClick, text }: { onClick: () => void; text: string }) => {
    return (
        <div>
            <button onClick={onClick}>{text}</button>
        </div>
    );
};

export default Button;