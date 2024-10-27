
const Title = ({ myText="Texto por default" }: { myText: string }) => {
    return (
        <div>
            <h1>{myText}</h1>
        </div>
    );
};

export default Title;