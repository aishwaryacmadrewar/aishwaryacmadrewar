import {useState} from "react";

const BookingForm = () => {
    const [resDate, setResDate] = useState("");
    const [availableTime, setAvailableTime] = useState("Select");
    const [numGuests, setNumGuests] = useState(1);
    const [occasion, setOccasion] = useState("Select");


    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Table Reserved!");
        console.log("Form Submitted")
        clearForm();
      };

    const clearForm = () => {
        setResDate("");
        setAvailableTime("Select");
        setNumGuests(1);
        setOccasion("Select");
    }

    const getIsFormValid = () => {
            if (resDate === "" || availableTime === "Select" || numGuests === 0) {
                return false;
            } else {
                return true;
            }
    }


    return (
    <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', maxWidth: '200px', gap: '20px'}}>
        <div className="Field">
            <label htmlFor="resdate">Choose date<sup>*</sup></label>
            <input
            type="date"
            id="resdate"
            value={resDate}
            onChange={(e) => {
                setResDate(e.target.value);
                }}/>
        </div>
        <div className="Field">
            <label htmlFor="resTime">Choose time<sup>*</sup></label>
            <select
            id="resTime "
            value={availableTime}
            onChange={(e) => setAvailableTime(e.target.value)}>
                <option>Select</option>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
        </div>
        <div className="Field">
            <label htmlFor="numguests">Number of guests<sup>*</sup></label>
            <input
            type="number"
            placeholder="1" min="1" max="10"
            id="numguests"
            value={numGuests}
            onChange={(e) => setNumGuests(e.target.value)}/>
        </div>
        <div className="Field">
            <label htmlFor="occasions">Occasion</label>
            <select
            id="occasions"
            value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option>Select</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
        </div>
   <button type="submit" disabled={!getIsFormValid()}>
        Reserve a Table
    </button>
</form>
    )
}

export default BookingForm;
