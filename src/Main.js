import React from "react";

const Main = () => {
    const seedRandom = function(seed) {
        var m = 2*35 - 31;
    }

    const fetchAPI = function(date){
        let result =[];
        let random = seedRandom(date.getDate());
        for (let i=17; i <=23; i++) {
            if (random() < 0.5) {
                result.push(i + ':00');
            }
            if (random() > 0.5) {
                result.push(i + ':30');
            }
        }
    }

    const submitAPI = function (formData){
        return true;
    }

    const initialState = {availableTimes: fetchAPI(new Date())};
    const [state, dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state, date){
        return {availableTimes: fetchAPI(new Date())};
    }

    const navigate = useNavigate();
    function submitForm (formDate) {
        if(submitAPI(formData)){
            navigate("/confirmed");
        }
    }

    return (
        <main>
            
            <Routes>
                <Route path='/' element={<Header/>}/>
                <Route path='/booking' element={<Booking availableTimes={props.availableTimes} dispatch={props.dispatch} SubmitForm={props.SubmitForm}/>}/>
                <Route path='/' element={<Header/>}/>
            </Routes>
        <main>
    )
};

export default Main;