export const Nutrition = ({ label, quantity, unit }) => {
    return (
        <div className="information">
            <p><b>{label}</b> - {quantity} {unit}</p>
        </div>
    )
}