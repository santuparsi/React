function ToggleButton() {
    const [isOn, setIsOn] = useState(true);

    return (
        <button onClick={() => setIsOn(prev => !prev)}>
            {isOn ? "ON" : "OFF"}
        </button>
    );
}
export default ToggleButton;
